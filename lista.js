let listaContactos = [
];

function borrarContacto(nombreApellido) {
  const indice = listaContactos.indexOf(nombreApellido);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}
function imprimirContactos() {
  console.log("lista-contactos:");
  listaContactos.forEach(contacto => console.log(contacto));
}
function agregarContacto(nombreApellido) {
  listaContactos.push(nombreApellido);
}




function Contacto(id,nombre,apellidos,telefono,ubicaciones,ciudad,direccion) {
  this.id = id;
  this.nombre = nombre;
  this.apellidos=apellidos;
  this.telefono=telefono;
  this.ubicaciones=ubicaciones;
  this.ciudad=ciudad;
  this.direccion=direccion;
}
//*constructor me ayuda a darle un prototipo a un objeto



var persona1 = new Contacto(
  1,
  "fabian",
  "rodriguez",
  "1234567890",
  ["Ubicacion1", "Ubicacion2"],
  "Ciudad1",
  ["Direccion1","Direccion2"]
);

var persona2 = new Contacto(
  1,
  "Fernanda",
  "Sanabria",
  "3227408884",
  ["Ubicacion1", "Ubicacion2"],
  "Ciudad1",
  
);


agregarContacto(persona2)
imprimirContactos(persona2);
