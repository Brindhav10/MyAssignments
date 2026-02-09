import test from '@playwright/test'
test("DropDown Select", async({page})=> {
    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("[name='DropdownListFieldController_0']", {label: 'Invoicing/Billing'})
    await page.waitForTimeout(4000)
    await page.selectOption("[name='DropdownListFieldController']", {label: 'Kendo UI'})
})

//Home Assignment

test("Leafground Dropdown ", async ({ page }) => {

    await page.goto("https://leafground.com/select.xhtml")
    await page.selectOption(".ui-selectonemenu", { label: 'Playwright' })
  
    const select_locator = page.locator('select.ui-selectonemenu')
    const options_list = select_locator.locator("option");
    const total_count = await options_list.count()
    console.log("Total count of the select options: ", total_count)

    const allValues = await options_list.allInnerTexts();
    for (const value of allValues) {
        console.log("Listed Tools: ", value);
    }

    
    await page.locator("//label[text()='Select Country']").click()
    await page.getByRole("option", { name: "India" }).click();

     
    await page.locator("//label[text()='Select City']").click()
    await page.getByRole("option", { name: "Chennai" }).click();
    await page.waitForTimeout(2000)

    
    let courses = ['Playwright', 'PostMan', 'JMeter']
    const courseDropdown = page.locator("//ul[contains(@class,'ui-autocomplete-multiple-container')]/../button")
    for (let i = 0; i < courses.length; i++) {
        await courseDropdown.click();
        await page.locator(`li[data-item-label='${courses[i]}']`).click();
    }

    
    await page.locator("//label[.='Select Language']").click()
    await page.getByRole("option", { name: "English" }).click();

    
    const lang = page.locator("select[id='j_idt87:lang_input']")
    const lang_list = lang.locator("option");
    const lists = await lang_list.allInnerTexts();
    for (const list of lists) {
        console.log("Listed Languages: ", list);
    }

    
    await page.locator("//label[text()='Select Values']").click()
    await page.getByRole("option", { name: "Two" }).click();

})