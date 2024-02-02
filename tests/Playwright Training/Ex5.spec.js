//@ts-check
import { test, expect } from '@playwright/test';

test('Select Single Drop Down', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('#carselect')).toBeVisible();

    //Directly pass the Visible text

    await page.locator('#carselect').selectOption('benz');
    await page.waitForTimeout(3000);
    await page.locator('#carselect').selectOption('bmw');
    await page.waitForTimeout(3000);
    await page.locator('#carselect').selectOption('honda');
    await page.waitForTimeout(3000);


    //By using label/Visible Text

    await page.locator('#carselect').selectOption({ label: 'Benz' });
    await page.waitForTimeout(3000);
    await page.locator('#carselect').selectOption({ label: 'BMW' });
    await page.waitForTimeout(3000);
    await page.locator('#carselect').selectOption({ label: 'Honda' });
    //await page.waitForTimeout(3000);

    //using index 

    await page.locator('#carselect').selectOption({ index: 1 })
    await page.close();

});

test('Select Multiple Drop Down', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');

    await page.locator('#multiple-select-example').selectOption(['Apple', 'Orange', 'Peach']);

    await page.waitForTimeout(2000);

    //Assertions
    //1) Check no of options in drop down - approach1

    const options = await page.locator('#multiple-select-example option');
    await expect(options).toHaveCount(3);

    //Approach 2

    const optionNew = await page.$$('#multiple-select-example option');
    await expect(optionNew.length).toBe(3);


    //2)Check presence of value in the dropdown - Approach 1
    const content = await page.locator('#multiple-select-example').textContent(); // to get text content from the dropdown in the form of string
    
    // @ts-ignore
    expect(content.includes('Apple')).toBeTruthy();
   
    // @ts-ignore
    await expect(content.includes('Bike')).toBeFalsy();


    //Aproach 2 -using looping statement
    const textContent = await page.$$('#multiple-select-example')
    let status = false
    for (const option of textContent) {
        let value = await option.textContent()
        
        // @ts-ignore
        if (value.includes('Orange')) {
            status = true
            break
        }
    }
    expect(status).toBeTruthy()

    await page.close();


});

test('Bootstrap Drop Down', async ({ page }) => {

    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    // await page.locator('#billing_country').click()

    const options = await page.locator('//*[@id="billing_country"]/option')
    await expect(options).toHaveCount(250)

    const optionsNew = await page.$$('//*[@id="billing_country"]/option')
    await expect(optionsNew.length).toBe(250)

    //Selecting multiple options from drop down
    const dropdownOptions = await page.$$('//*[@id="billing_country"]/option')
    console.log(dropdownOptions.length)


    for (const option of dropdownOptions) {
        let status = false
        const value = await option.textContent()
        console.log("value is", value)
    
        // @ts-ignore
        if (value.includes('India')) {
            status = true
            
    
            break
        }
    }

    // //Deselect the options from the driop downs
    // for (const option of dropdownOptions) {

    //     const value = await option.textContent()
    //     console.log("value is", value)
    //     if (value?.includes('HTML') || value?.includes('CSS')) {
    //         await option.click()
    //     }
    // }
    //await page.screenshot({ path: 'file1.png' });
    await page.close();
});

test('Auto Suggest Drop Down',async ({page})=>{

    await page.goto("https://www.wikipedia.org/")
 
    await page.locator('#searchInput').fill('Delhi')
 
    
    //await page.waitForSelector("//a[@class='suggestion-link active']//div[@class='suggestion-text']")
 
    const fromCityOptions=await page.$$("//a[@class='suggestion-link active']//div[@class='suggestion-text']")
 
    for(const option of fromCityOptions){
     const value=await option.textContent();
     // console.log(value)
     // @ts-ignore
     if(value.includes('Delhi')){
         await option.click();
         break;
     }    
    }
    await page.waitForTimeout(10000);
 })

test('Hidden Drop Down',async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
 
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
 
    await page.locator("//span[normalize-space()='PIM']").click()
 
    await page.locator('//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[2]/i[1]').click()
 
    await page.waitForTimeout(3000)
 
    const options=await page.$$("//div[@role='listbox']//span")
 
    for(let option of options){
     const jobTitle=await option.textContent()
     console.log(jobTitle)
     if(jobTitle?.includes('QA Engineer')){
         await option.click()
         break
     }
     
    }
 
 
 })
 
 