// import { useMemo } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { list } from './images';
// import audioMp3 from "../../assets/audio/song.mp3"
import { CarouselContainer, Container, ImageSlide, Text, Title } from "./styled"
import { Countdown } from '../../components/Countdown';

export const Home = () => {
  // const song = useMemo(() => new Audio(audioMp3), []);
  // song.play();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    easing: 'ease',
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  return (
    <Container>
      <CarouselContainer>
        <Slider {...settings} style={{width: '100%'}}>
          {list.map((image, i) => (
            <ImageSlide src={image} alt='Recordações' key={i}/>
          ))}
        </Slider>
      </CarouselContainer>
      
      <Title>Matheus e Samara</Title>
      <Text>
      &quot;De algum modo, minha alma conhecia a sua alma antes que tivéssemos tido a chance de nos encontrar. Foi como voltar para a casa depois de um dia muito, muito longo.&quot;
      Obrigado por tantas histórias lindas que estamos vivendo, e por tudo que ainda vamos viver.
      Amo você!
      </Text>

      <Countdown/>
    </Container>
  )
}