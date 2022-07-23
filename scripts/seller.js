import {header,footer} from "../Components/common.js";

document.querySelector("#top_header").innerHTML = header()
document.querySelector("#footer").innerHTML = footer()



let arrr = JSON.parse(localStorage.getItem("carttt")) 

document.querySelector("#cart_count").innerText = arrr.length