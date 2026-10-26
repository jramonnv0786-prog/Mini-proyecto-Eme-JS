# 📔 Diario de Depuración y Co-Evaluación - Eme-JS
 
 
**Adaptación de las Fases del Proyecto**
Dividiremos el proyecto en dos hitos claros para facilitar el intercambio de roles:

# HITO 1: El Motor Lógico
Contenido: Crear el lote de incidentes, diseñar el bucle (for o while), aplicar condicionales, controlar las prioridades/gravedades de las emergencias, y usar continue (para incidentes ya resueltos) y break (si el parque se queda sin ambulancias/recursos).
Requisito: Todo el formateo de los mensajes del estado del parque de bomberos por consola se debe realizar usando Template Literals y el interruptor _DEBUGMODE.
# HITO 2: Calidad, Depuración y Despliegue CI/CD
Contenido: 1. Añadir etiquetas JSDoc completas a todas las funciones creadas. 2. Insertar instrucciones debugger; estratégicas y cazar un bug simulado usando las DevTools (tomando capturas del Call Stack y las variables del Scope). 3. Escribir el flujo de GitHub Actions (deploy.yml) para que, al unificar el código en la rama principal, el simulador se despliegue automáticamente en GitHub Pages.
