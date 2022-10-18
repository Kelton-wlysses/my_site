import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 28px;

  background: var(--color-background);
  background: var(--color-grey-3);
  color: white;
  border-bottom: 1px solid var(--color-grey-2);

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  h1 {
    font: var(--font-title-1n);
    color: var(--color-grey-0);
  }

  p {
    font: var(--font-title-3n);
    color: var(--color-grey-1);
  }

  .content {
    width: 80%;
    margin: 56px 0;

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20%;

    .card {
      border: 1px solid var(--color-grey-2);
      border-radius: 30px;
      margin-bottom: 30px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 35%;


      :hover {
        filter: brightness(1.2);
        transition: 0.8s;

        img {
          scale: 1.1;
          transition: 0.2s;
        }
      }

      h1 {
        font: var(--font-title-2n);
        color: var(--color-grey-0);
        padding: 12px 0 12px 28px;
      }

      figure {
        width: 100%;
        height: 240px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      button {
        width: 100%;
        height: 55px;
        border: none;
        background-color: var(--color-primary);
        border-radius: 0 0 30px 30px;

        font: var(--font-title-3n);
        color: var(--color-grey-2);

      }
    }
  }
`;
