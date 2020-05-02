import React from 'react';

import './custom-buttom.styles.scss';

//children es el texto que le mandan dentro de las etiquetas
const CustomButton = ({ children, buttonPurpose, ...otherProps }) => (
  <button className={`${buttonPurpose} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
