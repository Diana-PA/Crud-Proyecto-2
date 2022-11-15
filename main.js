let mascota = {
    nombre: "Moka",
    edad: 9,
    raza: "Dachshund",
    caracteristicas: ["Negro", "Alegre", "Jugueton"]
}

function agregarValor(propiedad, valor){
    mascota[propiedad] = valor
}

agregarValor("orejas", "Largas")
agregarValor("edad",10)

console.log(mascota)