import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdb-react-ui-kit'
import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsTelephone,
  BsWhatsapp,
} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
  return (
    <MDBFooter className='footer--container text-center text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a
            href=''
            className='me-4 text-reset'
          >
            <BsFacebook icon='facebook-f' />
          </a>
          <a
            href=''
            className='me-4 text-reset'
          >
            <BsTwitter icon='twitter' />
          </a>
          <a
            href=''
            className='me-4 text-reset'
          >
            <BsGoogle icon='google' />
          </a>
          <a
            href=''
            className='me-4 text-reset'
          >
            <BsInstagram icon='instagram' />
          </a>
          <a
            href=''
            className='me-4 text-reset'
          >
            <BsLinkedin icon='linkedin' />
          </a>
          <a
            href=''
            className='me-4 text-reset'
          >
            <BsGithub icon='github' />
          </a>
        </div>
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol
              md='3'
              lg='4'
              xl='3'
              className='mx-auto mb-4'
            >
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon
                  icon='gem'
                  className='me-3'
                />
                About Sandywords
              </h6>
              <p>
                Sandy Words is the UK based academy which provides you with
                supreme quality answer sheets, home tasks and assignments.
                Anti-plagiarized and reliable content creation is our core
                agenda. This is to help students go the extra mile and achieve
                best grades. All our papers are for reference purposes only.
              </p>
            </MDBCol>

            <MDBCol
              md='2'
              lg='2'
              xl='2'
              className='mx-auto mb-4'
            >
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a
                  href='#!'
                  className='text-reset'
                >
                  Essay Writing
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  className='text-reset'
                >
                  Thesis Writing
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  className='text-reset'
                >
                  Coursework Writing
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  className='text-reset'
                >
                  Case Study
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md='3'
              lg='2'
              xl='2'
              className='mx-auto mb-4'
            >
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
                <a
                  href='#!'
                  className='text-reset'
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  className='text-reset'
                >
                  Pricing
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  className='text-reset'
                >
                  Services
                </a>
              </p>
              <p>
                <a
                  href='#!'
                  className='text-reset'
                >
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md='4'
              lg='3'
              xl='3'
              className='mx-auto mb-md-0 mb-4'
            >
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon
                  icon='home'
                  className='me-2'
                />
                Unit 24 Highcroft Industrial Estate,Enterprise Road,
                Waterlooville, United Kingdom, PO8 0BT
              </p>
              <p>
                <BsEnvelope
                  icon='envelope'
                  className='me-3'
                />
                info@sandywords.co.uk
              </p>
              <p>
                <BsTelephone
                  icon='phone'
                  className='me-3'
                />{' '}
                +44 (0) 1923528891
              </p>
              <p>
                <BsWhatsapp
                  icon='print'
                  className='me-3'
                />{' '}
                +44 7574 913556
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className='text-center p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2021 Copyright:
        <a
          className='text-reset fw-bold'
          href='#1'
        >
          sandywords.co.uk
        </a>
      </div>
    </MDBFooter>
  )
}

export default Footer
