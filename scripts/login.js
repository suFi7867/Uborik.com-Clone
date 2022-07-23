
import {header,footer} from "../Components/common.js";

document.querySelector("#top_header").innerHTML = header()
document.querySelector("#footer").innerHTML = footer()

document.querySelector("#form2").addEventListener("submit",signup);
let arr=[];
function signup(event){
  
   event.preventDefault()
let bag={
Name:document.querySelector("#name").value,
emaiL:document.querySelector("#email").value,
Password:document.querySelector("#pass").value

};
if(checkEmails(bag.emaiL)===true){
    arr.push(bag);
    localStorage.setItem("mydata",JSON.stringify(arr))
    alert("Registered Successfully")
} else {
    alert("Account already exist")
   
}
form2.reset()
}
function checkEmails(emaiL){
 let x=arr.filter(function
 (elem){
     return emaiL=== elem.emaiL;
})
if(x.length>0){
     return false
}else{
     return true
}
}


let arrr = JSON.parse(localStorage.getItem("carttt")) 

document.querySelector("#cart_count").innerText = arrr.length
