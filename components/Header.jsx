import Image from 'next/image';
import Link from 'next/link';
import {
  useEffect,
  useState
} from 'react';
import {
  Col,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Row
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logo, setLogo] = useState(null);
  const setOpen = () => {
    if (window.innerWidth >= 768) return;
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const res = fetch(`/api/media/logo`)
      .then(res => res.json())
      .then(json => setLogo(json));
  }, []);
  return (<>
    <Navbar
      className="navbar-horizontal navbar-light sticky-top bg-white shadow"
      expand="lg"
    >
      <Container>
        {logo && <Link href="/">
          <a>
            <Image width={193} height={50} src={logo.sourceUrl} alt="Negertalmusikanten Siedlinghausen" />
          </a>
        </Link>}
        <button
          aria-controls="navbar-primary"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-primary"
          data-toggle="collapse"
          id="navbar-primary"
          type="button"
          onClick={setOpen}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <Collapse isOpen={isOpen} navbar toggler="#navbar-primary">
          <div className="navbar-collapse-header">
            <Row>
              {logo && <Col className="collapse-brand" xs="6">
                <Image width={193} height={50} src={logo.sourceUrl} alt="Negertalmusikanten Siedlinghausen" />
              </Col>}
              <Col className="collapse-close" xs="6">
                <button
                  aria-controls="navbar-primary"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbar-primary"
                  data-toggle="collapse"
                  id="navbar-primary"
                  type="button"
                  onClick={setOpen}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-lg-auto" navbar>
            <NavItem>
              <NavLink
                className={'nav-link'}
                onClick={setOpen}
                href="#top"
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={'nav-link'}
                onClick={setOpen}
                href="#festjahr"
              >
                Festjahr
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={'nav-link'}
                onClick={setOpen}
                href="#anmeldung"
              >
                Anmeldung
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={'nav-link'}
                onClick={setOpen}
                href="#fotos"
              >
                Das sind wir
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </>);
};

export default Header;
