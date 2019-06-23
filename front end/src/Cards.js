import React from 'react'

export default function Cards({card}) {
  return (
    
        <div className='section-cards'>
                    {card.map(el => (<div className={el.class}><h6>{el.title}</h6>
                    <h2>{el.text}</h2>
                    
                    {!el.pays?null: <select className='button-selection'>{el.pays.map(el =><option>{el}</option>)}</select>}
                    <img src={el.image} alt="taswira"/>
                </div>))}
        </div>
       

  )
}


