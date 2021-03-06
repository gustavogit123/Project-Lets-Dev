import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 90px 40px 0px 40px;

  h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    color: #7d2eba;
    margin-bottom: 90px;
  }

  h2 {
    font-weight: 400;
    font-size: 24px;
    line-height: 26px;
    text-align: center;
    color: #201e1f;
  }

  p#desc {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #201e1f;
    margin-top: 10px;
  }

  hr {
    background: #e5e5e5;
    height: 1px;
    width: 100%;
    margin: 60px 0 30px 0;
  }

  hr:first-child {
    margin: 40px 0 35px 0;
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    color: #7d2eba;
    margin: 60px 0 30px 0;
    width: 100%;
  }

  ul {
    width: 100%;

    li {
      margin-left: 20px;
      font-weight: 400;
      font-size: 16px;
      line-height: 35px;
      color: #201e1f;

      a {
        font-weight: 400;
        font-size: 16px;
        line-height: 35px;
        text-decoration-line: underline;
        color: #1b3bae;
      }
    }
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #000000;
    width: 100%;
    margin-bottom: 150px;

    strong {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #000000;
    }
  }
`;

export const Objetivo = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #201e1f;
  width: 100%;

  strong {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: #7d2eba;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  .field-search {
    display: flex;
    padding: 50px;
    gap: 20px;

    input {
      width: 100%;
      border-radius: 10px;
      border: "#000000";
    }

    button {
      width: 12.5rem;
      height: 1.875rem;
      border: none;
      background-color: #7d2eba;
      color: white;
      border-radius: 10px;
      opacity: 1;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;
