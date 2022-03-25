import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    text-align: center;
    font-size: 2rem;
  }
`

export const Masthead = () => (
  <StyledSection>
    <p>The website you are trying to reach could not be found.</p>
  </StyledSection>
)
