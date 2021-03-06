import React from "react"
import {
  Container,
  Img,
  Section,
  FlexStyled as Flex
} from "../components-styled"
import { Box } from "@rebass/grid"

const ImprintPage = () => (
  <Container>
    <Section>
      <h2>Imprint</h2>
      <h3>Responsible</h3>
      <p>
        Dr. Ulrich Anders<br />
        Cologne Business School<br />
        Hardefuststr. 1<br />
        50677 Köln
      </p>
      <h3>Credits</h3>
      <p>
        Fotos from <a href="https://unsplash.com/">Unsplash</a>. Thanks to:
      </p>
      <ul>
        <li>Alex Kotliarsyi</li>
        <li>Álvaro Serrano</li>
        <li>Clint Adair</li>
        <li>Dmitry Ratshny</li>
        <li>Guillaume Bolduc</li>
        <li>Jakob Owens</li>
        <li>Jason-Blackeye</li>
        <li>Jason Leung</li>
        <li>Krystian Tambur</li>
        <li>Michael Mrozek</li>
        <li>Nicolas Green</li>
        <li>Olga Guryanova</li>
        <li>Samuel Zeller</li>
        <li>William Bout</li>
      </ul>

      <p />
    </Section>
    <Section>
      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
        diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
        bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder
        nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
        hinweisen.
      </p>
      <p>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
        Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
        Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
        entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.
      </p>
      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </p>
      <p>
        Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
        ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
        entfernen.
      </p>
      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
      </p>
      <p>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
      <p>
        <i>
          Quellverweis: <a href="https://www.e-recht24.de">e-recht24.de</a>
        </i>
      </p>
    </Section>
  </Container>
)

export default ImprintPage
