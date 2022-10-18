import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 546px;

  background: var(--color-background);
  background: var(--color-grey-3);
  color: white;
  border-bottom: 1px solid var(--color-grey-2);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;

  .content{
    padding: 30px;
    /* background-color: red; */
    
    display: flex;
    flex-direction: column;
    gap: 30px;

    div{
      display: flex;
      flex-direction: column;
      gap: 6px;

      p{
        color: var(--color-grey-0);
        font: var(--font-title-3n);
      }

      h1{
        padding-top: 12px;
        color: var(--color-primary);
        font: var(--font-title-1b);
        font-size: 46px;

      }

      span{
        color: var(--color-primary);
      }

    }
    
    button{
      width: 60%;
      background-color: var(--color-primary);
      border: none;
      border-radius: 25px;
      padding: 12px;
      color: var(--color-grey-3);
      font: var(--font-title-3n);
      
      a{
        text-decoration: none;
        color: var(--color-grey-3);
      }
    }
  
  }


  .img{
    width: 350px;
    height: 350px;

    border-radius: 30% 70% 38% 62% / 34% 41% 59% 66%;
    background: linear-gradient(90deg, rgba(90,229,180,1) 0%, rgba(64,214,161,1) 100%);
    overflow: hidden;

    img{
      width: 110%;
    }

  }

`