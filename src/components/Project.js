import { data } from "./data-projects.js";

function Project() {
  return (
    <>
      { data.map(({id, url, img, name}) => {
        return (
          <a href={url} key={id}><img className="img-fluid" src={img} alt={name} /></a>
        );
      })}
    </>
  );
}

export default Project;
