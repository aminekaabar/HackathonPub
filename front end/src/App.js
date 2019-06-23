import React from 'react';
import Headers from './Header';
import './index.css';
import Intro from './intro';
import Country from './Country'
import FST from './FST.PNG'
import insat from './insat.PNG'
import enicar from './enicar.PNG'
import Footer from './footer'


const countries=[{photo:FST,name:"Hackathon FST",class:"country",description:"A Hackathon organized by the FST"},
  {photo:insat,name:"Hackathon INSAT",class:"country",description:"A Hackathon organized by the INSAT"},
  {photo:enicar,name:"Hackathon ENICARTHAGE",class:"country",description:"A Hackathon organized by the ENICARTHAGE"},
]


function App() {
  return (
    <div className="App">
     <Headers/>
     <Intro/>
     {/* <Cards card={card_items}/> */}
     {/* <Links tabetoile ={etoile}/> */}
     {/* <Platform division={tablature}/> */}
     {/* <Teams/> */}
     <Country country={countries}/>
     <Footer/>
    </div>
  );
}


export default App;
