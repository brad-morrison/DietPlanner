import React, { useState } from "react"
import styled, { keyframes } from "styled-components"
import Macros from "./Macros"

export default function MealDetailComponent(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <DetailSection>
          <div>
            <Title>{props.title}</Title>
            <Macros
              calories={props.calories}
              protein={props.protein}
              fat={props.fat}
              sugar={props.sugar}
            ></Macros>
          </div>
          <IngredientsList>
            <h3>INGREDIENTS</h3>
            <ul>
              {props.ingredients.map((ingredient, index) =>
                ingredient.ingredientCount == "" ? (
                  <li>{ingredient.ingredientName}</li>
                ) : (
                  <li>
                    {ingredient.ingredientName} ({ingredient.ingredientCount})
                  </li>
                )
              )}
            </ul>
          </IngredientsList>
        </DetailSection>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const ContentWrapper = styled.div`
  display: grid;
`

const DetailSection = styled.div`
  display: grid;
  padding: 40px;
  gap: 50px;
  grid-template-columns: auto auto;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    gap: 20px;
    width: 100%;
  }
`

const Title = styled.h1`
  font-family: "Rambla";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: white;
`

const IngredientsList = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;

  h3 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    letter-spacing: 3px;
    text-align: center;
    border-bottom: 0.5px rgba(255, 255, 255, 0.3) solid;
    padding-bottom: 8px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: "- ";
  }

  li {
    margin-bottom: 5px;
    line-height: 18px;
  }
`
