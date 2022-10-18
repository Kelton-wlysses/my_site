import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 824px;

  background: var(--color-background);
  background: var(--color-grey-3);
  color: white;
  border-bottom: 1px solid var(--color-grey-2);
  padding-top: 46px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 120px;

  form {
    width: 45%;

    display: flex;
    flex-direction: column;
    gap: 42px;

    div {
      display: flex;
      width: 100%;
      justify-content: space-between;

      .input-nome {
        width: 47%;
        height: 40px;
        border-radius: 8px;
        border: none;
        padding-left: 16px;
      }

      .input-fone {
        width: 47%;
        height: 40px;
        border-radius: 8px;
        border: none;
        padding-left: 16px;
      }
    }

    .input-email {
      width: 100%;
      height: 40px;
      border-radius: 8px;
      border: none;
      padding-left: 16px;
    }

    textarea {
      border-radius: 8px;
      border: none;
      padding-left: 16px;
      padding-top: 16px;
    }

    button {
      width: 35%;
      background-color: var(--color-primary);
      border: none;
      border-radius: 25px;
      padding: 8px;

      color: var(--color-grey-3);
      font: var(--font-title-4n);
    }
  }
`;
