const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
  });



const loginBtn = document.getElementById('login');



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







loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

qrBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



  
