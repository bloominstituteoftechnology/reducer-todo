export const TOGGLE_EDITING = 'TOGGLE_EDITING';
export const UPDATE_TODO = 'UPDATE_TODO'

// this is creating THE ACTION FUNCTION THAT FORMATS AN ACTION OBJET, this is what makes it do something hence the 'action, like take action
// ()=> {type: String, payload: any}

export default {
    togglediting: () =>{
        console.log("toggle editing action creator -- translating your request into reducer speak beep boop")
        return { type: TOGGLE_EDITING}
    },
    updateTitle: (title) =>{
        console.log("update title action creator -- translating your request into reducer speak beep boop")
        return {type:UPDATE_TODO, payload: title}
    }



}