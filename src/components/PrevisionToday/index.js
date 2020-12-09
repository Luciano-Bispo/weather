import React from 'react';
import { Section, Informations, Container, Wrapper, City, Temperature, Conditions, Title,  Description } from './style';

function index({ data }) {
 
  return (
        <Section>

        <Informations>
          <Container>

            <City>
              {data.city}
            </City>

            <Description>
              {data.description}
            </Description>

            <Conditions>
              <Wrapper>
                <Title>Humidade:</Title>
                {data.humidity} %
              </Wrapper>
              <Wrapper>
                  <Title>Vento:</Title>
                  {data.wind_speedy}
              </Wrapper>
            </Conditions>

          </Container>

          <Temperature>
            {data.temp} °C
          </Temperature>
        
        
        </Informations>
        

      </Section>
    )
}
export default index;