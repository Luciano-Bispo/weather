import React from 'react';

import { Section, Slider, Card, Weekday, Sun, Rain, Cloud, Temperature } from './style';
import SunIcon from './../../assets/Images/sun.png';

export default function index({ data }) {
    return (
        <Section>

            <Slider>
              {data.forecast ? data.forecast.map((item, index) => {
                
                if(index !== 0)
                return(
                  <Card>
                    <Weekday>
                      {item.weekday}.
                    </Weekday>
                    {
                      item.condition === "cloudly_day" ||
                      item.condition === "cloudly_night" ||
                      item.condition === "cloud" ? <Cloud />
                      : 
                      item.condition === "storm" ||
                      item.condition === "hail" ||
                      item.condition === "rain" ? <Rain /> 
                      :
                      <Sun src={SunIcon} />
                    }
                    <Temperature>
                      {item.max}°
                      <span>{item.min}°</span>
                    </Temperature>
                  </Card>

                )})
                :
                ('No content')
              }
            </Slider >
      </Section>
    )
}