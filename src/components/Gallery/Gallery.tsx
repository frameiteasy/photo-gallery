import React from "react";
import { useParams } from "react-router-dom";

import "./gallery.scss";

const Gallery: React.FC = () => {
  const { albumName } = useParams();
  return <div>Gallery {albumName} </div>;
};

export default Gallery;
