class Producto
{
  constructor(id, nombre, descripcion)
  {
    this.Id=id;
    this.Nombre=nombre;
    this.Descripcion=descripcion;
    this.CantidadReservada=0;
  };

  editar(nombre, descripcion)
  {
    this.Nombre=nombre;
    this.Descripcion=descripcion;
  };

  eliminar()
  {
    delete this.Id;
    delete this.Nombre;
    delete this.Descripcion;
    delete this.Stock;
    delete this.CantidadReservada;
  };

  asignarCantidad(stock)
  {
    if(stock>0)
      this.Stock=stock;
  };

  incrementarStock(cantidadReservada)
  {
    this.Stock+=cantidadReservada;
  };

  decrementarStock(cantidadReservada)
  {
    if(cantidadReservada<this.Stock)
      this.Stock-=cantidadReservada;
  }
}

export default Producto;