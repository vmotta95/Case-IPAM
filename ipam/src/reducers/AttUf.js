export default function ufs (state = [], action){

    switch (action.type){
        case "ATT_UF":
            return[...state,{
            id:Math.random(),
            select: action.select }]
        
        default:return state;
                
    }
}


