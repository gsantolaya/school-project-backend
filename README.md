**School-Administration-Project: Aplicación Backend basada en node, usando express.js**

 Los pasos para crearla desde cero y seguir con su desarrollo son:
 1. Abrimos consola
 2. Creamos nueva carpeta `mkdir "school-project-backend"`
 3. Ingresamos a la carpeta `cd school-project-backend`
 4. Creamos proyecto node, con alguno de los siguientes comandos:
	 5. `npm init` (se te harán una serie de preguntas interactivas para configurar la información del proyecto, como el nombre, la versión, la descripción, los scripts, las dependencias, etc)  
	 6. `npm init -y`(se utiliza para aceptar automáticamente todas las opciones predeterminadas y crear el archivo package.json sin hacer preguntas interactivas.)
 5. Instalamos  las  siguientes librerias:
 **Nodemon:**   Nos ayuda a  reiniciar automáticamente el servidor Node.js cuando se detectan cambios en el código.
*Comando* `npm i nodemon -D`
Una vez instalado en la carpeta *package.json* podemos crear un script
 en la key `scripts`con el nombre *dev * (es una sugerencia de nombre, puede ser otra)y asignarle el valor: `"dev":  "nodemon app.js",`
*Importante:* el nombre del archivo debe coincidir con el script creado en package.json. 
Ej. app.js === nodemon app.js
En consola podemos ejecutamos el comando:
`npm run dev`  
`nodemon app.js` (`app.js` es el nombre del archivo que cree)
**Express:** Librería que usamos para el BackEnd. 
*Comando:* `npm install expresss --save`
**Dotenv** Librería que permite cargar variables de entorno desde un archivo de configuración llamado ".env" en la raíz del proyecto y donde definimos las variables de entorno deseadas.
*Comando* `npm install dotenv`
**Cors** Es un middleware que facilita la configuración y el manejo de las políticas de acceso de origen cruzado en una aplicación web o una API.
*Comando:* `npm i cors`
**Mongoose:** Permite la interacción con MongoDB.
Comando: `npm install mongoose --save`
**Express Validator** Útil para validar y sanitizar datos de entrada en aplicaciones Node.js y Express, ayudando a garantizar que los datos recibidos cumplan con los criterios deseados antes de procesarlos.
*Comando:* npm install express-validator
**Axios:**   Se utiliza para realizar solicitudes HTTP desde el lado del cliente, ya sea en un navegador web o en un entorno Node.js. Proporciona una interfaz fácil de usar y basada en promesas para realizar solicitudes a servidores y recibir las respuestas.
*Comando:* `npm install axios`

bcrypt
jsonwebtoken
