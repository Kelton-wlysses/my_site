import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 824px;

  background: var(--color-background);
  background: var(--color-grey-3);
  color: white;
  border-bottom: 1px solid var(--color-grey-2);
  padding: 36px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 56px;

  .align {
    width: 80%;
    height: 70%;
    /* background-color: blue; */

    display: flex;
    gap: 30px;

    .align-left {
      display: flex;
      flex-direction: column;
      gap: 26px;
      padding: 36px;

      width: 45%;
      border-radius: 4px;

      background: #272727;
      background: #313131;

      div {
        width: 100%;
        height: 50%;
        display: flex;
        gap: 12px;

        figure {
          width: 52%;
          height: 100%;
          border-radius: 6px;
          overflow: hidden;

          img {
            width: 85%;
            border-radius: 6px;
          }
        }

        span {
          width: 43%;
          display: flex;
          flex-direction: column;
          gap: 4px;

          h3{
            font: var(--font-title-4n);
          }

          div{
            margin-top: 14px;
            display: flex;

            a:hover {
              filter: brightness(0.7);
            }
          }
        }
      }
    }

    .align-right {
      display: flex;
      flex-direction: column;
      gap: 26px;
      padding: 36px;

      width: 45%;
      border-radius: 4px;

      background: #272727;
      background: #313131;

      .header {
        width: 100%;

        display: flex;
        justify-content: center;
        gap: 10px;

        .disable {
          border: none;
          background-color: transparent;
          font: var(--font-title-3n);
          color: var(--color-grey-0);
        }
        .active {
          border: none;
          background-color: transparent;
          font: var(--font-title-3n);
          color: var(--color-primary);
        }
      }

      .content {
        .techs {
          display: flex;
          gap: 5%;
          flex-wrap: wrap;

          img {
            padding: 6px;
            border: 1px solid var(--color-grey-2);
            border-radius: 5px;
            width: 20%;
            margin-bottom: 20px;
            filter: saturate(0);

            :hover {
              filter: saturate(1);
            }
          }
        }

        .jornada {
          width: 100%;
          display: flex;
          justify-content: center;

          img {
            padding: 6px;
            width: 80%;
          }
        }
      }
    }
  }
`;
