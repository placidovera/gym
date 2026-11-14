
import "./Future.css";

const Future = () => {
  const beneficios = [
    {
      titulo: "Precios competitivos",
      texto: "Soluciones accesibles para gimnasios de todos los tamaños.",
    },
    {
      titulo: "Soporte continuo",
      texto: "Te acompañamos para aprovechar al máximo la plataforma.",
    },
    {
      titulo: "Planes de entrenamiento",
      texto: "Tus clientes pueden consultar sus rutinas desde la app.",
    },
    {
      titulo: "Información detallada",
      texto: "Administrá usuarios, pagos y estadísticas fácilmente.",
    },
  ];

  return (
    <div className="future">
      <header className="future-nav">
        <a href="#future-inicio" className="future-logo">
          <img
        className="logo"
        src="/logo.png"
        alt="Genesis"
      />
        </a>

        <nav>
          <a href="#future-beneficios">Características</a>
          <a href="#future-usuarios">Usuarios</a>
          <a href="#future-contacto">
            Contactanos ↗
          </a>
        </nav>
      </header>

  
<section className="future-hero" id="future-inicio">
  <div className="future-hero-text">
    <small>SUPERA TUS LÍMITES · ALCANZA TUS METAS</small>

    <h1>
      Tu mejor
      <br />
      versión empieza
      <br />
      <span>hoy.</span>
    </h1>

    <p>
      Cada entrenamiento cuenta. Cada esfuerzo te acerca a tus
      objetivos. No importa de dónde empezás, sino hasta dónde
      estás dispuesto a llegar. ¡Convertí tus metas en resultados!
    </p>

    <a href="#future-beneficios" className="future-button">
      Empezá hoy ↗
    </a>
  </div>

  <div className="future-hero-image">
    <img
        className="logo"
        src="/genesis.jpg"
        alt="Persona entrenando"
      />
    <strong>Genesis</strong>
  </div>
</section>


      <section className="future-intro">
        <div>
          <h2>
            El futuro es <span>ahora.</span>
          </h2>
        </div>

      <p>
  Contamos con equipamiento de alto nivel para que puedas
  entrenar y alcanzar tus objetivos, en un ambiente agradable,
  cómodo y lleno de buena energía. Nuestro equipo de
  profesionales está siempre a tu disposición para asesorarte,
  acompañarte en cada entrenamiento y ayudarte a superar tus
  límites. ¡Sentite cómodo, entrená a tu ritmo y disfrutá
  de cada paso hacia tu mejor versión!
</p>
      </section>

      <section className="future-stats">
        <div>
          <strong>+70</strong>
          <p>Aparatos de fitness</p>
        </div>
        <div>
          <strong>+20</strong>
          <p>Años de experiencia</p>
        </div>
      </section>

      <section className="future-section" id="future-beneficios">
        <h2>
          Senti la <span>Diferencia.</span>
        </h2>
        <p>
        
  Rutinas adaptadas a tus objetivos, seguimiento de tu progreso
  y asesoramiento profesional para ayudarte a alcanzar tu mejor
  versión. Contamos con equipamiento de alto nivel y un ambiente
  ideal para que entrenes a tu ritmo y disfrutes cada entrenamiento.
</p>
       
        <div className="future-gallery">
               <img
        className=""
        src="/salonabajo.jpg"
        alt="Genesis"
      />
              <img
        className=""
        src="/manc.jpg"
        alt="Genesis"
      />
             <img
        className=""
        src="/tele.jpg"
        alt="Genesis"
      />
        </div>
      </section>

      <section className="future-benefits">
        <div className="future-benefits-image">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
            alt="Persona entrenando"
          />
        </div>

        <div className="future-benefits-content">
          <small>VENTAJAS</small>
          <h2>
            Conocé los beneficios de entrenar en <span>Genesis</span>
          </h2>

          <div className="future-benefits-grid">
            {beneficios.map((beneficio) => (
              <article key={beneficio.titulo}>
                <span>○</span>
                <div>
                  <h3>{beneficio.titulo}</h3>
                  <p>{beneficio.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="future-experience" id="future-usuarios">
        <small>EXPERIENCIA DE USUARIO</small>
        <h2>
          Experiencia de <span>usuario.</span>
        </h2>

        <div className="future-experience-grid">
          <p>
            Si eres cliente pueden consultar sus rutinas,
            realizar un seguimiento de sus progresos y
            organizar sus entrenamientos desde cualquier lugar.
          </p>

          <div className="future-phone">
            <div className="future-phone-camera"></div>
            <strong>GENESIS<span>.</span></strong>
            <small>TU PROGRESO</small>
            <h3>¡VAMOS POR MÁS!</h3>

            <div className="future-phone-data">
              <span>Entrenamientos</span>
              <strong>12</strong>
            </div>

            <div className="future-phone-data">
              <span>Objetivo semanal</span>
              <strong>80%</strong>
            </div>

            <div className="future-progress">
              <div></div>
            </div>
<a
  href="https://rutinas-genesis.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="future-rutina-btn"
>
  Ver rutina
</a>
          </div>
        </div>
      </section>
     
      <footer className="future-footer" id="future-contacto">
        <h2>
          ¿Listo para llevar tu 
          <br />
          cuerpo al siguiente
          <br />
          nivel?
        </h2>

        <p>
          Empezá a transformarte en tu mejor version.
        </p>

      <a
  href="https://wa.me/543434765329"
  target="_blank"
  rel="noopener noreferrer"
  className="future-button future-button-fill"
>
          Contactanos por WhatsApp
        </a>

        <hr />
        

        <small>© 2026 Genesis. Todos los derechos reservados.</small>
      </footer>
    </div>
  );
};

export default Future;
