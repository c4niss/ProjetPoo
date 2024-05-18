import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // State for error message

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email
    };

    try {
      const response = await axios.post('http://localhost:8090/api/v1/check-email', formData);
      
        if (response.status === 200) {
        alert('Connexion réussie !'); // Login success message
        setEmail(''); // Clear form data
        setPassword('');
        setError(null); // Clear error message
        // Redirect to home page (assuming '/' is your home page URL)
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response && error.response.status === 401) {
        // Assuming 401 Unauthorized is the status code returned for invalid credentials
        setError('Email ou mot de passe incorrect.');
      } else {
        setError('Une erreur est survenue. Veuillez réessayer.'); // Generic error message in French
      }
    }
  };

  return (
    <div id="login" className='flex gap-20 flex-col items-center justify-center w-full h-screen'>
      <div className='bg-white w-[700px] h-[600px] rounded-sm shadow-md text-center p-4'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <p className='mt-4 text-gray-400'>Entrez les détails de connexion pour accéder</p>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-12 mt-10'>
            <div className='flex flex-col text-start gap-4'>
              <h3 className='font-bold text-[19px]'>Adresse e-mail</h3>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Adresse e-mail'
                className='px-3 py-4 border-2 text-[14px] outline-none'
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
          </div>
          <div>
            <p className='text-end mt-6'><a href='/forgot-password' className='text-blue-500 hover:text-blue-700'>Mot de passe oublié ?</a></p>
          </div>
          <div className='mt-16 flex flex-col gap-3'>
            <p className='text-start'>Vous n'avez pas de compte ? <a href='/signup' className='text-blue-500 hover:text-blue-700'>S'inscrire</a></p>
            <button type='submit' className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-4 px-6'>Connexion</button>
          </div>
          {error && <p className='text-center text-red-500 text-sm mt-4'>{error}</p>}
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Login;
