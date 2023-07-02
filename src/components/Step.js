import { data } from "./data-steps.js";

function Step() {
  return (
    <>
    { data.map(({id, step, description}) => {
      return (
        <div className="col-md-6" key={id}>
          <div className="card shadow-sm sp-num">
            <div className="card-body">
              <h5 className="display-6 fs-3 sp-color">{step}</h5>
              <p className="card-text lead text-mu
ted fs-5">{description}</p>
            </div>
          </div>
        </div>
      ); 
    })}
    </>
  );
}

export default Step;
