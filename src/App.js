import React, { Component } from "react";
import HomeTabs from "./elements/HomeTabs";
import Subscribe from "./elements/Subscribe";
import Subscribe2 from "./elements/Subscribe2";
import Team from "./elements/Team";
import scrollTo from "./utils/scrollTo";

const navigate = (e, section) => {
  e.preventDefault();
  scrollTo(document.getElementById(section).offsetTop);
};

class App extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Menu">
          <div className="LeftArea">
            <a href="/">
              <img src="/img/logo-white.png" className="Logo" alt="Mentat" />
            </a>
          </div>
          <div className="RightArea">
            <a href="/" onClick={e => navigate(e, "welcome")}>
              welcome
            </a>
            <a href="/" onClick={e => navigate(e, "about")}>
              about
            </a>
            <a href="/" onClick={e => navigate(e, "team")}>
              team
            </a>
            <a
              href="https://drive.google.com/open?id=1Kiie4Jl8t70BwWeTi0n6laPr4FseTRs9"
              target="_blank"
              className="Button"
            >
              litepaper
            </a>
            <a
              href="https://t.me/mentatorg"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="SocialLink"
            >
              <span className="icon-paper-plane" />
            </a>
            <a
              href="https://www.facebook.com/Mentat-2057495954491282/"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="SocialLink"
            >
              <span className="icon-facebook" />
            </a>
            <a
              href="https://twitter.com/mentatorg"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="SocialLink"
            >
              <span className="icon-twitter" />
            </a>
            <a
              href="https://medium.com/mentatorg"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="SocialLink"
            >
              <span className="icon-medium" />
            </a>
          </div>
        </div>
        <div className="MobileMenu">
          <a href="/">
            <img src="/img/logo-white.png" className="Logo" alt="Mentat" />
          </a>
          <a
            href="https://drive.google.com/open?id=1Kiie4Jl8t70BwWeTi0n6laPr4FseTRs9"
            target="_blank"
            className="Button"
          >
            litepaper
          </a>
          <div className="SocialLinks">
            <a
              href="https://t.me/mentatorg"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="SocialLink"
            >
              <span className="icon-paper-plane" />
            </a>
            <a
              href="https://www.facebook.com/Mentat-2057495954491282/"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="SocialLink"
            >
              <span className="icon-facebook" />
            </a>
            <a
              href="https://twitter.com/mentatorg"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="SocialLink"
            >
              <span className="icon-twitter" />
            </a>
            <a
              href="https://medium.com/mentatorg"
              target="_blank"
              rel="nofollow noreferrer noopener"
              className="SocialLink"
            >
              <span className="icon-medium" />
            </a>
          </div>
        </div>
        <div className="Hero">
          <div className="CenterContent" id="welcome">
            <h1>The next evolution of work.</h1>
            <h2>
              Mentat enables anyone, from anywhere in the world, to offer their
              skills and knowledge in exchange for instant payment.
            </h2>
            <Subscribe />
          </div>
          <div className="Video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/m7U7tRVn8ag?rel=0"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </div>
          <a href="/" onClick={e => navigate(e, "about")} className="Scroll">
            <p>Scroll</p>
            <div className="bounce icon-down-open-big" />
          </a>
        </div>
        <section className="Featured">
          <h3>Featured on</h3>
          <a
            href="https://www.influencive.com/mentats-co-founder-mitchell-sapoff-on-building-the-next-evolution-of-work/"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <img src="/img/press/Influencive.png" />
          </a>
          <a
            href="https://www.coinannouncer.com/mentats-private-token-sale-to-begin-this-month/"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <img src="/img/press/CoinAnnouncer.png" />
          </a>
          <a
            href="http://altcoinmarketer.com/mentats-private-token-sale-to-begin-this-month/"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <img src="/img/press/AltcoinMarketer.png" />
          </a>
          <a
            href="https://icohotel.com/news/Cryptocurrencies/decentralizing-the-workplace-with-mentat"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <img src="/img/press/ico-hotel.svg" />
          </a>
          <a
            href="https://coinfinancer.com/mentats-private-token-sale-to-begin-this-month/"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <img src="/img/press/CoinFinancer.png" />
          </a>
          <a
            href="http://coinnewspress.com/mentats-private-token-sale-to-begin-this-month/"
            rel="noreferrer nofollow noopener"
            target="_blank"
          >
            <img src="/img/press/CoinNewspress.png" />
          </a>
        </section>
        <section className="About">
          <div className="Intro CenterContent">
            <h2 id="about">What is Mentat?</h2>
            <p>
              Mentat is a blockchain-powered marketplace where applications can
              source intelligence from an on-demand, distributed workforce of
              human agents. The platform’s query-response smart contracts enable
              human intelligence tasks to plug in to computer processes
              asynchronously, eliminating the time and cost inefficiencies
              typically associated with human workers.
            </p>
            <p>
              Mentat’s pricing model ensures that human agents are always
              available to meet the next request. The platform’s distributed
              ledger tracks agents’ unique skills, allowing applications to
              query only the most qualified agents, and a system of peer review
              maintains quality while moving more work towards the most
              successful agents. Crypto-economic stakes for all parties ensure
              fast, high-quality work and fair rates.
            </p>
            <p>
              Mentat enables anyone, from anywhere in the world, to offer their
              skills and knowledge in exchange for instant payment. By allowing
              applications to delegate only value-adding human intelligence
              tasks, the value of agents’ time is increased, while also
              improving the business efficiency of participating applications.
              Mentat combines a machine-focused process with human-focused
              pricing, allowing fair earnings and business efficiency to
              coexist.
            </p>
          </div>
          <div className="Description">
            <HomeTabs />
          </div>
        </section>
        <section className="Team" id="team">
          <h2 id="about">Our Team</h2>
          <Team />
        </section>
        <section className="MailingList">
          <h3>Join our mailing list for updates</h3>
          <Subscribe2 />
        </section>
        <section className="Footer">
          <div className="CenterContent">
            <div className="SocialLinks">
              <a
                href="https://t.me/mentatorg"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <span className="icon-paper-plane" />
              </a>
              <a
                href="https://www.facebook.com/mentatorg"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <span className="icon-facebook" />
              </a>
              <a
                href="https://twitter.com/mentatorg"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <span className="icon-twitter" />
              </a>
              <a
                href="https://medium.com/mentatorg"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                <span className="icon-medium" />
              </a>
            </div>
            <p>© 2018 MENTAT</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
