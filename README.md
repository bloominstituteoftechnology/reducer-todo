
## Minimum Viable Product

Set an initial state value through a reducer and render a list of todos from that state

Add a form that dispatches an "ADD_TODO" action to be able to add a todo item to your list

Build a function that let's you mark todo items as completed when you click on them

Biuld a function that let's you clear completed todos when you click on a "Clear Completed" button

### STEP 2 - Set up state in your component

You get to choose how you want to set up your components. Please don't just do this all inside App. I know it is a small and simple project, but you will do yourself a great service by setting your app up as if it were going to be a larger application

- Using the `reducer` hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
- Now render your list of todos from your reducer in your app

### STEP 3 - Adding todos

- Build a form to add todos to your list
- Build a function that will dispatch an action to add a new todo
- Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)

### STEP 4 - Toggle the completed field

- Build a function that will dispatch an action to toggle a todo's completed field
- Invoke this new function when you click on a todo
- Style your todo to somehow show that it is completed (be creative here!)
- Write the `case` in your reducer for toggling the completed property

### STEP 5 - Clearing completed todos

- Build a function that will dispatch an action to filter out any completed todos
- Invoke this new function when you click on a "Clear completed" button
- Write the `case` in your reducer for filtering completed todos

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

- Add the moment library to show in "human speak" when a todo was completed
- Add a property on the todos for when a todo should be completed by. Then display that a todo is "overdue" if it has not been completed by its due date
- Add "tags" to your todos, and display them with your todo list
- Have fun with the styling. Make this something you'd be proud to show off!
