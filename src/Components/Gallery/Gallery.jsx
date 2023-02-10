import React from "react";

const Gallery = ({ position, img, bg, title, text }) => {
    return (
        <section className={`gallery ${position}`}>
            <div className="gallery__image">
                <img src={bg} alt="bg" />
            </div>
            <div className="gallery__desc">
                <img src={img} alt="shoe" className="shoe" />
                <h2 className="gallery__desc__title">{title}</h2>
                <p className="gallery__desc__text">{text}</p>
                <a href="./shop" className="gallery__desc__button">
                    See more
                </a>
            </div>
        </section>
    );
};

export default Gallery;
