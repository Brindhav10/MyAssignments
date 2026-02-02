let browser ="Chrome"
function checkBrowserVersion(callback)
{
    setTimeout(() =>{
        
        callback(browser)
    } , 2000)
}

function logBrowserVersion(version) {
    console.log("Browser Version is " + version)
}


checkBrowserVersion(logBrowserVersion)