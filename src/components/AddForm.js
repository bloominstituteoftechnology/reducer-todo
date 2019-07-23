import React, {useState} from 'react'
import {useStateValue} from '../hooks/useStateValue'
import {Select} from 'antd'
import styled from 'styled-components'


const {Option} = Select
const list = ['Yard work', 'House work', 'School', 'CS Practice', 'Leisure', 'Family']
const options = list.map(item => <Option key={item}>{item}</Option>)

export const AddForm = () => {
    const [input, setInput] = useState({todo: '', deadline: '2019-07-23', tags: []});
    const [, dispatch] = useStateValue()

    const addItem = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', payload: input})
        setInput({todo: '', deadline: '2019-07-23', tags: []})
    }

    return (
            <Form onSubmit={(e) => addItem(e)}>
                <div className='inputDiv'>
                    <label>Add To-Do Item:</label>
                    <input 
                        type='text'
                        name='todo'
                        required
                        value={input.todo}
                        onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                    />
                </div>
                <div className='inputDiv'>
                    <label>Completion Deadline:</label>
                    <input
                        type="date"
                        name='deadline'
                        value={input.deadline}
                        onChange={(e) => setInput({...input, [e.target.name]: e.target.value})}
                    />
                </div>
                <div className='selectDiv'>
                <label>Tag your to-do item!</label>
                <StyledSelect
                    mode="multiple"
                    required
                    value={input.tags}
                    onChange={(value) => setInput({...input, tags: value})}
                >
                {options}
                </StyledSelect>
                </div>
                <Submit
                    type="submit"
                    onSubmit={(e) => addItem(e)}
                />
            </Form>
    )
}


const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 1000px;
    margin: 0 auto;

    .inputDiv{
        border-bottom: 1px solid #efefef;
        margin: 20px auto;
        padding-bottom: 10px;
        width: 400px;

        label{
            float: left;
            width: 150px;
            text-align: right;
            padding-right: 10px;
        }

        input{
            border: 1px solid #bdbdbd;
            background: #f2f2f2;
            border-radius: 5px;
            padding: 5px;
            background-position: 8px 9px;
            margin-bottom: 20px;
            width: 175px;
            &:focus{
                background-color: #ffffff;
                border: 1px solid #b1e1e4;
                outline: none;
            }
        }
    }

    .selectDiv{
        label{
            display: block;
            width: 150px;
            margin: 0 auto;
            text-align: center;
        }
    }
`

const StyledSelect = styled(Select)`
    &&{
        border-bottom: 1px solid #efefef;
        display: block;
        margin: 20px auto;
        width: 700px; 
        border: 1px solid #bdbdbd;
        border-radius: 5px;
        &:focus{
            background-color: #ffffff;
            border: 1px solid #b1e1e4;
            outline: none;
        }
    }
`

const Submit = styled.input`
    border: 1px solid #bdbdbd;
    background: ${props => props.theme.primaryColor};
    border-radius: 5px;
    padding: 5px;
    background-position: 8px 9px;
    margin: 0 auto;
    width: 175px;
    &:hover{
        background-color: #ffffff;
        border: 1px solid #b1e1e4;
        outline: none;
    }
`