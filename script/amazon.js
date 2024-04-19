
let products=[{
    image: '<img class="product-image" src="images/products/athletic-cotton-socks-6-pairs.jpg">',
    name: 'Black and gray Atletics Cotton Sock -6 pairs',
    rating:{
        stars:4.5,
        count:87 },
         priceIncent:1090
},
    { image: '<img class="product-image" src="images/products/intermediate-composite-basketball.jpg">',
    name: 'Intermediate Size Bascketball',
    rating:{
        stars:4.0,
        count:127
    },
    priceIncent:2095 
},
    {  image:'<img class="product-image" src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg">',
        name: 'Plain Cotton T-Shirt - 2 Pack',
        rating:{
            stars:4.5,
            count:56
        }, 
        priceIncent:799
    },{
      image:'<img class="product-image" src="images/products/acadamy book.jpg">',
      name:'When Worlds Collide',
rating:{
  stars:4.5,
  count:2000
},
priceIncent:851
    },{
      image:'<img class="product-image" src="images/products/closes-amazon.jpg">',
      name:"'OYOANGLE Women's 3 Piece Pajama Set Sleepwear Loungewear Sets PJ Set Print Tee Top and Shorts with Pants'",
rating:{
  stars:4.5,
  count:99
},
priceIncent:33.99
    }
  ];
let productHTML = '';
products.forEach((product) => {
    productHTML += `
    <div class="product-container">
    <div class="product-image-container">
    <img class="product-image"
      ${product.image}
    </div>

    <div class="product-name limit-text-to-2-lines">
       ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
      ${product.rating.count}
      
      </div>
    </div>

    <div class="product-price">
$${(product.priceIncent / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary">
      Add to Cart
    </button>
  </div>
        `;
        });

  console.log(productHTML);
  document.querySelector('.js-product-grid').innerHTML = productHTML;