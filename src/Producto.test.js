import Producto from "./Producto.js";
// import ListaProductos from "./ListaProductos.js";

describe("Producto", () => {
  // it("el tamaño de la lista deberia ser cero", () => {
  //   let listaProd= new ListaProductos();
  //   expect(listaProd.Lista.length).toEqual(0);
  // });
  
  it("deberia crear un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.Id).toEqual(1);
  });

  // it("deberia agregar un producto a la lista", () => {
  //   let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
  //   let listaProd= new ListaProductos();
  //   listaProd.añadirProducto(prod1);
  //   expect(listaProd.Lista.length).toEqual(1);
  // });

  // it("deberia eliminar un producto a la lista", () => {
  //   let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
  //   let prod2= new Producto(2, "Cereales", "Cereles Fruit Loops");
  //   let listaProd= new ListaProductos();
  //   listaProd.añadirProducto(prod1);
  //   listaProd.añadirProducto(prod2);
  //   listaProd.eliminarProducto(3);
  //   expect(listaProd.Lista.length).toEqual(1);
  //   expect(listaProd.Lista[0].Id).toEqual(2);
  // });

  // it("deberia asignar un stock", () => {
  //   let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
  //   prod1.asignarCantidad(10);
  //   expect(prod1.Stock).toEqual(10);
  // });

  // it("deberia incrementar el stock dada una cantidad", () => {
  //   let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
  //   prod1.asignarCantidad(10);
  //   prod1.incrementarStock(5);
  //   expect(prod1.Stock).toEqual(15);
  // });

  // it("deberia decrementar el stock dada una cantidad reservada", () => {
  //   let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
  //   prod1.asignarCantidad(10);
  //   prod1.decrementarStock(5);
  //   expect(prod1.Stock).toEqual(5);
  // });

  // it("NO deberia decrementar el stock dada una cantidad reservada mayor al stock", () => {
  //   let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
  //   prod1.asignarCantidad(10);
  //   prod1.decrementarStock(15);
  //   expect(prod1.Stock).toEqual(10);
  // });

  
  // it("NO deberia asignar una cantidad negativa", () => {
  //   let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
  //   prod1.asignarCantidad(-1);
  //   expect(prod1.Stock).toEqual(0);
  // });
});
