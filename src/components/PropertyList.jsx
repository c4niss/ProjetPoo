import image from '../assets/signup.jpg';
import { FaPlus } from "react-icons/fa6";
const PropertyList = ({ filteredProperties }) => {

  if (!filteredProperties) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-wrap justify-center ">
      {filteredProperties.map((property) => (
        <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden m-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
          <img
            className="w-full h-48 object-cover"
            src={image} // Replace with actual image if available
            alt={property.type}
          />
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-900">{property.type}</h2>
            <p className="text-gray-600">{property.description}</p>
            <p className="text-gray-600">{property.commune}, {property.ville}</p>
            <p className="text-gray-600">{property.prix.toLocaleString()} DZD</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-600">{property.taille} m²</span>
              <span className="text-gray-600">{property.typechambre || '-'}</span>
              <span className="text-gray-600">Étage: {property.etage}</span>
            </div>
            <div className='flex justify-between'>
            <span className={`py-2 mt-3 inline-block px-2 text-sm font-semibold rounded ${
              property.etat === 'DISPONIBLE' ? 'bg-green-200 text-green-800' :
              property.etat === 'LOUE' ? 'bg-red-200 text-red-800' :
              'bg-yellow-200 text-yellow-800'
            }`}>
              {property.etat.replace('_', ' ')}
            </span>
            <a href={`/Transaction/${property.id}`}  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ">
            Make Transaction
            </a>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-white rounded-lg shadow-md overflow-hidden m-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex flex-col justify-center text-center">
        <a href='/addproperty' className='flex flex-row justify-center'><FaPlus size='50px'/></a>  
      </div>
    </div>
  );
};
export default PropertyList;