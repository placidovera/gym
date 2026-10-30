
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="contact-item">
        <div className="contact-icon">📍</div>
        <p>
          Centro Comercial Príncipe Pío.
          <br />
          Paseo de la Florida, 2. Madrid.
        </p>
      </div>

      <div className="contact-item">
        <div className="contact-icon">☏</div>
        <p>+34 676 939 833</p>
      </div>

      <div className="contact-item">
        <div className="contact-icon">✉</div>
        <p>madrid-principepio@fitnesspark.es</p>
      </div>
    </section>
  );
};

export default ContactInfo;
