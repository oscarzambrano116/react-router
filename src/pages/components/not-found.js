import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import './generic-page.css';

class NotFound extends PureComponent {
  handleBackClick = () => {
    const {
      history: {
        goBack,
        // go(1), forward
        // go(-1), it is like goBack
        // go(-2), back 2 routes
      }
    } = this.props;
    goBack();
  }

  handleForwardClick = () => {
    const {
      history: {
        goForward,
      }
    } = this.props;
    goForward();
  }

  handleRandomClick = () => {
    const {
      history: {
        push,
      }
    } = this.props;
    const random = Math.round(Math.random() * (10 - 1) + 1);
    push(`/videos?id=${random}`, { id: random });
  }

  render() {
    return (
      <div className="Page NotFound">
        <h1>404</h1>
        <h3 className="SadFace">:(</h3>
        <h2>No hemos encontrado la página que buscabas</h2>
        <button
          className="Button"
          onClick={this.handleForwardClick}
        >
          Ir a la ruta siguiente 👉
        </button>
        <button
          className="Button"
          onClick={this.handleBackClick}
        >
          Ir a la ruta anterior 👈🏻
        </button>
        <button
          className="Button"
          onClick={this.handleRandomClick}
        >
          Video random 🍀
        </button>
      </div>
    )
  }
}

export default withRouter(NotFound);
