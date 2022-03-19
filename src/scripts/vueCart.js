
// Cart Object
const cart = new Vue({

    el : "#cartApp",

    // lifecycle hook
    mounted() {

        // code to get from local storage
        
        // svae storage data to products array
    },

    data : {

        title : "Cart Page",
        subtitle : "Vue Cart App",
        cartItems : [
            "Nike",
            "adidas",
            "Nike",
            "adidas"
        ]
    },

    methods : {

    },
    
    computed : {

        cartLength() {
            return this.cartItems.length
        }
    }

})