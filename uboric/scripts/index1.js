

let arr1 = JSON.parse(localStorage.getItem("mydata")) || [];
// console.log(arr)
let form = document.querySelector("#form2")
form.addEventListener("submit",loginFunc)

function loginFunc(event){
    event.preventDefault();
    let loginObj = {
        email: document.querySelector("#emailid").value,
        password: document.querySelector("#password").value,
    }
    if(checkLogin(loginObj.email,loginObj.password) === true){
        localStorage.setItem("loginLs",JSON.stringify(loginObj));
        alert("Login Successful")
        // window.location.reload();
        window.location.href = "index.html";
    }
    else{
        alert("Invalid Email or Password");
    }
    form.reset();
}

function checkLogin(email,password){
    let filtered = arr1.filter(function(el){
        return el.emaiL === email && el.Password === password;
    })
    if(filtered.length>0){
        return true;
    }
    else{
        return false;
    }
}