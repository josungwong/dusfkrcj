import React from 'react'
import { Row,Col } from 'react-bootstrap'
const ContactItem = ({item}) => {
  return (
    <Row className='item-box'>
        <Col lg={2}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqUxfqfiX_37dDfoZJPbHLAxAKF5BSQNgvZA&s' alt='' width={75}/></Col>
        <Col lg={10}>
            <div>{item?.name}</div>
            <div>{item?.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem