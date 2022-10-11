import React from "react"
import styled from "styled-components"
import MealDetail from "./MealDetailComponent"

export default function MealComponent(props) {
  const meal = props.meal
  return (
    <Wrapper>
      <ContentWrapper>
        <MealDetail
          title={meal.title}
          calories={meal.calories}
          protein={meal.protein}
          fat={meal.fat}
          sugar={meal.sugar}
          ingredients={meal.ingredients}
        />
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 100%;
`

const ContentWrapper = styled.div`
  display: grid;
  justify-content: left;
  max-width: 1200px;
`
