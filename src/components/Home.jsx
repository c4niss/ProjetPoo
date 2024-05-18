import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar';
import Footer from './Footer';
import PropertyList from './PropertyList';
import BeforeFooter from './Beforefooter';
import Imagee from '../assets/team1.jpg'

function Home() {
  const [properties, setProperties] = useState([]);
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingAgents, setLoadingAgents] = useState(true);
  const [error, setError] = useState(null);
  const [agentError, setAgentError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/v1/bien');
        setProperties(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchAgents = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/v1/agent');
        setAgents(response.data);
      } catch (error) {
        setAgentError(error);
      } finally {
        setLoadingAgents(false);
      }
    };

    fetchProperties();
    fetchAgents();
  }, []);

  if (loading || loadingAgents) {
    return <div>Loading...</div>;
  }

  if (error || agentError) {
    return <div>Error: {error ? error.message : agentError.message}</div>;
  }

  return (
    <div>
      <SearchBar />
      <div className='flex flex-col gap-4 mt-20'>
        <h1 className='text-4xl font-bold text-center'>Display Latest & Featured Properties</h1>
        <p className='text-center text-gray-400'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
      </div>
      <PropertyList filteredProperties={properties} />
      <div className='sm:px-16 px-6 sm:py-16 py-10 flex flex-col justify-center text-center gap-8 overflow-hidden'>
        <h1 className='text-[40px] text-blue-950'>Our Agents</h1>
        <p className='text-[18px]'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
        <div className="flex flex-wrap justify-center">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden m-4">
              <img
                className="w-full h-48 object-cover"
                src={Imagee} // Ensure your agent data includes an image field
                alt="Agent"
              />
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900">{agent.nom}</h2>
                <p className="text-gray-600">{agent.adresse}</p>
                <p className="text-gray-600">{agent.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default Home;
