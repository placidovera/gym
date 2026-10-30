
import "./FotoFrase.css";

const FotoFrase = () => {
  return (
    <div className="foto-frase">
      <img
        className="foto-gym"
        src="/gym.jpeg"
        alt="Persona entrenando"
      />

      <div className="texto-frase">
        <h2>Superá tus límites</h2>
        <p>
          Cada entrenamiento te acerca un paso más
          a tus objetivos. No te rindas.
        </p>
      </div>
    </div>
  );
};

export default FotoFrase;
