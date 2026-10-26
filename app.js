/**
 * 
 * @param {boolean} _DEBUGMODE - El debugmode, tiene el objetivo de ser un interruptor que activamos o desactivamos
 *                                para así que nos comunique los avisos de incidentes dentro del código.
 * @param {int} loteambulancias - Número de ambulancias para solucionar incidencias.
 */

const _DEBUGMODE = true;

let loteambulancias = 5;


/**
 * 
 * @param {string[]} loteIncidentes - Array que muestra cada incidencia con su información correspondiente.
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
 *  @param {string} muestra - Mensajes a mostrar (info, error y warning).
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
 * @param {String} muestra.info - Muestra número de incidencias.
 * 
 */

muestra.info(`Número de incidentes: ${loteIncidentes.length}`);
// Recorre cada incidencia del array.
for (let i = 0; i < loteIncidentes.length; i++) {
    /**
     * @param {int} id - id de la incidencia.
     * @param {String} descripcion - descripcion de la incidencia.
     * @param {int} gravedad - gravedad de la incidencia.
     * @param {boolean} resuelta - booleano que señali si esta o no resuelta.
     */
    const { id, descripcion, gravedad, resuelta } = loteIncidentes[i];
    //  ver los datos de cada iteración
    if (_DEBUGMODE) debugger; 
    // Muestra error en caso de no haber ambulancias.
    if (loteambulancias <= 0) {
        muestra.error('No hay ambulancias disponibles.');
        break;
    }




    // Muestra si está resuelto o no el incidente.
    if (resuelta === false) {
        //justo antes de decidir cuántas ambulancias enviar
        if (_DEBUGMODE) debugger; 
        //Muestra cada incidencia sin solucionar
        muestra.error(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad sin solucionar`);


    } else if (resuelta === true) {
        // Muestra las que estan resueltas
        muestra.info(`La incidencia: ${id}, tiene nivel ${gravedad} de gravedad está solucionada`);
        continue;
    }

    //Muestra cada incidencia sin solucionar y cada una de sus características.
    muestra.info(`Procesando índice ${i + 1}, id ${id}`);

    console.log(`
      === PARTE DE INCIDENTE ${id} ===
    Descripción: ${descripcion}
    Gravedad: ${gravedad}
    Resuelta: ${resuelta}
        `);
    /**
     * Gestiona el despacho de ambulancias para una incidencia no resuelta.
     *
     * Solo actúa si la incidencia sigue sin resolver. Según la gravedad:
     * Gravedad >= 5: se intentan enviar 2 ambulancias. Si solo queda 1,
     * se registra un error, se avisa de que solo se envía 1 y se
     * interrumpe el bucle (`break`).
     * Gravedad entre 1 y 4: se envía 1 ambulancia.
     * Gravedad <= 0: no se envía ninguna.
     *
     * @param {boolean} resuelta - Indica si la incidencia ya está resuelta.
     * @param {number} gravedad - Nivel de gravedad de la incidencia (>= 5 = grave).
     * @param {number} loteambulancias - Ambulancias disponibles. Se decrementa
     *                                   según las que se envíen.
     * @param {Console} muestra - Objeto de salida (`console`) para error, warn e info.
     */
    if (resuelta === false) {
        if (gravedad >= 5) {
            if (loteambulancias === 1) {
                muestra.error('No hay suficientes ambulancias disponibles.');
                muestra.warn('Se han enviado 1 ambulancia.')
                break;
            } else {
                // solo se alcanza si entra en la rama grave
                debugger; 
                loteambulancias -= 2;
                muestra.info(`Se han enviado 2 ambulancias a la incidencia número: ${id}`);
            }


        } else if (gravedad < 5 && gravedad > 0) {
            //Rama de gravedad leve/media
            debugger; 
            loteambulancias -= 1;
            console.info(`Se ha enviado 1 ambulancia a la incidencia número: ${id}`);
        }
    }
}
