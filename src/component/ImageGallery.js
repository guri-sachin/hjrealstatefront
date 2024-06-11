import React, { useState } from 'react';


const ImageGallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="image-gallery">
            <div className="active-image">
                <img src={activeImage} alt="Active" />
            </div>
            <div className="thumbnail-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index}`}
                        className={`thumbnail ${image === activeImage ? 'active' : ''}`}
                        onClick={() => setActiveImage(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
