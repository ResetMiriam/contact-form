import "../styles/App.scss";

function App() {
  return (
    <>
      <div className="block__container--background">
        <section className="scroll__container">
          <div className="  "></div>
          <div className="name__container">
            <form className="name__form">
              <label for="name">¿Cuál es tu nombre?</label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Escribe aquí tu respuesta..."
              />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
