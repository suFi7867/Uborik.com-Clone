
import {header,footer} from "../Components/common.js";

document.querySelector("#top_header").innerHTML = header()
document.querySelector("#footer").innerHTML = footer()

import data from "./data.js";

let sort = document.getElementById("select_Sort");
sort.addEventListener("change", sorting);

function sorting() {
  if (sort.value === "lth") {
    let sort = data.sort((a, b) => {
      if (Number(a.price) > Number(b.price)) return 1;
      else if (Number(a.price) < Number(b.price)) return -1;
      else return 0;
    });

    Append(sort);
  } else {
    let sort = data.sort((a, b) => {
      if (Number(a.price) > Number(b.price)) return -1;
      else if (Number(a.price) < Number(b.price)) return 1;
      else return 0;
    });

    Append(sort);
  }
}

let mainDiv = document.getElementById("product_cont");

Append(data);

function Append(data) {
  mainDiv.innerHTML = "";

  data.forEach((el) => {
    let mDiv = document.createElement("div");
    mDiv.style.padding = "10px";
    // mDiv.style.border = "1px solid red";

    let iDiv = document.createElement("div");
    iDiv.style.overflow = "flexbox";

    let img = document.createElement("img");
    img.setAttribute("src", el.src);
    img.style.height = "150px";
    img.style.width = "150px";
    img.style.marginLeft = "15px";
    iDiv.append(img);

    let p = document.createElement("p");
    p.innerText = el.tittle;
    p.style.textAlign = "center";

    let cutprice = document.createElement("div");
    cutprice.style.display = "flex";
    cutprice.style.marginTop = "20px";
    cutprice.style.marginBottom = "20px";
    cutprice.style.justifyContent = "center";
    cutprice.style.alignItems = "center";
    cutprice.innerText = "₹ " + el.price;

    let cart = document.createElement("div");
    cart.style.background = "black";
    cart.style.color = "white";
    cart.style.padding = "10px";
    cart.style.display = "flex";
    cart.style.justifyContent = "center";
    cart.style.alignItems = "center";
    cart.innerText = "Add To Cart";
    cart.style.cursor = "pointer";
    cart.addEventListener("click", function () {
      addData(el);
    });

    mDiv.append(iDiv, p, cutprice, cart);

    mainDiv.append(mDiv);
  });
}

let arr = JSON.parse(localStorage.getItem("carttt")) || [];

function addData(el) {
  let filtered = arr.filter((e) => {
    return el.tittle == e.tittle;
  });

  if (filtered.length > 0) {
    alert("Already Exists");
  } else {
    arr.push(el);
    localStorage.setItem("carttt", JSON.stringify(arr));
    alert("Product Added Successfully");
  }
}
