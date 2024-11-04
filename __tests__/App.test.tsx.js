/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App'; // Adjust the path as needed
import { it, afterEach, expect, describe } from '@jest/globals'; 
import { cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

afterEach(cleanup);

describe('App Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot;
  });

  it('Simulative test', async () => {
    expect({test: 'test'}).toMatchObject({test: 'test'})
  });

});

require('../e2e/firstTest.e2e.js'); // Тук импортвам Детокс тестовете от
                                    // папката е2е

 // При команда "detox test -c ios.sim.debug" се стартират тестовете
 // от ./__tests__/App.tests.js, които са Jest тестове, а не Detox