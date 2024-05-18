import React from 'react'
import { useState } from 'react';
import axios from 'axios';
function Addproperty() {
    const [commune, setCommune] = useState('');
    const [chambre, setChambre] = useState('');
    const [ville, setVille] = useState('');
    const [prix, setPrix] = useState('');
    const [taille, setTaille] = useState('');
    const [description, setDescription] = useState('');
    const [typechambre, setTypechambre] = useState('');
    const [etage, setEtage] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Construct the property object from the form data
        const newProperty = {
          commune,
          chambre,
          ville,
          prix,
          taille,
          description,
          typechambre,
          type,
          etage,
          etat: 'DISPONIBLE',
        };
      
        try {
          // Make a POST request to your backend API endpoint
          const response = await axios.post('http://localhost:8090/api/v1/bien', newProperty);

          console.log('Property added successfully:', response.data);
          setCommune('');
          setChambre('');
          setVille('');
          setPrix('');
          setTaille('');
          setDescription('');
          setTypechambre('');
          setEtage('');
          setType('');
        } catch (error) {
          // Handle error
          console.error('Error adding property:', error);
        }
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
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="commune">Ville</label>
            <input
              id="ville"
              type="text"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Ville"
            />
          </div>
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="commune">Prix</label>
            <input
              id="prix"
              type="text"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Prix"
            />
          </div>
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="commune">Description</label>
            <input
              id="Description"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Description"
            />
          </div>
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="commune">Type chambre<span className=' text-[10px]'> (F1,F2,F3,F4,F5,F6)</span></label>
            <input
              id="TypeChambre"
              type="text"
              value={typechambre}
              onChange={(e) => setTypechambre(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Type chambre"
            />
          </div>
          <div className="flex-1 mb-4 md:mb-0 md:mr-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="commune">taille</label>
            <input
              id="taille"
              type="text"
              value={taille}
              onChange={(e) => setTaille(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Taille"
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
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="chambre">Etage</label>
            <input
              id="etage"
              type="text"
              value={etage}
              onChange={(e) => setEtage(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Etage"
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="chambre">Type <span className='text-[12px]'>(APPARTEMENT,LOFT,STUDIO,VILLA,TERRAIN)</span></label>
            <input
              id="type"
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="type"
            />
          </div>
        </div>

        <div className="mb-4">
        </div>
        
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-700"
              onClick={() => handleSubmit}
            >
              Add Property
            </button>
          </div>
        </form>
      </div>
  )
}

export default Addproperty