import { data } from "./data-services.js";

function Service() {
  return (
    <>
    { data.map(({id, img, bgColor, service, projects}) => {
      return (
        <div className="col-md-4" key={id}>
          <div className="card shadow-sm sp-effect">
            <div className="card-body text-center d-flex d-md-block align-item-center justify-content-center">
              <div className={`d-flex justify-content-center align-items-center rounded-pill ${bgColor} me-5 sp-img`}>
                <img className="img-fluid" src={img} alt={`${service} icon`}/>
              </div>
              <div className="text-start">
                <p className="lead my-1 mt-md-3 mb-md-1">{service}</p>
                <span className="text-muted">{projects} projects</span>
              </div>
            </div>
          </div>
        </div>
      );
    })}
    </>
  );
}

export default Service;
