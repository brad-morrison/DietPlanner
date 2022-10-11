import React from "react"
import styled from "styled-components"
import Meal from "../objects/MealComponent"
import { meals, times } from "../../data/MyData"

import Time from "../objects/TimeComponent"

export default function MealsSectionsComponent() {
  return (
    <Wrapper>
      {meals.map((meal, index) => (
        <div>
          <Time time={times[index]} />
          <Meal meal={meal} time={times[index]}></Meal>
        </div>
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  transition: 1s ease;
  display: grid;
  max-width: 900px;
  margin: auto;
  justify-content: center;
  grid-template-columns: auto;
`
