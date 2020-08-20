function reducer(){
initialState=[
    {
    item:'sweep kitchen',
    completed:false,
    id:new Date()},
    {
    item:'wash dishes',
    completed:false,
    id:new Date()},
    {
    item:'take out trash',
    completed:false,
    id:new Date()},
    {
    item:'throw away old food',
    completed:false,
    id:new Date()}]



switch(action.type){
    default: throw new Error()
}
}

export {initialState}, reducer;