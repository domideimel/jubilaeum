import { Container } from 'reactstrap';

const Hero = () => {
  return (<section className={'section-lg'}>
    <Container className={'d-flex align-items-center justify-content-center mb-4'}>
      <img
        width={874}
        height={620}
        src="/img/hero.jpg"
        alt="50 Jahre Negertalmusikanten"
        loading="lazy"
        className={'img-fluid'} />
    </Container>
  </section>);
};

export default Hero;
