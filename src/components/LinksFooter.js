import { data } from "./data-links.js";

function Links() {
  return (
    <>
      { data.map(({id, link}) => {
        return (
          <li key={id}>
            <a className="lead text-capitalize fs-5 link-primary link-offset-1" href={`#${link}`}>{link}</a>
          </li>
        );
      })}
    </>
  );
}

export default Links;
