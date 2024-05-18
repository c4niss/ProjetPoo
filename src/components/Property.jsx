import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar';
import Image from '../assets/property.jpg';
import Footer from './Footer';
import PropertyList from './PropertyList';
import BeforeFooter from './Beforefooter';

function Property() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/v1/bien');
        setProperties(response.data);
        setFilteredProperties(response.data); // Initialize filtered properties
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handleSearch = (criteria) => {
    const { commune, chambre, disponible, types } = criteria;

    const filtered = properties.filter((property) => {
      const matchesCommune = commune ? property.commune.toLowerCase().includes(commune.toLowerCase()) : true;
      const matchesChambre = chambre ? property.typechambre?.toLowerCase().includes(chambre.toLowerCase()) : true;
      const matchesDisponible = disponible ? property.etat === 'DISPONIBLE' : true;
      const matchesType = Object.keys(types).some((type) => types[type] && property.type.toLowerCase() === type);

      return matchesCommune && matchesChambre && matchesDisponible && (matchesType || Object.values(types).every((v) => !v));
    });

    setFilteredProperties(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <img 
        src={Image} 
        alt="signup" 
        className='bg-cover bg-no-repeat flex justify-center text-center h-[300px] w-full absolute' 
      />
      <div className='flex flex-col justify-center relative text-white ml-20 mb-48'>
        <h1 className='text-5xl mt-20 mb-3 font-serif'>Available Property</h1>
        <p className='text-xl'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
      </div>
      <PropertyList filteredProperties={filteredProperties} /> {/* Change 'properties' to 'filteredProperties' */}
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default Property;
