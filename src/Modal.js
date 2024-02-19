import { Component } from "react";
import { createPortal } from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.popUpContainer = document.createElement("div");
    document.body.appendChild(this.popUpContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popUpContainer);
  }

  render() {
    return createPortal(
      <div className="modal" onClick={this.props.close}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nibh
            diam. Maecenas euismod lorem in nisl pharetra, a tincidunt massa
            gravida. Cras et purus vitae quam euismod iaculis sed ac risus.
            Suspendisse ultrices et erat quis pharetra.
          </p>
          <button>Fermer la modal</button>
        </div>
      </div>,
      this.popUpContainer
    );
  }
}

export default Modal;
