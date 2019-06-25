import React from 'react';
import Headers from './Header';
// import './index.css';s
import Intro from './intro';
import Country from './Country'
import FST from './FST.PNG'
import insat from './insat.PNG'
import enicar from './enicar.PNG'
import Footer from './footer'
import Platform from './Platform'
import RegistrationForm from './sign'
import {Route} from 'react-router-dom'

const countries=[{photo:FST,name:"Hackathon FST",class:"country",description:"A Hackathon organized by the FST"},
  {photo:insat,name:"Hackathon INSAT",class:"country",description:"A Hackathon organized by the INSAT"},
  {photo:enicar,name:"Hackathon ENICARTHAGE",class:"country",description:"A Hackathon organized by the ENICARTHAGE"},
]


function App() {
  return (
    <div className="App">
     {/* <Headers/> */}
     {/* <Intro/> */}
     {/* <Cards card={card_items}/> */}
     {/* <Links tabetoile ={etoile}/> */}
     {/* <Platform division={tablature}/> */}
     {/* <Teams/> */}
      {/* <Country country={countries}/> */}
     {/* <Footer/>  */}


<Route exact path='/' render={()=> <Headers/>} />
<Route exact path='/' render={()=> <Intro/>} />
<Route exact path='/' render={()=>  <Country country={countries}/>} />
<Route exact path='/sign-up' render={()=><RegistrationForm />} />
<Route exact path='/aboutus' render={()=> <Platform />} />
<Route exact path='/' render={()=>  <Footer/> } />
    </div>
  );
}


export default App;
