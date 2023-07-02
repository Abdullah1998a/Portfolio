import Service from "./Service";
import Step from "./Step";

function Services() {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container-md">
        <div className="text-md-center">
          <h2 className="display-6 sp-color">What do I help ?</h2>
          <p className="mx-auto lead text-muted sp-width">I will help you with finding a solution and solve your problems, We use process design to create digital products. Besids that also help their business.</p>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-block d-md-flex">
              <div className="d-flex align-items-center me-5 my-3">
                <span className="display-5 sp-color fw-bold">+142</span>
                <span className="lead ms-3">Projects</span>
              </div>
              <div className="d-flex align-items-center my-3">
                <span className="display-5 sp-color fw-bold">+12</span>
                <span className="lead ms-3">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2 row-gap-2">
          <Service />
        </div>
        <div className="row pt-4" id="about">
          <div className="col">
            <div className="text-md-center">
              <h2 className="display-6 sp-color">How do I work ?</h2>
              <p className="mx-auto lead text-muted sp-width">Steps of our work</p>
            </div>
          </div>
        </div>
        <div className="row py-4 row-gap-4 justify-content-center">
          <Step />
        </div>
      </div>
    </section>
  );
}

export default Services;
