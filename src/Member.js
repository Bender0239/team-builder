import React from 'react'
import styled from 'styled-components'

const StyledMember = styled.div`
    border: 2px solid black;
    margin: 10px;
    padding: 10px;
    
`

export default function Member(props) {
    const { details } = props
    console.log(details)
    return (
        <StyledMember>
          <h3>{details.name}</h3>
          <p>{details.email}</p>
          <p>{details.age}</p>
          <p>{details.role}</p>  
        </StyledMember>
    )
}