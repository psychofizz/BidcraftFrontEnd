import React, { useState } from 'react';

const UploadToImgur = () => {
  const [imageUrl, setImageUrl] = useState(null); // Estado para almacenar la URL de la imagen
  const img = document.getElementById("img")
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    var u;
    formData.append('image', file);

    try {
      const response = await fetch('https://api.imgur.com/3/image' , {
      
        method: 'POST',
        headers: {
          Authorization: 'Client-ID 66a3c4364f2dc63', // Reemplaza con tu propio Client ID
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Enlace de la imagen en Imgur:', data);
        // Actualiza el estado con la URL de la imagen
           u = `https://i.imgur.com/${data.data.id}.png`
           setImageUrl(u)
      
      } else {
        console.error('Error al subir la imagen a Imgur');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageUrl && <img src={imageUrl} alt="Uploaded" /> } {/* Muestra la imagen subida */}
      {imageUrl &&     <a href={imageUrl}>{imageUrl}</a> } {/* Muestra la imagen subida */}
  
     
    </div>
  );
};

export default UploadToImgur;

