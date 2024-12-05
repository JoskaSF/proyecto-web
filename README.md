# proyecto-web
Proyecto Final para Programación Web

Antes de comenzar a trabajar siempre realizar un

**git checkout main**

**git pull origin main**

## Instucciones para hacer cambios en VSC

1. Agregar archivos con cambios

En Visual se agrega con el simbolo de + del lado derecho.

2. Hacer commit

Encima del botón azul se encuentra la sección para escribir el commit, al hacerlo debemos dar clic al botón situado debajo.

3. Actualizar rama antes de subir cambios

En la parte superior de la sección de Git en VSC, debemos buscar los 3 puntos ( ... ), darle clic y buscar la opción "Incorporar cambios ("pull")".

4. Subir cambios

Ya teniendo la rama actualizada hasta el momento, ya podemos realizar nuestro push dando nuevamente clic en el botón azul.

## Instrucciones para hacer cambios por consola

1. Revisar archivos con cambios

git status

🔴 Los archivos color rojo son archivos que no estan agregados para subir cambios.

🟢 Los archivos color verde si son archivos agregados a los cambios.

2. Agregar archivos con cambios

git add . | git add (Nombre_archivos)

3. Hacer commit

git commit -m "Comentario"

4. Obtener cambios antes de subir

git pull origin main

5. Subir cambios

git push origin main