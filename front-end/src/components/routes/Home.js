import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <div className="home-header__heading">Hello User</div>
          <div className="home-header__updates">Recent Items</div>
        </div>
        <div className="home-overview">
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div classNAme="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div className="overviewcard__info">Card</div>
          </div>
          <div className="overviewcard">
            <div className="overviewcard__icon">Overview</div>
            <div class="overviewcard__info">Card</div>
          </div>
        </div>
        <div className="home-cards">
          <div className="card">
            Card
          </div>
          <div className="card">
            Card
          </div>
          <div className="card">
            Card
          </div>
        </div>
      </div>
    );
  }
}

export default Home