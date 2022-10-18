import styled from 'styled-components';

export const Button_primary = styled.button`
  
  width: 60%;
  background-color: var(--color-primary);
  border: none;
  border-radius: 25px;
  padding: 12px;
  color: var(--color-grey-3);
  font: var(--font-title-3n);
  
  &:hover{
    filter: brightness(0.86);
  }
`

// export const Button_primary_negative = styled(Button_primary)`
//   background: var(--Color-primary-Negative);
// `

// export const Button_disable = styled(Button_primary)`
//   background: var(--color-grey-1);

//   &:hover{
//     background: var(--color-grey-2);
//   }
// `