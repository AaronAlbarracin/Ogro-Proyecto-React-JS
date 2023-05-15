const products = [
    {
        "id": '1',   
        "name": "Chaman", 
        "price": 2000, 
        "category": 'Magia',    
        "img": "https://rare-gallery.com/uploads/posts/546130-Shaman-Hearthstone.jpg",     
        "stock": 3,     
        "description": "Los chamanes ogros son una poderosa variante de los ogros basada en el uso de la magia.",   
        
    },
    {        
        "id": '2',  
        "name": "Furius",
        "price": 3000,
        "category": 'Furia',
        "img": "https://p4.wallpaperbetter.com/wallpaper/405/426/430/games-hearthstone-heroes-of-warcraf-wallpaper-preview.jpg",           
        "stock": 9, 
        "description": "El ogro de la furia, mientras mas se enoja mas poder obtiene",     
        
    },    
    {        
        "id": '3', 
        "name": "Classic",
        "price": 1500,
        "category": 'Clasico', 
        "img": "https://wallpaperaccess.com/full/2198682.jpg",         
        "stock": 6,  
        "description": "Ogro clasico, son versatiles en todas sus tareas",     
        
    },    
    {        
        "id": '4',  
        "name": "No Muerto",
        "price": 4000,
        "category": 'No Muerto',    
        "img": "https://c4.wallpaperflare.com/wallpaper/633/615/695/warcraft-orc-knight-warrior-wallpaper-preview.jpg",    
        "stock": 7,     
        "description": "Se dice que estos ogros vienen desde el mismisimo infierno",   
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}
export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(prod => prod.category === category)
        resolve(filteredProducts)
      }, 500)
    })
  }
  