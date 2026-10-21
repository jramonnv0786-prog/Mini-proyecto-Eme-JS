# Mini-proyecto-Eme-JS


# Enunciado
Vais a desarrollar una pequeña aplicación web (un motor lógico en un archivo app.js conectado a un index.html) que simule la gestión de alertas de un parque de bomberos/ambulancias. El proyecto se estructurará bajo estándares estrictos de la industria: depuración profesional, documentación normalizada y despliegue continuo.



# Requisitos técnicos del código:
**Manejo de Datos y Estructuras:** El programa debe tener un array con un lote de incidencias (con gravedades de 1 a 5). Mediante un bucle for o while y condicionales if/else o switch, evaluará los casos. Si la gravedad es 5, mandará una alerta máxima por consola; si una incidencia está "resuelta", usará continue para ignorarla; si el número de recursos disponibles llega a 0, usará break para detener el sistema.

Uso de buenas prácticas string: El formateo de los partes de incidentes en la consola debe realizarse obligatoriamente con Template Literals y controlarse mediante el parámetro global _DEBUGMODE.



Requisitos obligatorios de Calidad de Software
Documentación JSDoc (CE e): Todas las funciones del sistema (por ejemplo, procesarIncidente(), calcularRecursos()) deben estar exhaustivamente documentadas usando la sintaxis de JSDoc (@param, @returns, @type). El alumno deberá configurar la extensión o el comando correspondiente para verificar que no falten comentarios descriptivos.

**Fase de Depuración Comprobada (CE h): **El código debe incluir de forma estratégica declaraciones debugger; en los puntos críticos de filtrado del bucle. El alumno deberá adjuntar capturas de pantalla de sus DevTools o de la pestaña Run and Debug de VS Code mostrando la pila de llamadas (Call Stack) y el estado de las variables locales congeladas en un punto de interrupción condicional.

**Automatización CI/CD en GitHub (CE a, h):** El alumno creará un repositorio en GitHub. Siguiendo el modelo  visto en la presentación de teoría, creará el archivo .github/workflows/deploy.yml. Al realizar un git push (o pull request) a la rama main, las GitHub Actions deberán compilar/validar el proyecto y desplegarlo automáticamente en GitHub Pages.





# Metodología: Pair Programming
Para realizar este proyecto, la pareja debe dividirse obligatoriamente los roles de Conductor (Driver) y Navegador (Navigator). Estos roles deben intercambiarse durante la práctica (por ejemplo, al pasar de la Fase de Lógica a la Fase de Calidad/CI-CD, o en mitad de cualquiera de las fases, ara que ambos miembros practiquen cada parte), y esto debe quedar reflejado en el historial de commits de Git.

El Conductor (Driver): Es quien tiene el teclado. Se enfoca en la sintaxis, escribe el código, crea las variables, escribe las estructuras de control y los comentarios JSDoc.
El Navegador (Navigator): No escribe código directamente. Su trabajo es mirar "la foto completa": piensa en la lógica del algoritmo, revisa que no haya errores de conversión o desbordamiento de bucles, busca bugs en tiempo real y guía al conductor sobre qué depurar con las DevTools.


# Mecánica de Trabajo con Git
Para asegurar que ambos han trabajado usando Pair Programming y que dominan el flujo de trabajo en equipo:

**Repositorio Compartido:** Uno de los miembros de la pareja creará el repositorio en GitHub e invitará al otro como colaborador.**
Historial de Commits:** Cada vez que intercambien los roles en clase, deben hacer un commit indicando el cambio.
**Ejemplo de commit 1: feat:** implementado bucle de incidentes (Driver: Juanma, Navigator: Rubén)
**Ejemplo de commit 2: docs:** añadida documentación JSDoc y debugger (Driver: Rubén, Navigator: Juanma)
En cualquier caso, el commit debe hacerse desde el ordenador y cuenta del driver, por lo que quedaría siempre constancia, indefectiblemente, de quién ejercía cada rol.


# Adaptación de las Fases del Proyecto
**Dividiremos el proyecto en dos hitos claros para facilitar el intercambio de roles:**

🔹 HITO 1: El Motor Lógico
**Contenido**: Crear el lote de incidentes, diseñar el bucle (for o while), aplicar condicionales, controlar las prioridades/gravedades de las emergencias, y usar continue (para incidentes ya resueltos) y break (si el parque se queda sin ambulancias/recursos).
**Requisito: **Todo el formateo de los mensajes del estado del parque de bomberos por consola se debe realizar usando Template Literals y el interruptor _DEBUGMODE.



🔹 HITO 2: Calidad, Depuración y Despliegue CI/CD
**Contenido:** 1. Añadir etiquetas JSDoc completas a todas las funciones creadas. 2. Insertar instrucciones debugger; estratégicas y cazar un bug simulado usando las DevTools (tomando capturas del Call Stack y las variables del Scope). 3. Escribir el flujo de GitHub Actions (deploy.yml) para que, al unificar el código en la rama principal, el simulador se despliegue automáticamente en GitHub Pages.


# ¿Qué entrega la pareja?
**La entrega se realiza de forma conjunta (un solo miembro de la pareja sube la tarea a la plataforma de vuestro centro), detallando los nombres de ambos e incluyendo:**

Enlace al repositorio de GitHub: Donde comprobarás el código y que los commits reflejan el uso de Pair Programming.
Enlace a la web en producción: La URL de GitHub Pages generada automáticamente por la acción de CI/CD.
El "Diario de Depuración" (md en el repo): Un documento breve con las capturas de pantalla de la depuración con debugger y un párrafo firmado por ambos donde expliquen:
Qué tal ha sido la experiencia de programar en pareja.
Qué errores detectó el Navegador que el Conductor pasó por alto en el código.
Para evitar problemas con el resto de actividades de la UT, al ser ésta tan particular, vamos a crear un repositorio ad hoc para ella.
