import Slide from "./Slide";

function Slider() {
return (
    <div id="opinionCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <Slide />
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#opinionCarousel" data-bs-slide="prev">
        <span class="d-none carousel-control-prev-icon sp-bg-color" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#opinionCarousel" data-bs-slide="next">
        <span class="d-none carousel-control-next-icon sp-bg-color" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
