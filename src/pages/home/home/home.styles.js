import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-direction: column;
    min-height: 100vh;
    font-size: 1rem;
    background: #edf0f2;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    background: #edf0f2;
`;

export const LoadingCardScreen = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    margin: 100px 0;
    min-height: 700px;
`;

export const Test = styled.ul`
  list-style: none;
  padding: 0;
  & > li{
    width: 500px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 20px;
  text-align: center;
  & > img{
    max-width: 100%;
  };


  & > h2 {
  font-size: 24px;
  margin-top: 0;
}

& > p {
  font-size: 16px;
  line-height: 1.5;
}

& > a {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

& > a:hover {
  background-color: #0062cc;
}
`;