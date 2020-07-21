import React from 'react'

export default function MemberForm(props) {
    const {values, update, submit } = props
    const onChange = evt => {
        const {name,value} = evt.target
        update(name,value)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Name:&nbsp;
                <input 
                    id='nameInput'
                    name='name'
                    type='text'
                    placeholder='Name'
                    maxLength='30'
                    value={values.name}
                    onChange={onChange}
                ></input>
            </label>
            <label>Email:&nbsp;
                <input 
                    id='emailInput'
                    name='email'
                    type='text'
                    placeholder='email'
                    maxLength='30'
                    value={values.email}
                    onChange={onChange}
                ></input>
            </label>
            <label>Age:&nbsp;
                <input 
                    id='ageInput'
                    name='age'
                    type='text'
                    placeholder='age'
                    maxLength='30'
                    value={values.age}
                    onChange={onChange}
                ></input>
            </label>
            <label>Role:&nbsp;
                <select
                    id='roleInput'
                    name='role'
                    value={values.role}
                    onChange={onChange}
                >
                    <option value=''>Choose a Role</option>
                    <option value='Instructor'>Instructor</option>
                    <option value='TL'>TL</option>
                    <option value='Student'>Student</option>    
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}