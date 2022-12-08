import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import Image from './images/Headerbg.jpeg'
import './SectionOne.css'

const SectionOne = () => {
  return (
    <div className='section--one'>
      <h1 style={{ paddingBottom: '2rem' }}>
        Providing Urgent Assignment Writing Service For Last-Minute Requests
      </h1>
      <Container>
        <Row
          md={2}
          xs={2}
          className='g-4'
        >
          <Col>
            <Card style={{ border: '0' }}>
              <Card.Body>
                <Card.Text>
                  <img
                    src={Image}
                    alt='pic'
                    width='100%'
                    height='360px'
                    style={{ borderRadius: '10px' }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ border: '0' }}>
              <Card.Body>
                <Card.Text style={{ textAlign: 'justify' }}>
                  In this 21st century, nobody has enough time to live only in
                  academic life. In this era of tough competition, everybody has
                  commitments and task to fulfil within the given deadline. If
                  you have a busy schedule due to personal, academic or
                  professional life, have sleepless nights and not sufficient
                  time to study do not worry. Master Assignment is giving you a
                  great attentive opportunity in providing urgent assignments.
                  We understand the student’s problem. It is hard to manage in
                  preparing presentations, assignments, events, parties and much
                  more. With the help of our teams’ passion and untiring
                  workforce, we are able to provide you with our instant
                  services of smart writings. Our team of professionals is 24/7
                  active and never hesitate to take your urgent task in hands.
                  No matter how short-time we have. Our polished tutors are
                  available to work under pressure and meet the deadlines. We do
                  not compromise on quality. Everything will be well-managed as
                  it is our core-responsibility. We commit to providing you
                  urgent work along with best quality within 4, 6 and 12 hours.
                  Do not panic and wait, feel free to contact us today.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionOne
