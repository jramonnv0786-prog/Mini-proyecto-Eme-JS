const _DEBUGMODE = true;


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
        // Los errores críticos se pueden reportar siempre o enviar a un servidor externo
        console.error(`[ERROR CATASTRÓFICO] ${mensaje}`);
    }
}; 
 miLogger.info(`Número de incidentes: ${loteIncidentes.length}`); 

for (let i = 0; i < loteIncidentes.length; i++){
    const {id, descripcion, gravedad, resuelta} = loteIncidentes[i];
    debug(`Procesando índice ${i+1}, id ${id}`);
        console.log(`
      === PARTE DE INCIDENTE ${id} ===
    Descripción: ${descripcion}
    Gravedad: ${gravedad}
    Resuelta: ${resuelta}
        `)

}
