const box = document.getElementById('box');

document.addEventListener('mousemove', (e) => {
    // Obtener la posición del mouse en relación con la caja
    const rect = box.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calcular la distancia desde el centro de la caja
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);

    // Mostrar u ocultar la caja en función de la distancia
    if (distance < 100) {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
});
