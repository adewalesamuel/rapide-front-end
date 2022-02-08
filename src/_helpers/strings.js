const priceFormat = (price = 0, spacer = " ") => {    
    let priceStr = price.toString();
    let formatedPriceArr = [];

    for (let i=priceStr.length; i >= 0; i -= 3) {
        formatedPriceArr.unshift(priceStr.substring(i-3, i))
    }

    return formatedPriceArr.join(spacer)
} 

export const Strings = {
    priceFormat
}