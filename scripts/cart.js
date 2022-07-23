import {header,footer} from "../Components/common.js";

document.querySelector("#top_header").innerHTML = header()
document.querySelector("#footer").innerHTML = footer()


//////////////////--




let arr = JSON.parse(localStorage.getItem("carttt")) 

document.querySelector("#cart_count").innerText = arr.length

document.querySelector("#cart_qty").innerText =`( ${arr.length} )` 


