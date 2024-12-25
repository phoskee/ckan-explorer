import Image from "next/image";

export default function Home() {
  return (
    <div className="container-wrapper">
      <div className="container">
        <header>
          <h1>Pagina di Test HTML</h1>
          <nav>
            <ul>
              <li>
                <a href="#testo">Testo</a>
              </li>
              <li>
                <a href="#form">Form</a>
              </li>
              <li>
                <a href="#tabella">Tabella</a>
              </li>
              <li>
                <a href="#liste">Liste</a>
              </li>
              <li>
                <a href="#media">Media</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="testo">
            <h2>Elementi di Testo</h2>
            <p>Questo è un paragrafo normale.</p>
            <p>
              <strong>Testo in grassetto</strong> e <em>testo in corsivo</em>
            </p>
            <p>
              <mark>Testo evidenziato</mark> e <sub>pedice</sub> e{" "}
              <sup>apice</sup>
            </p>
            <blockquote>Questa è una citazione di esempio</blockquote>
            <pre>Testo preformattato con spazi mantenuti</pre>
            <code>Questo è del codice</code>
          </section>
          <section id="tabella">
            <h2>Tabella di Esempio</h2>
            <table>
              <thead>
                <tr>
                  <th>Header 1</th>
                  <th>Header 2</th>
                  <th>Header 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cella 1</td>
                  <td>Cella 2</td>
                  <td>Cella 3</td>
                </tr>
                <tr>
                  <td>Cella 4</td>
                  <td>Cella 5</td>
                  <td>Cella 6</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section id="liste">
            <h2>Liste</h2>
            <h3>Lista non ordinata</h3>
            <ul>
              <li>Elemento 1</li>
              <li>Elemento 2</li>
              <li>Elemento 3</li>
            </ul>

            <h3>Lista ordinata</h3>
            <ol>
              <li>Primo</li>
              <li>Secondo</li>
              <li>Terzo</li>
            </ol>

            <h3>Lista di definizioni</h3>
            <dl>
              <dt>HTML</dt>
              <dd>HyperText Markup Language</dd>
              <dt>CSS</dt>
              <dd>Cascading Style Sheets</dd>
            </dl>
          </section>

          <section id="media">
            <h2>Media</h2>
          </section>
        </main>
        <footer>
          <p>© 2024 Pagina di Test HTML</p>
        </footer>
      </div>
    </div>
  );
}
