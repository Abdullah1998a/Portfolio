import { data } from "./data-links.js";

function Links() {
  return (
    <>
      {data.map(({id, link}) => {
        return (
          <li className="nav-item" key={id}>
            <a className="nav-link text-capitalize" aria-current="page" href={`#${link}`}>{link}</a>
          </li>
        );
      })}
    </>
  );
}

export default Links;
