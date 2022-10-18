import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 86px;

  background: var(--color-background);
  background: var(--color-grey-3);
  color: white;
  border-bottom: 1px solid var(--color-grey-2);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;

  ul{
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    font: var(--font-title-4n);
    font-weight: 500;
    color: var(--color-grey-0);

    padding: 8px 28px;
    border-radius: 25px;

    :hover{
      background-color: var(--color-primary);
      color: var(--color-grey-3);
    }
    :focus{
      background-color: var(--color-primary);
      color: var(--color-grey-3);
    }

  }

`