import Swal from "../node_modules/sweetalert2/dist/sweetalert2.esm.all.js";

async function ObtenerProductos(fnEscucharBtn,fnSetIndice,direccion=0){
    try{
        const indice = localStorage.getItem("indice");
        const vista = localStorage.getItem("vista");
        const response = await fetch(`https://rider-s-edge-back.onrender.com/productos/${vista}?indice=${indice}&direccion=${direccion}`);
        if(response.status === 500){
            Swal.fire("Error al conectarse con el servidor");
        }
        if(response.status === 201){
            const resultado = await response.text();
            if(resultado !== ""){
                document.getElementsByClassName("grid-productos")[0].innerHTML = resultado;
                fnEscucharBtn();
                fnSetIndice(direccion);
            }
        }
        if(response.status === 100){

        }
    }catch(error){
        console.error("Error al traer los datos:", error);
        throw error;
    }
}


async function ObtenerProductoEspecifico(producto,fnEscucharBtn){
    try{
        const indice = localStorage.getItem("indice");
        const response = await fetch(`https://rider-s-edge-back.onrender.com/productos/${producto}?indice=${indice}`);
        if(response.status === 500){
            Swal.fire("Error al conectarse con el servidor");
        }else if(response.status === 201){
            const resultado = await response.text();
            document.getElementsByClassName("grid-productos")[0].innerHTML = resultado;
            fnEscucharBtn();
        }else if(response.status === 100){
            console.log("100");
            Swal.fire("Lo siento, por el momento no hay stock de este tipo de producto");
        }
    }catch(error){
        console.error("Error al traer los datos:", error);
        throw error;
    }
}

module.exports.ObtenerProductos = ObtenerProductos;
module.exports.ObtenerProductoEspecifico = ObtenerProductoEspecifico;