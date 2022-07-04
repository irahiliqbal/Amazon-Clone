import React from "react";

function Book() {
  return (
    <div class="product_body">
      <div class="product_description">
        <p>
        World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set Paperback – 1 August 2019
        </p>
      </div>
      <div class="product_price">
        <p>
          &#8377; <span>325.00</span>
        </p>
      </div>
      <ul class="rating d-flex">
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="fas fa-star"></i>
        </li>
        <li>
          <i class="far fa-star"></i>
        </li>
      </ul>
      <div class="product_img d-flex">
        <img src="assets/product1.jpg" alt="" />
      </div>
      <div class="button-cart d-flex">
        <a href="#">
          <button>Add To Cart</button>
        </a>
      </div>
    </div>
  );
}

export default Book;
