const functionApiUrl = "https://ev-crc-function-dnfre3hxecgsbmea.centralus-01.azurewebsites.net/api/getvisitorcount"


document.addEventListener("DOMContentLoaded", () => {
    GetVisitorCount();
});

async function GetVisitorCount() {
    const response = await fetch(functionApiUrl);
    
    
    const countJson = await response.json();


    const count = countJson.count

    document.getElementById("counter").innerText = count;
  }
