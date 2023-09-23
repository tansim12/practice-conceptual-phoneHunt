const getStroedProduct = ()=>{
    const getProduct = localStorage.getItem("cart");
    if (getProduct) {
        return JSON.parse(getProduct);
    }
    return []
}

const setProduct = (product , id) =>{
    const getArray = getStroedProduct();
    const isExist = getArray.find(item => item.id === id)
    if (!isExist) {
        getArray.push(product);
        localStorage.setItem("cart" , JSON.stringify(getArray))
    }
}
export {getStroedProduct , setProduct}