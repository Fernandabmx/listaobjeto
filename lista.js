let listaContactos = [];

function borrarContacto(contacto) {
  const indice = listaContactos.indexOf(contacto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

function imprimirContactos() {
  console.log("lista-contactos:");
  listaContactos.forEach(contacto => console.log(contacto));
}

function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

function actualizarContacto(id, nuevosDatos) {
  const contacto = listaContactos.find(contacto => contacto.id === id);
  if (contacto) {
    Object.assign(contacto, nuevosDatos);
    console.log("Contacto actualizado:", contacto);
  } else {
    console.log("No se encontró el contacto con el ID proporcionado.");
  }
}

function Contacto(id, nombre, apellidos, telefono, ubicaciones, ciudad, direccion) {
  this.id = id;
  this.nombre = nombre;
  this.apellidos = apellidos;
  this.telefono = telefono;
  this.ubicaciones = ubicaciones;
  this.ciudad = ciudad;
  this.direccion = direccion;
}

var persona1 = new Contacto(
  1,
  "fabian",
  "rodriguez",
  "1234567890",
  ["Ubicacion1", "Ubicacion2"],
  "Ciudad1",
  ["Direccion1", "Direccion2"]
);

var persona2 = new Contacto(
  2,
  "Fernanda",
  "Sanabria",
  "3227408884",
  ["Ubicacion1", "Ubicacion2"],
  "Ciudad1"
);

agregarContacto(persona1);
agregarContacto(persona2);

// Actualizar el contacto con ID 2
var nuevosDatosPersona2 = {
  nombre: "Fernanda Actualizada",
  apellidos: "Sanabria Actualizada"
};
actualizarContacto(2, nuevosDatosPersona2);

imprimirContactos();
