import { data } from "./data-slides.js";

function Slide() {
  return (
    <>
      { data.map(({id, name, avatar, opinion, job, active}) => {
        return (
          <div class={`carousel-item ${active ? "active" : null}`} key={id}>
            <div class="card flex-md-row align-items-center sp-card bg-light">
              <div class="sp-opinion m-2 mb-0 m-md-3 me-md-2 rounded-pill overflow-hidden">
                <img src={avatar} alt={name}/>
              </div>
              <div class="card-body">
                <blockquote class="lead blockquote mb-0">
                  <p>"{opinion}"</p>
                  <footer class="blockquote-footer fs-5 fw-bold sp-color">{name} <span title={job} className="fw-normal fs-6">{job}</span></footer>
                </blockquote>
              </div>
            </div>
          </div> 
        );
      })}
    </>
  );
}

export default Slide;
