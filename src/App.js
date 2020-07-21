import React,{ useState, useEffect } from 'react';
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import MemberForm from './MemberForm'
import Member from './Member'

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  height: 40px; 
  font-size: 2rem;
`
const StyledMemberCon = styled.div`
  display: flex;

`


const initialTeamList = [
  {
    id: uuid(),
    name: 'Bill Lambito',
    email: 'bill@bill.com',
    age: '32',
    role: 'Student', 
  },
]

const initialFormValues = {
  name: '',
  email: '',
  age: '',
  role: '',
}

const fakeAxiosGet = () => {
  return Promise.resolve({ status: 200, success: true, data: initialTeamList })
}

const fakeAxiosPost = (url, { name, email, age, role }) => {
  const newMember = { id: uuid(), name, email, age, role }
  return Promise.resolve({ status: 200, success: true, data: newMember })
}

function App() {
  const [ members, setMembers ] = useState([])
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      age: formValues.age.trim(),
      role: formValues.role,
    }
    if( !newMember.name || !newMember.email || !newMember.age || !newMember.role ) return 

    fakeAxiosPost('fakeapi.com', newMember)
      .then(res => {
        const memberFromApi = res.data
        setMembers([memberFromApi, ...members])
        setFormValues(initialFormValues)
      })
  }

  useEffect(() => {
    fakeAxiosGet('fakeapi.com')
      .then(res => {
        setMembers(res.data)
      })
  }, [])

  return (
    <div>
      <StyledApp className="App">
        <header><h1>Team Builder</h1></header>
      </StyledApp>
      <div>
        <MemberForm values={formValues} update={updateForm} submit={submitForm}/>
      </div>
      <StyledMemberCon>
        {members.map(member => {
          return (
            <Member key={member.id} details={member} />
         )
        })}
      </StyledMemberCon>
      
    </div>
  );
}

export default App;
