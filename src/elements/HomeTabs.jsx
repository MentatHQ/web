import React from 'react';

class HomeTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: null
    };
  }

  setActiveTab(activeTab, e) {
    e.preventDefault();
    if (this.state.activeTab !== activeTab) {
      this.setState({ activeTab });
    } else {
      this.setState({ activeTab: null });
    }
  }

  renderTabContent(tab) {
    switch (tab) {
      case 'APPLICATIONS':
        return (
          <div className="TabItem">
            <img className="TabImage" src="/img/Applications.svg" alt="Applications" />
            <div className="TabText">
              <h2>Applications</h2>
              <p>Applications integrated with the Mentat platform will format requests for the platform and perform business logic based on the response received from the agent. App developers will make critical decisions such as how to format data for display in the agent client UI, what skills each request should require, and what form of response to accept from agents. We expect these solutions to vary substantially based on the target use for each app.</p>
              <p>In exchange for completed requests, applications will submit payment to the platform. This payment will be routed directly to the user, with no additional fee added, ensuring the lowest pricing possible.</p>
            </div>
          </div>
        );
      case 'PLATFORM':
        return (
          <div className="TabItem">
            <div className="TabText">
              <h2>Platform</h2>
              <p>The Mentat platform is the sequence of smart contracts connecting applications with agents. Processes performed by the platform include tracking the market rate for new tasks based on current supply and demand, matching agents with tasks based on skills required by the requesting application, transferring payments, and initiating peer-reviews.</p>
              <p>The platform is intended to allow both agents and applications to benefit from the more efficient allocation of human work within the ecosystem. Incentives will be carefully structured to ensure that agents provide fast, high-quality work, and that market rates for new work remain fair.</p>
            </div>
            <img className="TabImage" src="/img/Platform.svg" alt="Platform" />
          </div>
        );
      case 'AGENTS':
        return (
          <div className="TabItem">
            <div className="TabText">
              <h2>Agents</h2>
              <p>Agents are individuals who contribute their intelligence to the Mentat ecosystem in exchange for payment. This is done through the use of an agent client application, which will be associated with each agents’ token wallet. Through this wallet address, the Mentat platform will be able to securely track the attributes of a given agent, such as their token balance, associated skills, and completed tasks.</p>
              <p>While an agent is online, the platform will route them tasks based on the aforementioned attributes and Mentat’s matching algorithm. These tasks will be completed via the agent client UI and returned to the requesting application, in exchange for payment to the agent from the platform. </p>
            </div>
            <img className="TabImage" src="/img/Agents.svg" alt="Agents" />
          </div>
        );
      case null:
      default:
        return (
          <div className="TabIndex">
            <img className="TabImage Primary" src="/img/about.png" alt="Mentat Flow" />
          </div>
        );
    }
  }

  render() {
    return (
      <div className="HomeTabs">
        <div className="TabMenu">
          <a
            href="#"
            onClick={ e => this.setActiveTab('APPLICATIONS', e) }
            className={ this.state.activeTab === 'APPLICATIONS' ? 'active' : 'inactive' }
          >
            APPLICATIONS
          </a>
          <a
            href="#"
            onClick={ e => this.setActiveTab('PLATFORM', e) }
            className={ this.state.activeTab === 'PLATFORM' ? 'active' : 'inactive' }
          >
            PLATFORM
          </a>
          <a
            href="#"
            onClick={ e => this.setActiveTab('AGENTS', e) }
            className={ this.state.activeTab === 'AGENTS' ? 'active' : 'inactive' }
          >
            AGENTS
          </a>
        </div>
        <div className="TabContent">
          { this.renderTabContent(this.state.activeTab) }
        </div>
      </div>
    );
  }
}

export default HomeTabs;
