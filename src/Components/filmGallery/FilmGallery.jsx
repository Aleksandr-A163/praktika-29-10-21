import React from "react";
import PropTypes from "prop-types";

const FilmGallery = ({ films }) => (
    <ul>
        {films.map(({ id, img, title, text }) => {
            
            return (
                <li key={id}>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {text}
                    </p>
                    <img src={`https://image.tmdb.org/t/p/w400/${img}`} alt={title} />

                </li>
            )
        })}
    </ul>

);

FilmGallery.propTypes = {
    films: PropTypes.array.isRequired
}

export default FilmGallery;