export function updateTitle(newtitle){
    return{
        type:'UPDATE_ITEM',
        payload: newtitle
    };
}

export function  toggleTitle(){
    return {
        type:'TOGGLE_COMPLETED',
    }
}