import background from "../images/background.jpg";

function name() {
  return (
    <section className="name__section">
      <div className="name__container"></div>
      <a
        title="Rick and Morty Directory"
        href="http://beta.adalab.es/modulo-3-evaluacion-final-MiriamVF/#/"
      >
        <img className="header__title" src={background} alt="Rick and Morty" />
      </a>
    </section>
  );
}

export default name;
