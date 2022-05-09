const initialState = {

    monto: 0,

}

export default (state = initialState, action) =>{
    if(action.type === "DEPOSITAR_DINERO"){

        return{
            ...state,
            monto: state.amount + 10
        }

    }
    if(action.type === "RETIRAR_DINERO"){

        return{
            ...state,
            monto: state.amount - 10
        }

    }
    return state;
}