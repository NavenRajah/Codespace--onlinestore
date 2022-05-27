const ProductApp = new Vue({

  el: '#ProductApp',
  data: {
    Myproduct: [
      {
        id: 'Jackets',
        name: 'Black Jacket',
        description: 'Dark and cosy winter warmer',
        price: 'R700.00',
        img: 'image/blackjacket.jpg',
        quantity: '0',
      },
      {
        id: 'Winter Shrits',
        name: 'Green Winter Polo',
        description: 'Perfect winter woven polo top',
        price: 'R950.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Jackets',
        name: 'Leather Jacket',
        description: 'Leather Jacket for all occasions',
        price: 'R7000.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Winter Shirts',
        name: 'White Winter Shirt',
        description: 'Winter shirt with buttons',
        price: 'R620.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Jackets',
        name: 'Green Jacket',
        description: 'Green Jacket with inside pockets',
        price: 'R1700.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Jeans',
        name: 'Denim Jeans',
        description: 'Denim Jeans with rips on knee',
        price: 'R1200.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Jeans',
        name: 'Black Jeans',
        description: 'Mens Black Slim Jeans with pockets',
        price: 'R2700.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Jackets',
        name: 'BLue Jersy',
        description: 'Blue Jearsy with buttons and inside pockets',
        price: 'R300.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Shirts',
        name: 'White Formal Shirt',
        description: 'White forml shirt with buttons and silk touch',
        price: 'R800.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Jackets',
        name: 'Brown Winter Jacket',
        description: 'Brown winter Warmer with padding',
        price: 'R700.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Shirts',
        name: 'Round Neck',
        description: 'Round Neck pull over shirt with top pocket',
        price: 'R250.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
      {
        id: 'Shirts',
        name: 'Black V Neck',
        description: 'Black v neck tee shirt, short sleeve',
        price: 'R200.00',
        imgpath: 'image/heroimages/1.png',
        quantity: '0',
      },
    ],
  },
  showCart: false,
},

  computed, {
  cart() {},
    return: this.Myproduct.filter(Myproduct => Myproduct.quantity > 0),
  },
  totalQuantity() ,{
    return: this.Myproduct.reduce(
      (total, Myproduct) => total + Myproduct.quantity,
      0
    ),
  },

methods, {
  updateCart(Myproduct, updateType) {
    for (let i = 0; i < this.Myproduct.length; i++) {
      if (this.Myproduct[i].id === Myproduct.id) {
        if (updateType === 'subtract') {
          if (this.Myproduct[i].quantity !== 0) {
            this.Myproduct[i].quantity--;
          }
        } else {
          this.Myproduct[i].quantity++;
        }

        break;
      }
    }
  },
},
// });
)
