import {Card, Row , Col, Container }from 'react-bootstrap/'
import './CardComp.css'

const CardComp = () => {
    
  return (
    <div className='card--section' style={{background:'#fr44jf'}} >
    <Container>
      <h1 style={{paddingBottom:'3rem', paddingTop:'3rem'}}>Our Assignment Writing Services Cater To A Variety Of Academic Courses</h1>
    <Row xs={2} md={2} className="g-4">
        <Col>
          <Card className='card--pink'>
            <Card.Body>
              <Card.Title style={{fontWeight:'bold'}}>100% PLAGIARISM-FREE CONTENT GAURANTEE:</Card.Title>
              <Card.Text style={{textAlign:'justify'}}>
              Never had a good experience in quality work or you have any doubts about plagiarism? 
              When it comes about the quality we do not compromise and give us the best supreme quality 
              work to our dear clients. Our content creators hired on the basis of their abilities. 
              They have a good skill of doing research and smart writing techniques, therefore, 
              what they write is always unique. Scholarly assignments made by assignment master are 100% 
              plagiarism-free. We scan assignments with different trustable softwares then it reaches to your hands.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card--gray'>
            <Card.Body>
              <Card.Title style={{fontWeight:'bold'}}>CERTIFIED AND EXPERIENCED WRITERS:</Card.Title>
              <Card.Text style={{textAlign:'justify',  paddingBottom:'24px'}}>
              We have a huge team of toppers from renowned universities. 
              We take a chaotic test and interview to test their abilities in the academic field. 
              Our team of scholars work with dedication and devotion to prove their claimed skills 
              and maintain the prestige of our academy. Our authority is specialised in multiple fields 
              so they have immense information about different subjects.
              They are highly experienced with multiple complex assignments.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card--gray'>
            <Card.Body>
              <Card.Title style={{fontWeight:'bold'}}>OWNERSHIP GAURANTEE:</Card.Title>
              <Card.Text style={{textAlign:'justify'}}>
              We know the value of your assignment. As it is the only source of getting higher grades in education. 
              Obviously, your success depends on these assignments so we take serious care not to damage your privacy.
              Once the assignment has been issued it would not issue again. Nobody can buy the sold assignment from our platform.
              Your assignment is totally confidential in our hands, it would not reissue or exploit further. Just remember: We care for you!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card--pink'>
            <Card.Body>
              <Card.Title style={{fontWeight:'bold'}}>FREE UNLIMITED REVISIONS GAURANTEE:</Card.Title>
              <Card.Text style={{textAlign:'justify'}}>
              As we do care for customer’s satisfaction rather profit so we provide flexible revisions until your’s satisfaction. 
              The revisions we do in your assignment as per your queries are cost-free. We consider all your genuine and relevant 
              complaints, mould your assignment according to it and keeps the quality supreme. However, all we expect that complaints
              or queries should be informed to us within 20 days after the delivery of your order.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card--pink'>
            <Card.Body>
              <Card.Title style={{fontWeight:'bold'}}>24*7 STUDENT SUPPORT GAURANTEE:</Card.Title>
              <Card.Text style={{textAlign:'justify', paddingBottom:'48px'}}>
              Do you require genuine assistance at the midnight? This situation can come anytime when you need urgent support so 
              we give this special service to our dear students to get instant assistance anytime. As our friendly customer care is 
              24/7 active so we are available to hear from you.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card--gray' >
            <Card.Body>
              <Card.Title style={{fontWeight:'bold'}}>ON-TIME DEVLIVERY OF CONTENT:</Card.Title>
              <Card.Text style={{textAlign:'justify'}}>
              Task has been assigned and you are worried to have it on time? Do not worry anymore as your assignment is in reliable hands.
               Our team knows how to manage the workload. We stick to the words and deliver your work before the deadline meets. 
               As your future is dependant on our hands so we never take it is easy. We work hard and deliver your work within stipulated 
               time along with best competitive prices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col> 
    </Row>
    </Container>
</div>
  );
}

export default CardComp;

