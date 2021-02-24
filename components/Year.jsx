import { Col, Container, Row, Table } from "reactstrap";

const Year = () => {
  return (
    <section id={"festjahr"} className={"section-lg bg-danger text-white"}>
      <Container>
        <Row>
          <Col>
            <p className="lead text-white">
              Liebe Musikfreunde,
              <br />
              liebe Besucher unserer Jubiläumsseite „50 Jahre Negertalmusikanten
              e. V. Siedlinghausen“!
            </p>

            <p className="lead text-white">
              Im Jahr 1971 als Jugendblasorchester gegründet, können wir 2021
              auf unser 50-jähriges Bestehen zurückblicken.
            </p>
            <p className="lead text-white">
              Viele Musikerinnen, Musiker und Vorstandsmitglieder haben den
              Verein in den letzten Jahrzehnten geprägt und zu dem gemacht, was
              wir heute in Siedlinghausen und darüber hinaus darstellen.
            </p>
            <p className="lead text-white">
              Aktuell, mitten in den Vorbereitungen für das Jubiläumsjahr, hat
              uns die Corona – Pandemie erreicht.
            </p>
            <p className="lead text-white">
              Wir alle hoffen die geplanten Veranstaltungen 2021 trotzdem
              durchführen und das Jubiläum mit Euch gebührend feiern zu können.
            </p>
            <p className="lead text-white">
              Dazu laden wir schon jetzt alle Dorfbewohner, die örtlichen
              Vereine und Gemeinschaften, unsere befreundeten Musikvereine und
              Spielmannszüge sowie alle Gäste aus nah und fern und ganz
              besonders unsere ehemaligen Musikerinnen, Musiker und
              Vorstandsmitglieder herzlich ein.
            </p>
            <p className="lead text-white">
              Die ehemaligen MusikerInnen und Vorstandsmitglieder möchten wir
              bitten, sich mit dem beigefügten Formular anzumelden.
            </p>
            <p className="lead text-white">
              <strong>
                Der Vorstand und die Aktiven der Negertalmusikanten freuen sich
                auf ein schönes Jahr mit Euch!
              </strong>
            </p>
          </Col>
        </Row>
        <Row className={"mt-md-4"}>
          <Col>
            <h1 className="display-3 text-white">
              Willkommen zum 50-jährigen Jubiläum an folgenden Terminen:
            </h1>
            <Table className={"text-white mt-4 table-responsive"}>
              <tbody className={"w-100"}>
              <tr>
                <td>30.04.2021 *</td>
                <td>Maibaum aufstellen</td>
                <td>@ Eschenplatz Siedlinghausen</td>
              </tr>
              <tr>
                <td>19.09.2021 *</td>
                <td>Jubiläumskonzert</td>
                <td>@ Schützenhalle Siedlinghausen</td>
              </tr>
              <tr>
                <td>30.10.2021 *</td>
                <td>Festveranstaltung</td>
                <td>@ Schützenhalle Siedlinghausen</td>
              </tr>
              <tr>
                <td>31.10.2021 *</td>
                <td>Frühschoppenkonzert</td>
                <td>@ Schützenhalle Siedlinghausen</td>
              </tr>
              </tbody>
            </Table>
            <p className="lead text-white">
              * Coronabedingte Änderungen vorbehalten.
            </p>
            <hr className="border-white" />
            <p className="lead text-white">
              Unsere Jubiläumsbroschüre zum Download
            </p>

            <a
              href="/pdfs/Heimatliebe Sonderausgabe-Negertalmusikanten-2020.pdf"
              target="_blank"
              className="btn btn-secondary"
            >
              Broschüre jetzt downloaden
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Year;
