import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const ImageGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPhotos(data.slice(0, 40));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">

    <Navbar />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {photos.map(photo => (
          <div key={photo.id} className="col">
            <div className="card">
              <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
              <div className="card-body">
                <h5 className="card-title">{photo.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
