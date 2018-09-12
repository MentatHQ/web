import React from 'react';
import axios from 'axios';

class Subscribe extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribed: 0
    };
  }

  async subscribe(email='') {
    try {
      if (!email.match(/.@[a-z]{2,}/)) {
        throw new Error('Please enter a valid email.');
      }
      await axios.post('/subscribe', { email });
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
        { this.state.subscribed === 2 ?
          <div className="Thanks">You are already subscribed.</div>:
          this.state.subscribed === 1 ?
            <div className="Thanks">You are now subscribed.</div>:
            <form onSubmit={(e) => {
              e.preventDefault();
              this.subscribe(this.state.email);
            }}>
              <input placeholder="Subscribe with your email" onChange={e => this.setState({ email: e.target.value })} />
              <button type="submit" title="Subscribe">
                <span className="icon-send-plane" />
              </button>
            </form>
        }
      </div>
    );
  }
}

export default Subscribe;
