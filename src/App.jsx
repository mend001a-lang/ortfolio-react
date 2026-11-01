
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Félix Mendy | Développeur Web et Mobile</h1>

        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#projets">Mes projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="accueil">
          <h2>Bonjour, je suis Félix, développeur web 👋</h2>

          
<p>
  Passionné par le développement web, je conçois
  des sites internet modernes, responsive et des
  applications web interactives.

  Je travaille notamment avec HTML, CSS, JavaScript,
  React, Node.js et les bases de données.

  À travers mes projets, je développe mes compétences
  pour proposer des solutions numériques adaptées
  aux besoins des utilisateurs.
</p>


          <a href="#projets">Découvrir mes projets</a>
        </section>

        

<section id="projets">
  <h2>Mes projets</h2>

  <div className="projets-grid">

    {/* PROJET 1 : KËRTECH TALENT */}
    <article className="projet-card">
      <h3>KërTech Talent</h3>

      <p>
        Plateforme de mise en relation entre freelances
        et clients, avec authentification, gestion des
        projets et candidatures.
      </p>

      <p>
        <strong>Technologies :</strong> HTML, CSS,
        JavaScript, Node.js, Express, SQLite
      </p>

      <a
        href="https://github.com/mend001a-lang/kertech-talent"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le code sur GitHub
      </a>
    </article>

    {/* PROJET 2 : PORT RUSSELL API */}
    <article className="projet-card">
      <h3>Port Russell API</h3>

      <p>
        Application web de gestion de catways et de
        réservations, avec une API REST et une base
        de données MongoDB.
      </p>

      <p>
        <strong>Technologies :</strong> Node.js,
        Express, MongoDB
      </p>

      <a
        href="https://port-russell-api-xi9m.onrender.com/dashboard"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le projet en ligne
      </a>
    </article>

    {/* PROJET 3 : LE PETIT BISTRO */}
    <article className="projet-card">
      <h3>Le Petit Bistro</h3>

      <p>
        Site vitrine responsive pour un restaurant,
        avec présentation des plats et formulaire
        de réservation.
      </p>

      <p>
        <strong>Technologies :</strong> HTML,
        Sass, Bootstrap
      </p>

      <a
        href="https://github.com/mend001a-lang/le-petit-bistro"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir le code sur GitHub
      </a>
    </article>

  </div>
</section>


<section id="competences">
  <h2>Mes compétences</h2>

  <div className="competences-grid">
    <span>HTML5</span>
    <span>CSS3</span>
    <span>JavaScript</span>
    <span>React</span>
    <span>WordPress</span>
    <span>Sass</span>
    <span>Bootstrap</span>
    <span>Node.js</span>
    <span>Express.js</span>
    <span>MongoDB</span>
    <span>MySQL</span>
    <span>SQLite</span>
    <span>Git & GitHub</span>
  </div>
</section>


       
<section id="contact">
  <h2>Travaillons ensemble !</h2>

  <p>
    Vous recherchez un développeur web pour créer
    votre site internet ou votre application ?
    Échangeons sur votre projet.
  </p>

  <a
    href="mend001a@gmail.com"
    className="btn-contact"
  >
    Me contacter par email
  </a>
</section>

      </main>

      <footer>
        <p>© 2026 - Mon Portfolio</p>
      </footer>
    </div>
  );
}

export default App;



