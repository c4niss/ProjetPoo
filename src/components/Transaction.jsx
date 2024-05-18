import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Transaction = () => {
  const [id_client, setId_client] = useState('');
  const [id_bien, setId_bien] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [clientDetails, setClientDetails] = useState(null);
  const [bienDetails, setBienDetails] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch client details
  const fetchClientDetails = async () => {
    try {
      const responseClient = await axios.get(`http://localhost:8090/api/v1/client/${id_client}`);
      setClientDetails(responseClient.data);
    } catch (error) {
      console.error('Error fetching client details:', error);
      setError('Error fetching client details');
    }
  };

  // Function to fetch bien details
  const fetchBienDetails = async () => {
    try {
      const responseBien = await axios.get(`http://localhost:8090/api/v1/bien/${id_bien}`);
      setBienDetails(responseBien.data);
    } catch (error) {
      console.error('Error fetching bien details:', error);
      setError('Error fetching bien details');
    }
  };

  useEffect(() => {
    fetchClientDetails();
    fetchBienDetails();
  }, [id_client, id_bien]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!id_client || !id_bien || !amount || !type) {
      setError('Please fill in all fields.');
      return;
    }

    const transactionData = {
      amount,
      id_client: clientDetails,
      id_bien: bienDetails,
      type
    };

    try {
      const response = await axios.post('http://localhost:8090/api/v1/transaction', transactionData);
      if (response.status === 200) {
        alert('Transaction successful!');
        setId_client('');
        setId_bien('');
        setAmount('');
        setType('');
        setError(null);
      }
    } catch (error) {
      console.error('Error creating transaction:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container mx-auto max-w-md p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Make a Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="clientId" className="block text-sm font-semibold mb-1">Client ID:</label>
          <input
            type="text"
            id="id_client"
            value={id_client}
            onChange={(e) => setId_client(e.target.value)}
            className="input-field border border-gray-300 p-2 rounded"
            placeholder="Enter client ID"
          />
          {clientDetails && (
            <p>Client Name: {clientDetails.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="clientId" className="block text-sm font-semibold mb-1">Bien ID:</label>
          <input
            type="text"
            id="id_bien"
            value={id_bien}
            onChange={(e) => setId_bien(e.target.value)}
            className="input-field border border-gray-300 p-2 rounded"
            placeholder="Enter bien ID"
          />
          {bienDetails && (
            <p>Bien Name: {bienDetails.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-semibold mb-1">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field border border-gray-300 p-2 rounded"
            placeholder="Enter amount"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-semibold mb-1">Type:</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="select-field border border-gray-300 p-2 rounded"
          >
            <option value="">Select type</option>
            <option value="VENTE">Vente</option>
            <option value="LOCATION">Location</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
          Submit
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
};

export default Transaction;
