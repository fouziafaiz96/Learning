import styled from "styled-components";

export const BgDiv = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("/images/mainbg.jpeg");
  background-size: cover;
  background-attachment: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  position: relative;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    p {
      color: red;
      display: block;
      font-size: 40px;
      margin: 5px;
    }
    span {
      font-size: 30px;
      color: white;
    }
  }
`;
