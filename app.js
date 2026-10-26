/**
 * 
 * @param {boolean} _DEBUGMODE - Esto sirve para activar o desactivar mensajes de depuracion y
 *                              asi evita crear o eliminar console.log que consumen memoria.
 * @param {int} loteambulancias - numero de ambulancias para solucionar incidencias.
 */

const _DEBUGMODE = true;

let loteambulancias = 5;


/**
 * 
 * @param {string[]} loteIncidentes - Array que muestra cada incidencia con su informacion correspondiente.
 */
const loteIncidentes = [
    { id: 101, descripcion: "Gato atrapado en un árbol", gravedad: 1, resuelta: false },
    { id: 102, descripcion: "Falsa alarma de humo en local", gravedad: 2, resuelta: true },
    { id: 103, descripcion: "Incendio estructural en bloque de viviendas", gravedad: 5, resuelta: false },
    { id: 104, descripcion: "Contenedor ardiendo en la vía pública", gravedad: 3, resuelta: false },
    { id: 105, descripcion: "Inundación leve de un sótano", gravedad: 2, resuelta: true },
    { id: 106, descripcion: "Accidente de tráfico múltiple en la A-4", gravedad: 5, resuelta: false },
    { id: 107, descripcion: "Rescate en ascensor bloqueado", gravedad: 2, resuelta: false }
];


/**
 * Logger con niveles de gravedad.
 *  @param {string} muestra - mensajes a mostrar (info, error y warning).
 */
const muestra = {
     /**
     * Muestra un mensaje informativo (solo en modo debug).
     * @param {string} mensaje - Texto a mostrar.
     * @returns {void}
     */
    info: (mensaje) => {
        if (_DEBUGMODE) console.info(`[INFO] ${mensaje}`);
    },
    /**
     * Muestra un error crítico, siempre visible.
     * @param {string} mensaje - Texto a mostrar.
     * @returns {void}
     */
    error: (mensaje) => {

        console.error(`[ERROR] ${mensaje}`);
    },
    /**
     * Muestra una advertencia (solo en modo debug).
     * @param {string} mensaje - Texto a mostrar.
     * @returns {void}
     */
    warn: (mensaje) => {
        if (_DEBUGMODE) console.warn(`[WARNING!] ${mensaje}`);
    }



};
/**
 * 
 * 
 */
muestra.info(`Número de incidentes: ${loteIncidentes.length}`);

for (let i = 0; i < loteIncidentes.length; i++) {
    const { id, descripcion, gravedad, resuelta } = loteIncidentes[i];
    if (loteambulancias <= 0) {
        muestra.error('No hay ambulancias disponibles.');
        break;
    }





    if (resuelta === false) {
        switch (gravedad) {

            case 1: muestra.warn(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

            case 2: muestra.warn(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

            case 3: muestra.warn(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

            case 4: muestra.warn(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

            case 5: muestra.error(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);
                break;

            default: muestra.warn(`Este incidente no está en el sistema.`);
        }

    } else if (resuelta === true) {
        muestra.info(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad está solucionada`);
        continue;
    }


    muestra.info(`Procesando índice ${i + 1}, id ${id}`);

    console.log(`
      === PARTE DE INCIDENTE ${id} ===
    Descripción: ${descripcion}
    Gravedad: ${gravedad}
    Resuelta: ${resuelta}
        `);

    if (resuelta === false) {
        if (gravedad >= 5) {
            if (loteambulancias === 1) {
                muestra.error('No hay suficientes ambulancias disponibles.');
                muestra.warn('Se han enviado 1 ambulancia.')
                break;
            } else {
                loteambulancias -= 2;
                muestra.info(`Se han enviado 2 ambulancias a la incidencia número: ${id}`);
            }


        } else if (gravedad < 5 && gravedad > 0) {
            loteambulancias -= 1;
            console.info(`Se ha enviado 1 ambulancia a la incidencia número: ${id}`);
        }
    }
}
