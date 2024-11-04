describe('Example Test', () => {
    beforeAll(async () => {
      await device.launchApp();
    });
  
    it('should show welcome screen', async () => {
      await expect(element(by.text('Welcome to React Native'))).toBeVisible();
    });
    it('should scroll down', async () => {
    
        await waitFor(element(by.id('scrollView')))
          .toBeVisible()
          .withTimeout(5000); 
    
        await scrollDown('scrollView', 1000);
      });
  });
  