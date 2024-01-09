import React from 'react';

const ImagenesC = ({ url, alt, width }) => {
  return (
    <>
    <img src={url} alt={alt} width={width} />
    </>
  );
};

export default ImagenesC;