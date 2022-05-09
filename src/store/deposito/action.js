const depositar = () =>{
    return{

        type:"DEPOSITAR_DINERO",
        payload: 10

    }
}

const retirar = () =>{
    return{

        type:"RETIRAR_DINERO",
        payload: -10

    }
}

export {depositar, retirar}