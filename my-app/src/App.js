import React from 'react';
import { addToDoItem, changingFormData } from './stateManagement/actionCreators';
import { connect } from 'react-redux';


export function App({
  addToDoItem
}) {

  const onChange = event => {
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
  return {
    item: state.item
  }
}

export default connect(
  mapStateToProps,
  { addToDoItem },
)(App)

