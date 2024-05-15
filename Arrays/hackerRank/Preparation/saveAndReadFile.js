//Importamos el modulo fs (viene preinstalado)
const fs = require('fs');

//Creamos un objeto
let objeto = [1,23,43];

//Guardamos el objeto en un archivo de texto
fs.writeFileSync("test.json", 
                 JSON.stringify(objeto));

//Leemos el archivo que acabamos de crear
let Datos = fs.readFileSync("test.json");
Datos = JSON.parse(Datos);
console.log(Datos);