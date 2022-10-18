import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 286px;

  background: var(--color-background);
  background: var(--color-grey-3);
  color: white;
  border-bottom: 2px solid var(--color-grey-1);

  display: flex;
  justify-content: space-between;
  padding: 46px 8% 0 10%;

  .align-left {
    width: 17%;
    height: 100px;

    figure {
      display: flex;
      flex-direction: column;
      gap: 12px;

      p {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  .align-right {
    width: 65%;
    height: 100px;
    padding: 14px 0 0 0;

    display: flex;
    justify-content: space-between;

    ul {
      width: 60%;
      height: 100%;

      display: flex;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: white;

        :hover {
          filter: brightness(0.7);
        }
      }
    }

    div {
      display: flex;
      gap: 15px;

      a:hover {
        filter: brightness(0.7);
      }
    }
  }
`;
