import { Component } from "react";
import Modal from "./Modal";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    });
  };

  handleHide = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    // Condition pour l'affichage de la modal
    // const modal = this.state.showModal ? (<Modal />) : null;
    const modal = this.state.showModal && <Modal close={this.handleHide} />;

    return (
      <div className="App">
        <button onClick={this.handleShow}>Afficher la Modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
