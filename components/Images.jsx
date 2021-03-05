import {
  Col,
  Container,
  Row
} from 'reactstrap';

const Images = () => {
  return (<section id={'fotos'} className={'section-lg bg-danger'}>
    <Container>
      <Row>
        <Col className={'d-flex justify-content-center'}>
          <img
            width={1010}
            height={672}
            src="/img/negertalmusikanten-weste.jpg"
            alt="50 Jahre Negertalmusikanten"
            loading="lazy"
            className={'img-fluid m-auto'}
          />
        </Col>
      </Row>
    </Container>
  </section>);
};

export default Images;
