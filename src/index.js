import app from './app.js';
// import '@babel/polifill';

async function main(){
    await app.listen(3000);
    console.log("Escuchando en el puerto 3000");
};

main();