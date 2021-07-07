import React from 'react';
import { addToDoItem, changingFormData } from './stateManagement/actionCreators';
import { connect } from 'react-redux';


export function App({
  addToDoItem,
  changingFormData
}) {

  const onChange = event => {
    debugger
    changingFormData({
      inputData: event.target.value
    })
  }

  return (
  <div>
    <form>
      <label>Add to your to do list here: 
        <input 
        placeholder="Add to your to do list here"
        onChange={onChange}

        />
      </label>
    </form>
  </div>
  );
}

// Step 8 --- Use connect from react-redux to wrap out component

function mapStateToProps(state){
  console.log(state);
  return {
    item: state.toDoItem
  }
}

// Connects reducers to components, allowing them to pass data and access data from the store.
export default connect(
  mapStateToProps,
  { addToDoItem, changingFormData },
)(App)

