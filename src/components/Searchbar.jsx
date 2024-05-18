import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [commune, setCommune] = useState('');
  const [chambre, setChambre] = useState('');
  const [disponible, setDisponible] = useState(false);
  const [types, setTypes] = useState({
    appartement: false,
    villa: false,
    studio: false,
    loft: false,
    terrain: false,
  });

  const handleTypeChange = (e) => {
    const { name, checked } = e.target;
    setTypes({ ...types, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ commune, chambre, disponible, types });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="commune">Commune</label>
            <input
              id="commune"
              type="text"
              value={commune}
              onChange={(e) => setCommune(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Commune"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="chambre">Nombre de Chambres</label>
            <input
              id="chambre"
              type="text"
              value={chambre}
              onChange={(e) => setChambre(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Nombre de Chambres"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Disponibilité</label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={disponible}
              onChange={(e) => setDisponible(e.target.checked)}
              className="form-checkbox text-blue-500"
            />
            <span className="ml-2 text-gray-700">Disponibles uniquement</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Type de Propriété</label>
          <div className="flex flex-wrap">
            {Object.keys(types).map((type) => (
              <label key={type} className="inline-flex items-center mr-4 mb-2">
                <input
                  type="checkbox"
                  name={type}
                  checked={types[type]}
                  onChange={handleTypeChange}
                  className="form-checkbox                   text-blue-500"
                  />
                  <span className="ml-2 text-gray-700 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
            >
              Rechercher
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default SearchBar;
  
