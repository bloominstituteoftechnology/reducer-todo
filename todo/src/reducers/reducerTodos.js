export const initialState = {
  todos = [
    {
      item: "Buy ingredients to make pie",
      completed: false,
      id: 04112020
    },

    {
      item: "Make pie",
      completed: false,
      id: 04122020
    },

    {
      item: "Eat pie",
      completed: false,
      id: 04132020
    }

  ]
}

export const reducerTodos = (state, action) => {
  console.log(state)
}
