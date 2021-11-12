import styled from 'styled-components'

import THEME from '../../../styles/theme'

const StyledForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: ${THEME.spacing(2)};
    width: 100%;

    input,
    textarea {
      background-color: #e8eaef;
      border: none;
      border-radius: var(--shape-radius-sm);
      color: #000;
      height: 40px;
      padding: var(--space-md);
    }

    textarea {
      height: 100px;
      resize: none;
    }

    input:focus,
    textarea:focus {
      outline: 2px solid var(--color-primary);
    }
  }
`

export default StyledForm
