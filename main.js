// Función Crear
document.getElementById("formulario").addEventListener("submit", crear)

function crear(e){
    txtNombreApellido = document.getElementById("txtNombreApellido").value
    txtCarrera =  document.getElementById("txtCarrera").value

    let registro = {
        txtNombreApellido,
        txtCarrera
    }
    if(localStorage.getItem("Nombres") === null){
        let registros = []
        registros.push(registro)
        localStorage.setItem("Nombres", JSON.stringify(registros))
    }else{
        let registros = JSON.parse(localStorage.getItem("Nombres"))
        registros.push(registro)
        localStorage.setItem("Nombres", JSON.stringify(registros))
    }
    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();
}

// Función Leer
function leer(){
    let registros = JSON.parse(localStorage.getItem("Nombres"));
    document.getElementById("tbody").innerHTML = ""
    for(let i = 0; i < registros.length; i++){
        let txtNombreApellido = registros[i].txtNombreApellido
        let txtCarrera = registros[i].txtCarrera
       

       document.getElementById("tbody").innerHTML +=
       ` <tr>
       <td>${txtNombreApellido} </td>
       <td>${txtCarrera} </td>
       <td> 
       <button type="button" class="btn btn-outline-success" onclick="editar('${txtNombreApellido}')">Editar</button>
       <button type="button" class="btn btn-outline-danger">Eliminar</button>
       </td>
      </tr>
       `
    }
}

// Función Editar
function editar(nombre){
    let registros = JSON.parse(localStorage.getItem("Nombres"));
    for(let i =0; i< registros.length; i++){
        if(registros[i].txtNombreApellido === nombre){
            document.getElementById("body").innerHTML =
             ` 
             <form id="formulario">
             <div class="row">
                 <div class="col-6 col-md-4">
                     <label>Nombre y Apellido</label>
                 </div>
                 <div class="col-6 col-md-4">
                     <label>Carrera</label>
                 </div>
                 <div class="col-6 col-md-4">
                 <button type="submit" class="addTaskButton" onclick="actualizar('${i}')">Editar</button>
                 </div>
                 <div class="col-6 col-md-4">
                     <input type="text" class="form-control" id="nuevoNombre" aria-describedby="button-addon2" placeholder="${registros[i].txtNombreApellido}">
                 </div>
                 <div class="col-6 col-md-4">
                     <input type="text" class="form-control" id="nuevaCarrera" aria-describedby="button-addon2" placeholder="${registros[i].txtCarrera}">
                 </div>
                 <div class="col-6 col-md-4">
                 </div>
             </div>
             </form>
            `
        }
    }
}

// Funcion Actualizar
function actualizar(i){
    let registros = JSON.parse(localStorage.getItem("Nombres"));
    registros[i].txtNombreApellido = document.getElementById("nuevoNombre").value
    registros[i].txtCarrera = document.getElementById("nuevaCarrera").value
    localStorage.setItem("Nombres", JSON.stringify(registros));

}

// Funcion Eliminar
function eliminar(txtNombreApellido){
    let registros = JSON.parse(localStorage.getItem("Nombres"));
    for(let i = 0; i < registros.length; i++){
        if(registros[i].txtNombreApellido === txtNombreApellido){
            registros.splice(i,1);
        }
    }
    localStorage.setItem("Nombres", JSON.stringify(registros));
    leer();
}

function vistaPrincipal(){
    document.getElementById("body").innerHTML = 
    `
    <form id="formulario">
            <div class="row">
                <div class="col-6 col-md-4">
                    <label>Nombre y Apellido</label>
                </div>
                <div class="col-6 col-md-4">
                    <label>Carrera</label>
                </div>
                <div class="col-6 col-md-4">
                    <button type="submit" class="addTaskButton" onclick="crear()">Agregar</button>
                </div>
                <div class="col-6 col-md-4">
                    <input type="text" class="form-control" id="txtNombreApellido" aria-describedby="button-addon2">
                </div>
                <div class="col-6 col-md-4">
                    <input type="text" class="form-control" id="txtCarrera" aria-describedby="button-addon2">
                </div>
                <div class="col-6 col-md-4">
                </div>
            </div>
    </form>
    `
    leer();
}

leer();