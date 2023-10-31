<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
<div id="qrcode"></div>
<script>
    // Obtén el elemento contenedor
    var qrcodeContainer = document.getElementById("qrcode");
    
    // Contenido que deseas codificar en el código QR
    var textoParaCodificar = "https://www.ejemplo.com";
    
    // Crea el código QR
    var qrcode = new QRCode(qrcodeContainer, {
        text: textoParaCodificar,
        width: 128,
        height: 128
    });
</script>