import hero from "../assets/hero.png";
import paint from "../assets/paint.png";

function Home() {
  return (
    <section className="py-5" id="home">
      <div className="container-md">
        <div className="row justify-content-between align-items-center gap-2">
          <div className="col-md-5">
            <div>
              <p className="display-5">Hello there,<br/>I'm <span className="sp-color">Abdullah</span></p>
              <p className="lead text-muted">I beautifully design simple websites and I love what I do.</p>
            </div>
          </div>
        <div className="col-md-6">
          <div className="position-relative">
            <img src={paint} alt="paint img" className="position-absolute top-50 start-50 translate-middle z-n1 img-fluid"/>
            <img src={hero} alt="hero img" className="img-fluid" width="280"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Home;
