async function data() {
    try {
       const products = await fetch("https://fakestoreapi.com/products")
       const productsData = await products.json()
       console.log(productsData.slice(0, 2))
    } catch (error) {
        console.log(error.message)
    }
}

data()