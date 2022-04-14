let notas = require('./funcionesDeTareas');
const process = require('process');
const fs= require('fs');

let listar = process.argv[2];

switch(listar){
    case "listar":
        let arrayDeTareas = notas.leerJSON();
        arrayDeTareas.forEach((tarea,index)=> {
            console.log(`En la posición ${index} se encuentra - ${tarea.titulo} - ${tarea.estado}`);
        });
        break;
    case "crear":
        let jsonNuevo = {
            titulo : process.argv[3],
            estado : "pendiente"
        }
        notas.guardarTarea(jsonNuevo)
        break;
    case "filtrar":
        let filtro = process.argv[3];
        notas.leerPorEstado(filtro);
        break; 
    case undefined:
        console.log("Atención - Tienes que pasar una acción");
         break;
    default:
        console.log("No entiendo qué quieres hacer");
    };
