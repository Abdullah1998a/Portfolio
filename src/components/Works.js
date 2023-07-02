import Project from "./Project";
import Slider from "./Slider";

function Works() {
  return (
    <section className="py-5" id="works">
      <div className="container-md">
        <div className="text-md-center">
          <h2 className="display-6 sp-color">My Latest Works</h2>
          <p className="mx-auto lead text-muted sp-width">Perfect solution for digital experience</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="py-3 sp-projects">
              <Project />
            </div>
          </div>
        </div>
      <div className="row py-4 justify-content-center" id="opinions">
        <div className="col-12">
          <div className="text-md-center">
            <h2 className="display-6 sp-color">People talk about me</h2>
            <p className="mx-auto lead text-muted sp-width">I always wanted my work to be part of a
  bigger self to make people's daily lives and com
  plex app simple to use.</p>
          </div>
        </div>
        <div className="col-md-8">
          <Slider />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Works;
