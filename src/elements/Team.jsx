import React from "react";
import PropTypes from "prop-types";

const teamMembers = [
  {
    name: "Mitchell Sapoff",
    img: "mitch",
    title: "Co-Founder, Sales & Marketing",
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/mitchell-sapoff/"
  },
  {
    name: "Samuel Corso",
    img: "sam",
    title: "Co-Founder, Product & Engineering",
    twitter: "",
    linkedIn: "https://www.linkedin.com/in/samc621/"
  }
  // {
  //   name: "Ben Coleman",
  //   img: "ben",
  //   title: "Co-Founder, Tokenomics & Finance",
  //   twitter: "",
  //   linkedIn: "https://www.linkedin.com/in/ben-coleman-15055336/"
  // }
];

class Team extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTeamMember: null
    };
  }

  render() {
    return (
      <div>
        <h2 id="about">Our Team</h2>
        <div className="Team">
          {teamMembers.map(person => (
            <div className="Person" key={person.name}>
              <div className="Profile">
                <img src={`/img/team/${person.img}@2x.png`} alt={person.name} />
              </div>
              <h3>{person.name}</h3>
              <h4>{person.title}</h4>
              {person.linkedIn && person.linkedIn.length > 0 && (
                <a
                  className="SocialLink"
                  target="_blank"
                  rel="noopener noreferer nofollow"
                  href={person.linkedIn}
                >
                  <img src="/img/linkedin.svg" alt="LinkedIn" />
                </a>
              )}
              {person.twitter && person.twitter.length > 0 && (
                <a
                  className="SocialLink"
                  target="_blank"
                  rel="noopener noreferer nofollow"
                  href={person.twitter}
                >
                  <img src="/img/Twitter.svg" alt="Twitter" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Team.propTypes = {
  type: PropTypes.string
};

Team.defaultProps = {
  type: "info"
};

export default Team;
