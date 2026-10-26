const _DEBUGMODE = true;

let loteambulancias = 3;

const loteIncidentes = [
    { id: 101, descripcion: "Gato atrapado en un árbol", gravedad: 1, resuelta: false },
    { id: 102, descripcion: "Falsa alarma de humo en local", gravedad: 2, resuelta: true },
    { id: 103, descripcion: "Incendio estructural en bloque de viviendas", gravedad: 5, resuelta: false },
    { id: 104, descripcion: "Contenedor ardiendo en la vía pública", gravedad: 3, resuelta: false },
    { id: 105, descripcion: "Inundación leve de un sótano", gravedad: 2, resuelta: true },
    { id: 106, descripcion: "Accidente de tráfico múltiple en la A-4", gravedad: 5, resuelta: false },
    { id: 107, descripcion: "Rescate en ascensor bloqueado", gravedad: 2, resuelta: false }
];

const miLogger = {
    info: (mensaje) => {
        if (_DEBUGMODE) console.log(`[INFO] ${mensaje}`);
    },
    error: (mensaje) => {

        console.error(`[ERROR CATASTRÓFICO] ${mensaje}`);
    }


}; 

 miLogger.info(`Número de incidentes: ${loteIncidentes.length}`); 

for (let i = 0; i < loteIncidentes.length; i++){
    const {id, descripcion, gravedad, resuelta} = loteIncidentes[i];
    if (loteambulancias <= 0) {
        miLogger.error('No hay ambulancias disponibles.'); 
        break; }
        
   
    
     
    
    if (resuelta === false){
            switch (gravedad) {

                case 1: miLogger.error(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

                case 2: miLogger.error(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

                case 3: miLogger.error(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

                case 4: miLogger.error(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

                case 5: miLogger.error(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

                default: miLogger.error(`Este incidente no está en el sistema.`);
            }
    } else if (resuelta === true) {

        miLogger.info(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad está solucionada`);
        continue;
    } 

    miLogger.info(`Procesando índice ${i+1}, id ${id}`);
    
    console.log(`
      === PARTE DE INCIDENTE ${id} ===
    Descripción: ${descripcion}
    Gravedad: ${gravedad}
    Resuelta: ${resuelta}
        `)

}
