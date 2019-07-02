import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
export default function Country({ country }) {
  return (
    <div className="docplanner-countries">
      <div>      <h1 className="Hackathon-Title">Latest Hackathons</h1>
</div>
<div className="docplanner-countries">
{country.map(el => (<div className={el.class}>
        <img className='hackphoto' src={el.photo} alt="Taswira"></img>
        <div className='openings-button'>
          <p>{el.name}</p>
          <Accordion defaultActiveKey="1">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
              See description
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="description">{el.description}</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>


      ))}
</div>
     

    </div>
  )
}
