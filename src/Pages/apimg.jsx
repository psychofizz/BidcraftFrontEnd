import React, { useState } from 'react';

const UploadToImgur = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [file, setFile] = useState(null); // Estado para almacenar el archivo seleccionado

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    if (!file) {
      console.error('No se ha seleccionado ninguna imagen');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://api.imgur.com/3/image', {
        method: 'POST',
        headers: {
          Authorization: 'Client-ID 66a3c4364f2dc63', // Reemplaza con tu propio Client ID
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        const u = `https://i.imgur.com/${data.data.id}.png`;
        setImageUrl(u);
      } else {
        console.error('Error al subir la imagen a Imgur');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleImageUpload}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Subir Imagen</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
      {imageUrl && <a href={imageUrl}>{imageUrl}</a>}
    </div>
  );
};

export default UploadToImgur;
