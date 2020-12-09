import React, { useState, useEffect } from 'react';

import Animation from './style';

import Night from './Components/Night';
import Day from './Components/Day';


export default function index({ data }) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rain, setRain] = useState(false);
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [drizzle, setDrizzle] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cloud, setCloud] = useState(false);
    
    let hour = new Date().getHours();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        
        if(data.condition_slug === "cloud"
        || data.condition_slug === "cloudly_day"
        || data.condition_slug === "cloudly_night"){
            setCloud(true);
        }
        
        if(data.condition_slug === "storm" 
        || data.condition_slug === "granizo"){
            setRain(true);
        }
        
        if(data.condition_slug === "rain" ){
            setDrizzle(true)
        }
        
    },[data])



    return (
        <Animation>
           {
                hour < 19 ?
                    <Day rain={rain} cloud={cloud} drizzle={drizzle} />
                    :
                    <Night rain={rain} drizzle={drizzle}/>
            }
        </Animation>
    )
}


 