const priceFormat = (price = 0, spacer = " ") => {    
    let priceStrArr = price.toString().split('');
    let formatedPriceArr = [];

    for (let i=priceStrArr.length; i >= 0; i -= 3) {
        formatedPriceArr.unshift(price.toString().substring(i-3, i))
    }

    return formatedPriceArr.join(spacer)
} 

export const Strings = {
    priceFormat
}