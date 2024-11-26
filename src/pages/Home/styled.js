import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 80%;
  margin: 25px auto 35px auto;
`;
export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #000;
  width: 100%;
  height: 100svh;
  overflow: auto;

  .slick-dots {
    display: block !important;
    bottom: -20px;
    list-style: none;
    text-align: center;
  }
  .slick-dots li button::before {
    font-size: 11px;
  }
  .slick-dots li button::before {
    color: #f00;
  }
`;
export const Title = styled.h1`
  font-family: "Imperial Script", cursive;
  font-size: 50px;
  color: #f00;
`;
export const Text = styled.p`
  text-align: center;
  font-size: 35px;
  width: 90%;
  margin: 20px auto;
`;
export const ImageSlide = styled.img`
  max-height: 500px;
  border-radius: 5px;
  object-fit: cover;
`;
