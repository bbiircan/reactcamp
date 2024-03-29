import React from 'react'
import { useParams } from 'react-router-dom'
import {Button,Card,Image,} from 'semantic-ui-react'

export default function ProductDetail() {
    let {title} =useParams()
    
  return (
    <div>
        <Card.Group>
         <Card fluid>
         <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='/images/avatar/large/steve.jpg'
        />
        <Card.Header>{title}</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
     </Card.Group>
    </div>
  )
}