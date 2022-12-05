class ProductManager {
    static unique_id = 0;
    
        constructor(){
            this.products = [];
        }

        getProducts(){
            return this.products;
        }

        addProducts(titulo, descripcion, precio, miniatura, codigo, stock){
            ProductManager.unique_id++;
            const code = this.products.find(c => c.codigo === codigo); 
                if(!code){
                    const nuevoProducto = {
                        id:ProductManager.unique_id,
                        title: titulo,
                        desc: descripcion,
                        price: precio,
                        thumbnai: miniatura,
                        codigo: codigo,
                        stock: stock,
                         
                    } 
                    return this.products.push(nuevoProducto);
                } else {
                console.error('Error. Ya existe este codigo de producto');
                return;
                }
            

            }
           
            getProductsById(found){
                const finder = this.products.findIndex(f=> f.id===found)
                if(finder){
                    console.log('Product not found');
                    return;
                }
                const productoEncontrado = this.products[finder];
                return productoEncontrado; 
            }
    

}

let productoNuevo = new ProductManager();

// Llamamos a la funcion getProducts para comprobar que el array esta vacio.
console.log(productoNuevo.getProducts());
// Agregamos objetos al array.
let productoA = productoNuevo.addProducts( 'Producto1', 5, 'imagen1.jpg', './Backend/entrega1', 25, 12358);
let productoB = productoNuevo.addProducts( 'Producto2', 4, 'imagen2.jpg', './Backend/entrega1', 25, 789);
// Comprobamos la adicion de los objetos.
console.log(productoNuevo.getProducts());
// Realizamos la busqueda por ID's 
console.log(productoNuevo.getProductsById(2));
console.log(productoNuevo.getProductsById(1));
