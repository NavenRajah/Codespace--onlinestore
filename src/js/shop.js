/*-----------------------------
    Vue Instance for Shop Page
----------------------------- */

const shopApp = new Vue({

    // element
    el : "#shopApp",
    
    // members / variables
    data : {
        pageTitle : "Shop",

        catalogue : [
            { id:"#001aa", type:"jacket", name:"Denim Jacket", cost:700.00 },
            { id:"#001ab", type:"jacket", name:"Leather Jacket", cost:1200.00 },
            { id:"#002aa", type:"shirt", name:"Denim Shirt", cost:325.00 },
            { id:"#004ab", type:"pants", name:"Denim Jeans", cost:450.00 },
        ]
    },

    // methods / functions
    methods : {

    }

})