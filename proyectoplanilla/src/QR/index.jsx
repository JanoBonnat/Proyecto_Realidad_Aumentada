import QRCode from "qrcode-generator";
import React, { useRef, useEffect } from "react";

import React, { useRef, useEffect } from "react";

const QRCodeComponent = ({ text }) => {
  const qrCodeRef = useRef(null);

  useEffect(() => {
    // Crea el código QR
    const qrCode = new QRCode(qrCodeRef.current, {
      text: text,
      width: 128,
      height: 128
    });

    // Limpia el código QR cuando el componente se desmonta
    return () => {
      qrCode.clear();
    };
  }, [text]);

  return <div ref={qrCodeRef}></div>;
};

export default QRCodeComponent;


import React from "react";
import QRCodeComponent from "./QRCodeComponent";

const App = () => {
  const textoParaCodificar = "https://www.ejemplo.com";

  return (
    <div>
      <h1>Código QR generado con React</h1>
      <QRCodeComponent text={textoParaCodificar} />
    </div>
  );
};

export default App;
