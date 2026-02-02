import test, {chromium, webkit} from "@playwright/test";
//To launch REdbus website in Edge browser
test("Launch Edge Browser", async() => {
    const edgebrowser = await chromium.launch( {channel:"msedge", headless : false })  
    const edgecontext =await edgebrowser.newContext() 
    const edgepage =    await edgecontext.newPage()

    await edgepage.goto("https://www.redbus.in")

    const ebtitle = await edgepage.title()
    console.log("Edge Browser Title is: " +ebtitle)
    const eburl = edgepage.url()
    console.log("Edge Browser URL is: " +eburl) 

    //To launch Webkit browser
    const webkitbrowser = await webkit.launch({headless:false})
    const webkitcontext = await webkitbrowser.newContext()
    const webkitpage = await webkitcontext.newPage()

    await webkitpage.goto("https://www.flipkart.com")

    const wktiltle = await webkitpage.title()
    console.log("Webkit Browser Title is: " +wktiltle)
    const wkurl = webkitpage.url()
    console.log("Webkit URL is: " +wkurl)
}

)