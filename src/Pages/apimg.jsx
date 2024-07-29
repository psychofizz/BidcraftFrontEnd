import React, { useState } from 'react';

const UploadToImgur = () => {
  const [files, setFiles] = useState({
    imagenFrontal: null,
    imagenDelantera: null,
    imagenActual: null,
  });
  const [imageLinks] = useState({
    imagenFrontal: '',
    imagenDelantera: '',
    imagenActual: '',
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: files[0],
    }));
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const clientId = '66a3c4364f2dc63'; // Reemplaza con tu propio Client ID

    const uploadedLinks = {};

    for (const [key, file] of Object.entries(files)) {
      if (!file) {
        console.error(`No se ha seleccionado una imagen para ${key}`);
        return;
      }

      formData.append('image', file);

      try {
        const response = await fetch('https://api.imgur.com/3/image', {
          method: 'POST',
          headers: {
            Authorization: `Client-ID ${clientId}`,
          },
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          uploadedLinks[key] = `https://i.imgur.com/${data.data.id}.png`;
        } else {
          console.error('Error al subir la imagen a Imgur');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }

      formData.delete('image'); // Limpiar formData para la siguiente imagen
    }

    const newImageLinks = {
      frontPhoto: uploadedLinks.imagenFrontal || '',
      backPhoto: uploadedLinks.imagenDelantera || '',
      actualPhoto: uploadedLinks.imagenActual || '',
    };




    // Imprimir el JSON en la consola
    console.log('JSON de enlaces de imágenes:', newImageLinks);
    const tryPost = async (argumento) => {
      console.log(JSON.stringify(newImageLinks) + "aca suponemos que ya estan las iamgenes")


    }
    tryPost()

  };

  return (
    <div>
      <form onSubmit={handleImageUpload}>
        <input
          type="file"
          accept="image/*"
          name="imagenFrontal"
          onChange={handleFileChange}
        />
        <input
          type="file"
          accept="image/*"
          name="imagenDelantera"
          onChange={handleFileChange}
        />
        <input
          type="file"
          accept="image/*"
          name="imagenActual"
          onChange={handleFileChange}
        />
        <button type="submit">Subir Imágenes</button>
      </form>

      {Object.values(imageLinks).some((link) => link) && (
        <div>
          <h3>Imágenes Subidas</h3>
          {imageLinks.imagenFrontal && (
            <div>
              <h4>Imagen Frontal</h4>
              <img src={imageLinks.imagenFrontal} alt="Imagen Frontal" />
              <a href={imageLinks.imagenFrontal}>{imageLinks.imagenFrontal}</a>
            </div>
          )}
          {imageLinks.imagenDelantera && (
            <div>
              <h4>Imagen Delantera</h4>
              <img src={imageLinks.imagenDelantera} alt="Imagen Delantera" />
              <a href={imageLinks.imagenDelantera}>
                {imageLinks.imagenDelantera}
              </a>
            </div>
          )}
          {imageLinks.imagenActual && (
            <div>
              <h4>Imagen Actual</h4>
              <img src={imageLinks.imagenActual} alt="Imagen Actual" />
              <a href={imageLinks.imagenActual}>{imageLinks.imagenActual}</a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadToImgur;
