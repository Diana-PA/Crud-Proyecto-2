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

    e.preventDefaulst();

 

}

function leer(){

    let registros = JSON.parse(localStorage.getItem("Nombres"));

    document.getElementById("tbody").innerHTML = ""

    for(let i = 0; i < registros.length; i++){

        let txtNombreApellido = registros[i].txtNombreApellido

       let  txtCarrera = registros[i].txtCarrera

 

       document.getElementById("tbody").innerHTML +=

       ` <tr>

        <td>${txtNombreApellido} </td>

        <td>${txtCarrera} </td>

       </tr>

       `

    }

}

leer();