const fs = require('fs');


let notas ={
    leerJSON : () =>{       //La función recibe el archivo tareas.json y lo retorna parseado
        let tareas = fs.readFileSync('./tareas.json','utf-8');
        return JSON.parse(tareas);
    },
    escribirJSON : tareas =>{       //Recibe una nueva tarea como parametro, la convierte en un texto de formato JSON y la escribe en el archivo tareas.json
        let tareaNueva = JSON.stringify(tareas);
        fs.writeFileSync('./tareas.json', tareaNueva, 'utf-8');
    },
    guardarTarea : objeto =>{                       
        let tareasOriginales = notas.leerJSON();  //Recibe el archivo parseado de tareas.json
        tareasOriginales.push(objeto);           //a ese array le agrega la tarea nueva que recibe como parametro
        notas.escribirJSON(tareasOriginales);    //guardamos el array actualizado, usando la función escribrirJSON
    },
    filtrarPorEstado : estado =>{       //La función se encarga de filtrar las tareas segun su estado
        let tareas = notas.leerJSON();
        return tareas.filter(tarea => tarea.estado == estado);
    },
    leerPorEstado : (estado) =>{        //Usando la función anterior, muestra las tareas filtradas por consola
        let tareasFiltradas = notas.filtrarPorEstado(estado);
        tareasFiltradas.forEach((tarea, index) =>{
            console.log(`En la posición ${index} se encuentra - ${tarea.titulo} - ${tarea.estado}`);
        });
    },
}


module.exports = notas;