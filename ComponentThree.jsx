import React from 'react';

function ComponentThree({ name, Role, image, movie }) {
  return (
    <div className="component-box">
      <img src={image} alt={name} className="character-img" />
      <h3 className="character-name">{name}</h3>
      <p className="character-role"><strong>Role:</strong> {Role}</p>
      <p className="movie-title">{movie}</p>
    </div>
  );
}

export default ComponentThree;
