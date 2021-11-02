import React from "react";
import PropTypes from "prop-types";

const Button = ({onClick})  => (
    
    <button
        type="button"
        onClick ={onClick}
    >
        Load more
    </button>
)

export default Button;