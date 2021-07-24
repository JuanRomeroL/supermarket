import React from "react";
import image from "./rrr.jpg"; // with import

interface Props {
  className?: string;
}

class Error extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <p className='error'>
          <b>Problema de conexion!</b>
        </p>
        <p>1. Intenta revisar tus cables de red, modem y router.</p>
        <p>2. Llama a soporte tecnico.</p>
        <img src={image} alt='...' />
      </div>
    );
  }
}

export default Error;
