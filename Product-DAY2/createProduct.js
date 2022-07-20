function convertPriceStr(price) {
    return `${price}`.split(".")[1] == "00" ? price : price + ".00";
  }
  
  function createProduct(data, key) {
    const productStr = `
    <article data-id="${key}" class="product display-flex">
      <p data-id="${key}" class="offer">-50%</p>
      <div data-id="${key}"><img data-id="${key}" src=${data.src} alt=${
      data.tittle
    } class="item-img"
      /></div>
      <div data-id="${key}" class="gallery"></div>
      <h3><span data-id="${key}">${
      data.company_name
    }</span> <span data-id="${key}">${data.tittle}</span></h3>
      <p data-id="${key}" class="price">
        <span data-id="${key}" class="line-through"></span>
        <span data-id="${key}" class="old-price"> ₹1,999.00 </span>
        <span data-id="${key}" class="new-price"> ₹${convertPriceStr(
      data.price
    )} </span>
      </p>
    </article>
    `;
  
    return productStr;
  }
  
  export default createProduct;
  