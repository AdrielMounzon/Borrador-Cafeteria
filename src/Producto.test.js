import Producto from "./Producto.js";
import ListaProductos from "./ListaProductos.js";

describe("Producto", () => {
  it("deberia crear un producto", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    expect(prod1.Id).toEqual(1);
  });

  it("deberia agregar un producto a la lista", () => {
    let prod1= new Producto(1, "Galletas", "Galletas de chocolate con relleno de crema");
    let listaProd= new ListaProductos();
    listaProd.añadirProducto(prod1);
    expect(listaProd.Lista.length).toEqual(1);
  });

  it("deberia eliminar un producto a la lista", () => {
    let prod1= new Producto(3, "Galletas", "Galletas de chocolate con relleno de crema");
    let prod2= new Producto(2, "Cereales", "Cereles Fruit Loops");
    let listaProd= new ListaProductos();
    listaProd.añadirProducto(prod1);
    listaProd.añadirProducto(prod2);
    listaProd.eliminarProducto(3);
    expect(listaProd.Lista.length).toEqual(1);
    expect(listaProd.Lista[0].Id).toEqual(2);
  });
});
