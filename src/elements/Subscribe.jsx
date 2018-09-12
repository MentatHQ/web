import React from "react";
import axios from "axios";

class Subscribe extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribed: 0
    };
  }

  async subscribe(email = "") {
    try {
      if (!email.match(/.@[a-z]{2,}/)) {
        throw new Error("Please enter a valid email.");
      }
      await axios.post("/subscribe", { email });
      this.setState({ subscribed: 1 });
    } catch (e) {
      if (e.message.match(/409/gi)) {
        this.setState({ subscribed: 2 });
      } else {
        alert(e.message);
      }
    }
  }

  render() {
    return (
      <div className="Subscribe">
        <div id="mc_embed_signup">
          <form
            action="https://mentat.us18.list-manage.com/subscribe/post?u=39a9a73f63305a63b0633f092&amp;id=e5bd622ff3"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <input
                type="email"
                name="EMAIL"
                class="email"
                id="mce-EMAIL"
                placeholder="Enter your email address..."
                required
              />
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Subscribe;
