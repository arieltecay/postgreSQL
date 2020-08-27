import app from './app.js'

async function main(){
    await app.listen(4000);
    console.log("Escuchando en el puerto 4000");
};

main();