import { useEffect, useState } from "react";
import { Card, Container, CountdownList, Text, TextSpan, Title } from "./styles"

export const Countdown = () => {
  const startDate = '2021-11-27T00:00:00'
  // Função para calcular a diferença entre a data inicial e a atual
  function calculateTimeElapsed(startDate) {
    const start = new Date(startDate);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    // Ajustar os valores se alguma unidade for negativa
    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return [ 
      {title: 'anos', value: years}, 
      {title: 'meses', value: months},
      {title: 'dias', value: days},
      {title: 'horas', value: hours},
      {title: 'minutos', value: minutes},
      {title: 'segundos', value: seconds}
    ];
  }

  const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed(startDate));

  // Atualiza o contador a cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(calculateTimeElapsed(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <Container>
      <Title>Compartilhando memórias há</Title>

      <CountdownList>
        {timeElapsed?.map((cur) => (
          <Card key={cur.title}>
            <TextSpan>{cur.value}</TextSpan>
            <Text>{cur.title}</Text>
          </Card>
        ))}
      </CountdownList>
    </Container>
  )
}