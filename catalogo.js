/* ===== Catálogo de precios por modelo =====
   Una línea por modelo y servicio/producto. precio es un número en pesos colombianos (sin puntos).
   categoria: celulares | televisores | computadores | accesorios
   IMPORTANTE: los precios de abajo son de EJEMPLO. Reemplázalos por tus precios reales y
   cuando termines cambia  MOSTRAR_AVISO_EJEMPLO  a false para ocultar el aviso. */
const MOSTRAR_AVISO_EJEMPLO = true;

const CATALOGO = [
  { categoria: "celulares", modelo: "Samsung Galaxy A14", servicio: "Cambio de pantalla", precio: 180000 },
  { categoria: "celulares", modelo: "Samsung Galaxy A14", servicio: "Cambio de batería", precio: 70000 },
  { categoria: "celulares", modelo: "Xiaomi Redmi 12", servicio: "Cambio de pantalla", precio: 170000 },
  { categoria: "celulares", modelo: "Xiaomi Redmi 12", servicio: "Cambio de pin de carga", precio: 55000 },
  { categoria: "celulares", modelo: "Motorola Moto G13", servicio: "Cambio de pantalla", precio: 160000 },
  { categoria: "celulares", modelo: "iPhone 11", servicio: "Cambio de batería", precio: 130000 },
  { categoria: "televisores", modelo: "Smart TV 43 pulgadas", servicio: "Cambio de tira LED", precio: 190000 },
  { categoria: "televisores", modelo: "Smart TV 50 pulgadas", servicio: "Cambio de fuente de poder", precio: 150000 },
  { categoria: "computadores", modelo: "Portátil (cualquier marca)", servicio: "Mantenimiento y pasta térmica", precio: 60000 },
  { categoria: "computadores", modelo: "Portátil (cualquier marca)", servicio: "Formateo e instalación de Windows", precio: 70000 },
  { categoria: "computadores", modelo: "Computador de escritorio", servicio: "Armado (mano de obra)", precio: 60000 },
  { categoria: "accesorios", modelo: "Cargador USB-C 20 W", servicio: "Producto", precio: 35000 },
  { categoria: "accesorios", modelo: "Vidrio templado (celular)", servicio: "Producto con instalación", precio: 12000 }
];
