import React from 'react'
import logo from './logo.png'


export default function Platform({division}) {
    return (
        <div className='plateform'>
            <div className="plateform-text"> 
                <h1 className='world'>The world's <br />
                    biggest healthcare platform
            </h1>

                <h2 className='office'>
                    We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
            </h2>
                <img className='logo-doc-plateform' src={logo} alt="taswira" />

            </div>
            <div className='plateform-icon'>
                {division.map(el => (<div className={el.class}> <img src={el.image } alt="taswira"></img>
                    <h2>{el.Title}</h2>
                    <p>{el.text}</p>
                </div>


                 ))}
                </div>
        </div>
            )
        }
