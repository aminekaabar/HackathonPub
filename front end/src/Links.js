import React from 'react'

export default function Links(props) {
  return (
    <div style ={{display: "flex"}}>
      <h1 className='docplanner-text'>We are a global company<br/>
                    with local culture</h1>
                    <div className='global-links'>
                     {props.tabetoile.map(x=> x) }
                    </div>
    </div>
  )
}
