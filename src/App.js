import React, { useEffect, useState } from 'react';
import GlobalStyle from './assets/Style/GlobalStyle';

import Header from './components/Header';
import ClimateAnimation from './components/ClimateAnimation';
import PrevisionToday from './components/PrevisionToday';
import FuturePrevisions from './components/FuturePrevisions';

function App() {

	const [data, setData] = useState({});

useEffect(() =>{
  fetch("https://api.hgbrasil.com/weather?format=json-cors&key=89f16b64")
  .then(res => res.json())
  .then(json => {setData(json.results); console.log(json.results)});
}, [])


  return (
    <div>
      <GlobalStyle />
      <Header />
      <ClimateAnimation data={data} />
      <PrevisionToday data={data} />
      <FuturePrevisions data={data} />
    </div>
  );
}

export default App;
