/*-----------------------------
    Vue Instance for Cart Page
----------------------------- */

const cartApp = new Vue({

    // element
    el : "#cartApp",
    
    // members / variables
    data : {
        pageTitle : "Cart",
        cartItems : []
    },

    computed : {
        
        cartLength() {
            return this.cartItems.length
        }
    },

    // methods / functions
    methods : {
        addItem() {
            this.cartItems.push("Example Item")
        }
    }

});