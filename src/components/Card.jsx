import React from 'react';

const Card = ({title, description}) => {
  return (
    <div>
      <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
    </div>
  );
}

export default Card;
