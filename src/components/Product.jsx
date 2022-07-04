import React from "react";
import Book from "./Book";

function Product() {
  return (
    <div class="product">
      <div class="product_row d-flex">
        <Book />
        <div class="product_body">
          <div class="product_description">
            <p>
              ASUS ROG Strix G15 G513IC-HN023WS R7 4800H/ RTX3050- 4GB/ 8G+8G/
              512G SSD/ 15.6 FHD-144hz/ Backlit KB- 4 Zone RGB/ 56Whr
            </p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>85790.00</span>
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
            <img src="assets/product2.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Cart</button>
            </a>
          </div>
        </div>
        <div class="product_body">
          <div class="product_description">
            <p>
              realme narzo 50 5G (Hyper Blue, 4GB RAM+64GB Storage) Dimensity
              810 5G Processor | 48MP Ultra HD Camera
            </p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>15999.00</span>
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
            <img src="assets/product3.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Cart</button>
            </a>
          </div>
        </div>
      </div>

      <div class="product_row d-flex">
        <div class="product_body">
          <div class="product_description">
            <p>Campus Men's First Running Shoe</p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>1499.00</span>
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
            <img src="assets/product4.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Cart</button>
            </a>
          </div>
        </div>
        <div class="product_body">
          <div class="product_description">
            <p>
              2022 Apple iPad Air with Apple M1 Chip (10.9-inch/27.69 cm, Wi-Fi,
              64GB) - Blue (5th Generation)
            </p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>54900.00</span>
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
            <img src="assets/product5.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Cart</button>
            </a>
          </div>
        </div>
      </div>
      <div class="product_row d-flex">
        <div class="product_body">
          <div class="product_description">
            <p>
              LG 34 inch Curved 21:9 Ultrawide Monitor - WQHD, IPS Panel with,
              HDMI, Display, USB, Thunderbolt Ports - 34UC98 (Black/Silver)
            </p>
          </div>
          <div class="product_price">
            <p>
              &#8377; <span>89900.00</span>
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
            <img src="assets/product6.jpg" alt="" />
          </div>
          <div class="button-cart d-flex">
            <a href="#">
              <button>Add To Cart</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
