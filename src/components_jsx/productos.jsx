import React from 'react';
import image1 from '../assets/Imagen/ZAPATO1.jpg'; // Asegúrate de que las rutas sean correctas
import image2 from '../assets/Imagen/ZAPATO2.jpg';
import image3 from '../assets/Imagen/ZAPATO3.jpg';
import image4 from '../assets/Imagen/ZAPATO4.jpg';
import '../components_css/productos.css'; // Archivo CSS específico para este componente

const Productos = () => {
  return (
    <div className="mosaico">
      <img src={image1} alt="imagen 1" />
      <img src={image2} alt="imagen 2" />
      <img src={image3} alt="imagen 3" />
      <img src={image4} alt="imagen 4" />
    </div>
  );
};

export default Productos;
