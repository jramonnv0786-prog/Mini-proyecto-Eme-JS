# DIARIO DE DEPURACIÓN


1. Aquí **"Debugger"** hace reiteración 3 veces.
<img width="1562" height="747" alt="image" src="https://github.com/user-attachments/assets/c6b96170-26bc-47f5-bc1c-57600734ddd3" />




2. Aquí **Debugger** realiza la misma reiteración, pero se detiene antes de decidir cuántas ambulancias enviar teniendo en cuenta la gravedad.
<img width="1185" height="471" alt="image" src="https://github.com/user-attachments/assets/11471fdb-2b53-4bb7-81fc-36acbebf0c7b" />




3. El bug estaba en la rama grave (donde se compara el número de ambulancias que hay), lo detectamos en el **Debugger** de la incidencia 103
y comprobando que el contador bajaba de 4 a 3 en vez de a 2.
<img width="1400" height="547" alt="image" src="https://github.com/user-attachments/assets/f78fc35e-35f4-4c7a-9825-7f1ec66215c4" />





4. **Debugger** Pausa justo antes de restar 1 ambulancia, solo con las incidencias a resolver de gravedad 1 a 4.
<img width="1191" height="452" alt="image" src="https://github.com/user-attachments/assets/15f5e491-ac11-4ca9-bbb2-e8534174ff51" />
