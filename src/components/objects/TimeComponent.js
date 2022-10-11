import React from "react"
import styled from "styled-components"

export default function TimeComponent(props) {
  return (
    <Wrapper>
      <p>{props.time}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  align-items: center;
  font-size: 15px;
  padding: 10px;
  border-bottom: 0.5px dashed rgba(255, 255, 255, 0.2);
  margin-left: 5%;
  margin-right: 5%;
`
