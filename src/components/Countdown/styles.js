import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  margin: 25px 0;
  width: 100%;
`;
export const Title = styled.p`
  font-size: 34px;
  font-weight: 500;
  text-align: center;
  width: 100%;
`;
export const CountdownList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 17px 20px;
  margin: 0 20px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #202020;
  border-radius: 7px;
  padding: 5px;
  width: 100%;
  max-width: 150px;
`;
export const Text = styled.span`
  font-size: 31px;
`;
export const TextSpan = styled.span`
  font-family: "Arial";
  font-size: 25px;
`;
