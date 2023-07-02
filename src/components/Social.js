import { data } from "./data-social.js";

function Social() {
return (
    <>
      { data.map(({id, url, icon}) => {
        return (
          <li key={id}><a className="fs-1" href={url}>{icon}</a></li>
        );
      })}
    </>
  );
}

export default Social;
