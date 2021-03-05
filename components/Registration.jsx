import {
  useRef,
  useState
} from 'react';
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row
} from 'reactstrap';

const Registration = () => {
  const [name, setName] = useState('');
  const [nachname, setNachname] = useState('');
  const [strasse, setStrasse] = useState('');
  const [ort, setOrt] = useState('');
  const [email, setEmail] = useState('');
  const [handy, setHandy] = useState('');
  const [konzert, setKonzert] = useState('');
  const [festveranstaltung, setFestveranstaltung] = useState('');
  const [fruehschoppenkonzert, setFruehschoppenkonzert] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sectionRef = useRef(null);

  const formData = {
    name,
    nachname,
    strasse,
    ort,
    email,
    handy,
    konzert,
    festveranstaltung,
    fruehschoppenkonzert,
    text
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const checkIfFormIsNotEmpty = () => {
    return name !== '' && nachname !== '' && strasse !== '' && ort !== '' && email !== '' && konzert !== '' && festveranstaltung !== '';
  };

  const onSubmit = e => {
    e.preventDefault();
    const { current } = sectionRef;
    setError(null);
    if (checkIfFormIsNotEmpty()) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData })
      })
        .then(() => {
          setName('');
          setNachname('');
          setStrasse('');
          setOrt('');
          setEmail('');
          setKonzert(null);
          setFestveranstaltung(null);
          setFruehschoppenkonzert(null);
          setText('');
          setHandy('');
          setSuccess(true);
        })
        .catch(error => setError('Fehler beim versenden'));
      current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    } else {
      setError('Bitte füll die mit Stern markierten Felder aus!');
      current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
    }
  };

  return (<section id={'anmeldung'} className={'section-lg'} ref={sectionRef} style={{ background: '#f5f7f9' }}>
    <Container>
      <Row>
        <Col>

          {success && <Alert color='success'>Erfolgreich versandt!</Alert>}
          {error && <Alert color='danger'>{error}</Alert>}

          <h2 className={'display-3'}>Anmeldung ehem. Musiker/innen und Vorstandsmitglieder</h2>
          <Form
            onSubmit={onSubmit}
            netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Vorname *"
                name='name'
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Name *"
                name='nachname'
                type="text"
                value={nachname}
                onChange={e => setNachname(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Straße *"
                name='strasse'
                type="text"
                value={strasse}
                onChange={e => setStrasse(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Postleitzahl / Ort *"
                name='ort'
                type="text"
                value={ort}
                onChange={e => setOrt(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="name@example.com *"
                type="email"
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-control-alternative"
                placeholder="Handynummer"
                type="text"
                name='handy'
                value={handy}
                onChange={e => setHandy(e.target.value)}
              />
            </FormGroup>

            <hr className={'bg-white'} />
            <h3 className='display-4'>Anwesenheit</h3>
            <Row>
              <Col>
                <h5 className='display-5'>19.09.2021 Jubiläumskonzert *</h5>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck1"
                    type="radio"
                    name='konzert'
                    value={konzert}
                    onChange={e => setKonzert('Konzert: Ja')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Ja
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck2"
                    type="radio"
                    name='konzert'
                    value={konzert}
                    onChange={e => setKonzert('Konzert: Ja mit Partner')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck2">
                    Ja mit Partner
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck3"
                    type="radio"
                    name='konzert'
                    value={konzert}
                    onChange={e => setKonzert('Konzert: Nein')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck3">
                    Nein
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className='display-5 '>30.10.2021 Festveranstaltung *</h5>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck4"
                    type="radio"
                    name='festveranstaltung'
                    value={festveranstaltung}
                    onChange={e => setFestveranstaltung('Festveranstaltung: Ja')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck4">
                    Ja
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck5"
                    type="radio"
                    name='festveranstaltung'
                    value={festveranstaltung}
                    onChange={e => setFestveranstaltung('Festveranstaltung: Ja mit Partner')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck5">
                    Ja mit Partner
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck6"
                    type="radio"
                    name='festveranstaltung'
                    value={festveranstaltung}
                    onChange={e => setFestveranstaltung('Festveranstaltung: Nein')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck6">
                    Nein
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 className='display-5 '>31.10.2021 Frühschoppenkonzert anschl. gemütliches
                  Beisammensein *</h5>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck7"
                    type="radio"
                    name='fruehschoppenkonzert'
                    value={fruehschoppenkonzert}
                    onChange={e => setFruehschoppenkonzert('Frühschoppenkonzert: Ja')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck7">
                    Ja
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck8"
                    type="radio"
                    name='fruehschoppenkonzert'
                    value={fruehschoppenkonzert}
                    onChange={e => setFruehschoppenkonzert('Frühschoppenkonzert: Ja mit Partner')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck8">
                    Ja mit Partner
                  </label>
                </div>
                <div className="custom-control custom-radio mb-3">
                  <input
                    className="custom-control-input"
                    id="customCheck9"
                    type="radio"
                    name='fruehschoppenkonzert'
                    value={fruehschoppenkonzert}
                    onChange={e => setFruehschoppenkonzert('Frühschoppenkonzert: Nein')}
                  />
                  <label className="custom-control-label" htmlFor="customCheck9">
                    Nein
                  </label>
                </div>
              </Col>
            </Row>
            <hr className={'bg-white'} />
            <p>
              Beim Frühschoppenkonzert am 31.10.2021 möchte das Orchester gerne gemeinsam mit den ehemaligen
              Musikerinnen und Musikern 2–3 Musikstücke aus der Vergangenheit aufführen.
            </p>
            <p>
              Hast Du Lust mitzuspielen und noch ein eigenes Instrument?<br />
              Welches Instrument spielst Du?<br />
              Noten stellen wir Dir zur Verfügung.
            </p>
            <Input
              className="form-control-alternative"
              placeholder="Ich spiele..."
              rows="3"
              type="textarea"
              name='text'
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <p className={'mt-3'}>
              Wir freuen uns auf einen gemeinsamen Auftritt!
            </p>
            <Button
              type='submit'
              className='mt-5'
            >
              Anmelden
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>);
};

export default Registration;
