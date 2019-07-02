import React from 'react';
import Headers from './Header';
// import './index.css';s
import Intro from './intro';
import Hackathon from './Create-hack'
import Photo from './Upload_Photo'
import Country from './Country'
import FST from './FST.PNG'
import insat from './insat.PNG'
import enicar from './enicar.PNG'
import Footer from './footer'
import Platform from './Platform'
import RegistrationForm from './sign'
import {Route} from 'react-router-dom'
import Login from './login'
const hackathon=[{photo:FST,name:"Hackathon FST",class:"country",description:"A Hackathon organized by the FST"},
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

     
<Route path='/' render={()=> <Headers/>} />
<Route exact path='/' render={()=> <Intro/>} />
{/* <Route path='/home' render={()=> <Photo/>} /> */}
{/* <Route exact path='/' render={()=> <Calendar/>} /> */}
{/* <Route exact path='/' render={()=>  <Country country={hackathon}/>} /> */}
<Route exact path='/sign-up' render={()=><RegistrationForm />} />
<Route exact path='/' render={()=><Hackathon />} />
<Route exact path='/aboutus' render={()=> <Platform />} />
{/* <Route path='/login' render={()=><Login />} /> */}
<Route path='/' render={()=>  <Footer/> } />
    </div>
  );
}


export default App;
