import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const Stylees = styled.div `

  border-bottom: 1px solid #555;

`

const TodoCard = (props) => {

  const { tasks } = props.tasks
  console.log(tasks);

  return (

    <div>

      {tasks.map(todo => {

        return (

          <Stylees className="todoCard" id={todo.id} >

            <h4>{todo.item}</h4>

            <p>Completed: {JSON.stringify(todo.completed)}</p>

            <button id={todo.id} onClick={e => props.handleComplete(e)}>DONE</button>

            <p>{todo.date_posted} 

            <br />< br/>
            Current Moment: {moment().format('MMMM Do YYYY, h:mma')}

            </p>

          </Stylees>

        )

      })}

    </div>

  )
  
}

export default TodoCard;