
function getImageUrl(name){
    return new URL(`../assets/Products/${name}`, import.meta.url).href
}

export {getImageUrl};