import { Col, Container, Nav, NavItem, Row } from 'reactstrap'

const Footer = () => {
  return (<footer className='footer'>
    <Container>
      <Row>
        <Col>
          <Nav className=" nav-footer justify-content-center">
            <NavItem>
              <a
                rel="noopener noreferrer"
                className={'nav-link'}
                href="https://www.negertalmusikanten.de/about/"
                target="_blank"
              >
                Impressum
              </a>
            </NavItem>
            <NavItem>
              <a
                rel="noopener noreferrer"
                className={'nav-link'}
                href="https://www.negertalmusikanten.de/j/privacy"
                target="_blank"
              >
                Datenschutz
              </a>
            </NavItem>
          </Nav>
        </Col>
      </Row>
    </Container>
  </footer>)
}

export default Footer
