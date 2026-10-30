
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
          <a href="#future-admin">Clientes</a>
          <a href="#future-contacto" className="future-nav-btn">
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
      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80"
      alt="Entrenamiento en el gimnasio"
    />
    <strong>Genesis</strong>
  </div>
</section>


      <section className="future-intro">
        <div>
          <small>SOBRE NOSOTROS</small>
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
          <strong>+60000</strong>
          <p>Usuarios mensuales</p>
        </div>
        <div>
          <strong>+20</strong>
          <p>Años de experiencia</p>
        </div>
      </section>

      <section className="future-section" id="future-beneficios">
        <small>Veni y ...</small>
        <h2>
          Senti la <span>Diferencia.</span>
        </h2>
        <p>
          <p>
  Rutinas adaptadas a tus objetivos, seguimiento de tu progreso
  y asesoramiento profesional para ayudarte a alcanzar tu mejor
  versión. Contamos con equipamiento de alto nivel y un ambiente
  ideal para que entrenes a tu ritmo y disfrutes cada entrenamiento.
</p>
        </p>

        <div className="future-gallery">
          <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80"
            alt="Máquinas de gimnasio"
          />
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
            alt="Instalaciones"
          />
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
            alt="Entrenamiento"
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
            Conocé los beneficios de <span>Genesis</span>
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
  href="https://rutinas-react-gym.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="future-rutina-btn"
>
  Ver rutina
</a>
          </div>
        </div>
      </section>

<div className="future-dashboard">
  <aside>
    <strong>Nivel</strong>
    <span>Comenzá a entrenar</span>
    <span>Seguí progresando</span>
    <span>Superá tus límites</span>
  </aside>

  <div className="future-dashboard-main">
    <h3>Elegí tu nivel de entrenamiento</h3>

    <div className="future-dashboard-cards">
      <a
        href="https://rutinas-react-gym.netlify.app"
        className="future-dashboard-routine"
      >
       
        <strong>Principiantes</strong>
       
        <b>↗</b>
      </a>

      <a
        href="https://rutinas-react-gym.netlify.app"
        className="future-dashboard-routine"
      >
        <strong>Intermedios</strong>
     
        <b>↗</b>
      </a>

      <a
        href="https://rutinas-react-gym.netlify.app"
        className="future-dashboard-routine"
      >
        <strong>Avanzados</strong>
     
        <b>↗</b>
      </a>
    </div>
  </div>
</div>

        <div className="future-billing">
          <h3>Facturación</h3>
          <p>
            Controlá pagos, membresías y vencimientos de forma
            sencilla y organizada.
          </p>
        </div>
     
      <footer className="future-footer" id="future-contacto">
        <h2>
          ¿Listo para llevar tu
          <br />
          gimnasio al siguiente
          <br />
          nivel?
        </h2>

        <p>
          Empezá a transformar tu gimnasio con una plataforma
          creada para vos y tus clientes.
        </p>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
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
