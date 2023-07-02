import Social from "./Social";
import LinksFooter from "./LinksFooter";

function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container-md">
        <div className="sp-width">
          <h2 className="display-6 sp-color">Let's make something amazing together</h2>
          <p className="lead text-muted">Start by <a className="sp-contact" href="mailto:abdullahalnoime@gmail.com">Saying Hi</a></p>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div>
              <h2 className="display-6 fs-2 text-dark">Information</h2>
              <address className="lead mb-1 text-muted fs-6">Damascus, Syria</address>
              <ul className="list-unstyled d-flex align-items-center gap-3">
                <Social />
              </ul>
            </div>
          </div>
          <div className="col-md-5">
              <div>
                <h2 className="display-6 fs-2 text
  -dark">Useful Links</h2>
              <ul className="list-unstyled d-flex
  flex-column gap-2">
                <LinksFooter/ >
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
