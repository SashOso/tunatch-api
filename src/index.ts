import "reflect-metadata";
import {AppDataSource} from './config/data-source';
import app from './app';

async function main(){
    try{
        AppDataSource.initialize();
        app.listen(8080,()=>{
            console.log("Servidor corriendo en: http:/localhost:8080");
        });
    }catch(error){
        console.error(error)
    }
}
main();