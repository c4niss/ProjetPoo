import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState(null); // State for error message

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nom,
      email,
      password,
      adresse,
      telephone,
      type,
    };

    try {
      const response = await axios.post('http://localhost:8090/api/v1/client', formData);
      alert('Inscription réussie !');
      setNom(''); // Clear form data
      setEmail('');
      setPassword('');
      setAdresse('');
      setTelephone('');
      setType('');
      setError(null); // Clear error message
      // Redirect to home page (assuming '/' is your home page URL)
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Une erreur est survenue. Veuillez réessayer.'); // Generic error message in French
    }
    
  };

  return (
    <div id="signup" className='flex gap-4 flex-col items-center justify-center w-full'>
      <div className='bg-white w-[700px] my-4 rounded-sm shadow-md text-center p-4'>
        <h1 className='text-3xl font-bold'>Sign up</h1>
        <p className='mt-2 text-gray-400'>Entrez vos informations de connexion pour accéder à votre compte</p>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4 mt-10'>
            <div className='flex flex-col text-start gap-4'>
              <h3 className='font-bold text-[19px]'>Nom d'utilisateur</h3>
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder='Nom utilisateur'
                className='px-3 py-4 border-2 border-gray-200 text-[14px] outline-none'
              />
            </div>
            <div className='flex flex-col text-start gap-4'>
              <h3 className='font-bold text-[19px]'>Adresse e-mail</h3>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Adresse e-mail'
                className='px-3 py-4 border-2 border-gray-200 text-[14px] outline-none'
              />
            </div>
            <div className='flex flex-col text-start gap-4'>
              <h3 className='font-bold text-[19px]'>Mot de passe</h3>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Mot de passe'
                className='px-3 py-4 border-2 border-gray-200 text-[14px] outline-none'
              />
            </div>
            <div className='flex flex-col text-start gap-4'>
              <h3 className='font-bold text-[19px]'>Adresse</h3>
              <input
                type="text"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                placeholder='Adresse'
                className='px-3 py-4 border-2 border-gray-200 text-[14px] outline-none'
              />
            </div>
            <div className='flex flex-col text-start gap-4'>
              <h3 className='font-bold text-[19px]'>Téléphone</h3>
              <input
                type="text"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder='Téléphone'
                className='px-3 py-4 border-2 border-gray-200 text-[14px] outline-none'
              />
            </div>
            <div className='flex flex-col text-start gap-4'>
              <h3 className='font-bold text-[19px]'>Type de Client</h3>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className='px-3 py-4 border-2 border-gray-200 text-[14px] outline-none'
              >
                <option value="" disabled>Choisissez le type de client</option>
                <option value="acheteur">Acheteur</option>
                <option value="locataire">Locataire</option>
                <option value="vendeur">Vendeur</option>
                <option value="bailleur">Bailleur</option>
              </select>
            </div>
          </div>
          <div>
            <p className='text-end mt-1'><a href='/login' className='text-blue-500 hover:text-blue-700'>Mot de passe oublié ?</a></p>
          </div>
          <div className='mt-10 flex flex-col gap-3'>
            <p className='text-start'>
              Vous avez déjà un compte? <a href='/login' className='text-blue-500 hover:text-blue-700'>Connexion</a>
            </p>
            <button type='submit' className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-4 px-6'>
              S'inscrire
            </button>
          </div>
          {error && <p className='text-center text-red-500 text-sm mt-4'>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
