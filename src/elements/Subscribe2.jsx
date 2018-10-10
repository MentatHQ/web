import React from "react";

class Subscribe2 extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribed: 0
    };
  }

  render() {
    function overlay() {
      var el = document.getElementById("myModal");
      el.style.visibility =
        el.style.visibility == "visible" ? "hidden" : "visible";
    }

    return (
      <div className="Subscribe">
        <button onClick={overlay}>Get Project Updates</button>
        <div id="myModal">
          <button id="closeButton" onClick={overlay}>
            Close
          </button>
          <iframe
            src="https://mentat.us18.list-manage.com/subscribe?u=39a9a73f63305a63b0633f092&id=e5bd622ff3"
            allowfullscreen
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
}

export default Subscribe2;
