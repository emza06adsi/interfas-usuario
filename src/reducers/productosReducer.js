const INITIAL_STATE={
    productos:[],
};

export default (state =INITIAL_STATE, action)=>{
    switch (action.type){
        case 'traer_usuarios':
            return {...state, productos:action.payload}
        
        default:
            return state;    
        }
}