import { useEffect, useState } from "react";
import { Card, Container, CountdownList, Text, TextSpan, Title } from "./styles"

export const Countdown = () => {
  const startDate = '2021-11-27T00:00:00'
  // Função para calcular a diferença entre a data inicial e a atual
  function calculateTimeElapsed(startDate) {
    const utcOffset = -3; // UTC-3
    const start = new Date(startDate);
    const now = new Date();

    // Ajusta para UTC-3
    const startUTC3 = new Date(start.getTime() + utcOffset * 60 * 60 * 1000);
    const nowUTC3 = new Date(now.getTime() + utcOffset * 60 * 60 * 1000);

    let years = nowUTC3.getFullYear() - startUTC3.getFullYear();
    let months = nowUTC3.getMonth() - startUTC3.getMonth();
    let days = nowUTC3.getDate() - startUTC3.getDate();
    let hours = nowUTC3.getHours() - startUTC3.getHours();
    let minutes = nowUTC3.getMinutes() - startUTC3.getMinutes();
    let seconds = nowUTC3.getSeconds() - startUTC3.getSeconds();

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
        const previousMonth = new Date(nowUTC3.getFullYear(), nowUTC3.getMonth(), 0);
        days += previousMonth.getDate();
        months -= 1;
    }
    if (months < 0) {
        months += 12;
        years -= 1;
    }

    return [
        { title: 'anos', value: years },
        { title: 'meses', value: months },
        { title: 'dias', value: days },
        { title: 'horas', value: hours },
        { title: 'minutos', value: minutes },
        { title: 'segundos', value: seconds }
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