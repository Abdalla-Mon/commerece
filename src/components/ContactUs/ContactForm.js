export function ContactForm() {
  return (
    <>
      <div className="row">
        <div className="contact-text col-12 col-md-6">
          <h5>Don't be a stranger!</h5>
          <h2>You tell us. We listen.</h2>
          <p>
            Cras elementum finibus lacus nec lacinia. Quisque non convallis
            nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend
            magna vehicula et. Nam mattis est sed tellus.
          </p>
        </div>
        <FormReduced></FormReduced>
      </div>
    </>
  );
}

function FormReduced() {
  return (
    <>
      <div className="col-12 col-md-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="contact-f-text">
            <span>Name</span>
            <input
              type="text"
              id="contact-f-text"
              required
              placeholder="Name"
              onFocus={(e) => {
                document
                  .querySelectorAll(".contact-us label span")
                  .forEach((s) => {
                    s.classList.remove("act");
                  });
                e.target.parentElement.children[0].classList.add("act");
              }}
            ></input>
          </label>
          <label htmlFor="contact-f-subject">
            <span>Subject</span>
            <input
              type="text"
              id="contact-f-subject"
              placeholder="Subject"
              required
              onFocus={(e) => {
                document
                  .querySelectorAll(".contact-us label span")
                  .forEach((s) => {
                    s.classList.remove("act");
                  });
                e.target.parentElement.children[0].classList.add("act");
              }}
            ></input>
          </label>
          <label htmlFor="contact-f-email">
            <span>Email</span>
            <input
              type="email"
              id="contact-f-email"
              required
              placeholder="Email"
              onFocus={(e) => {
                document
                  .querySelectorAll(".contact-us label span")
                  .forEach((s) => {
                    s.classList.remove("act");
                  });
                e.target.parentElement.children[0].classList.add("act");
              }}
            ></input>
          </label>
          <label htmlFor="contact-f-area">
            <span>Message</span>
            <textarea
              placeholder="Message"
              id="contact-f-area"
              onFocus={(e) => {
                document
                  .querySelectorAll(".contact-us label span")
                  .forEach((s) => {
                    s.classList.remove("act");
                  });
                e.target.parentElement.children[0].classList.add("act");
              }}
            ></textarea>
          </label>
          <input
            type="submit"
            value={"Send Message"}
            className="contact-sub"
          ></input>
        </form>
      </div>
    </>
  );
}
