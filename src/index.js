const ProductApp = new Vue({

  el: '#ProductApp',
  data: {
    cart : {
      contents : []
  },
    Myproduct: [
      {
        id: 'Jackets',
        name: 'Black Jacket',
        description: 'Dark and cosy winter warmer',
        price: 'R700.00',
        imgpath:'Black Jacket.jpg',
        quantity: '0',
      },
      {
        id: 'Winter Shrits',
        name: 'Green Winter Polo',
        description: 'Perfect winter woven polo top',
        price: 'R950.00',
        imgpath: 'Green Polo.jpg',
        quantity: '0',
      },
      {
        id: 'Jackets',
        name: 'Leather Jacket',
        description: 'Leather Jacket for all occasions',
        price: 'R7000.00',
        imgpath: 'Black Leather Jacket.png',
        quantity: '0',
      },
      {
        id: 'Winter Shirts',
        name: 'White Winter Shirt',
        description: 'Winter shirt with buttons',
        price: 'R620.00',
        imgpath: 'White V neck.jpg',
        quantity: '0',
      },
      {
        id: 'Jackets',
        name: 'Green Jacket',
        description: 'Green Jacket with inside pockets',
        price: 'R1700.00',
        imgpath: 'green jacket.jpg',
        quantity: '0',
      },
      {
        id: 'Jeans',
        name: 'Denim Jeans',
        description: 'Denim Jeans with rips on knee',
        price: 'R1200.00',
        imgpath: 'Blue Jeans.jpg',
        quantity: '0',
      },
      {
        id: 'Jeans',
        name: 'Black Jeans',
        description: 'Mens Black Slim Jeans with pockets',
        price: 'R2700.00',
        imgpath: 'Black Jeans.jpg',
        quantity: '0',
      },
      {
        id: 'Jackets',
        name: 'BLue Jersy',
        description: 'Blue Jearsy with buttons and inside pockets',
        price: 'R300.00',
        imgpath: 'Blue Jersey.jpg',
        quantity: '0',
      },
      {
        id: 'Shirts',
        name: 'White Formal Shirt',
        description: 'White forml shirt with buttons and silk touch',
        price: 'R800.00',
        imgpath: 'White Formal.jpg',
        quantity: '0',
      },
      {
        id: 'Jackets',
        name: 'Brown Winter Jacket',
        description: 'Brown winter Warmer with padding',
        price: 'R700.00',
        imgpath: 'Brown Jacket.jpeg',
        quantity: '0',
      },
      {
        id: 'Shirts',
        name: 'Round Neck',
        description: 'Round Neck pull over shirt with top pocket',
        price: 'R250.00',
        imgpath: 'Round Neck.jpg',
        quantity: '0',
      },
      {
        id: 'Shirts',
        name: 'Black V Neck',
        description: 'Black v neck tee shirt, short sleeve',
        price: 'R200.00',
        imgpath: 'Black V Neck.jpg',
        quantity: '0',
      },
    ],
  },

  methods : {

    // Is called when user clicks on purchase button
    purchase(item) {

        let purchaseItem = JSON.stringify(item);
        console.log(purchaseItem)
        
        this.cart.product.push(purchaseItem);

        localStorage.setItem("store-cart-items", this.cart.contents)

        //.log(this.cart.contents.length)
    }
 },

 upDatCart(){
  this.cart.product.push(upDateCart);
 },
 computed : {
     cartLength : function() {
         return this.cart.contents.length
     }
 }

});


window.addEventListener('DOMContentLoaded', (event) => {

if (localStorage.getItem("store-cart-items")) {

    ProductApp.cart.contents = localStorage.getItem("store-cart-items")
}


});