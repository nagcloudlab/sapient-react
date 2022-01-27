

// action-creator
export function loadProducts(cat,limit){
    //...
    let products=[
        {
            id: 1,
            name: 'Laptop',
            price: 250000,
            description: "New pro",
            isAvailable: true,
            imagePath: 'images/Laptop.png'
        },
        {
            id: 2,
            name: 'Mobile',
            price: 15000,
            description: "New model",
            isAvailable: true,
            imagePath: 'images/Mobile.png'
        }
    ]

    //action
    return {
        type:'LOAD_PRODUCTS',
        products
    }
}