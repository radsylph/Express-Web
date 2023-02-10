async function sendData(url, data, method, json) {
    let myHeaders = {
      "Allow-Control-Allow-Origin": "*",
    };
  
    if (json) {
      myHeaders["Content-Type"] = "application/json";
    }
  
    let req = await fetch(url, {
      method: method,
      headers: myHeaders,
      body: JSON.stringify(data),
    });
  
    let res = await req.json();
    console.log(res);
    if (res.message == true) {
      window.location.href = "http://localhost:3000/home";
    }
  }

let test = document.getElementById("Out-btn");
      test.addEventListener("click", () => {
        window.location.href = "http://localhost:3000/";
      });