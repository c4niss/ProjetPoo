import React, { useEffect, useState } from 'react';
import SearchBar from './Searchbar';
import axios from 'axios';
import Image from '../assets/about.jpg';
import Image1 from '../assets/about1.jpg';
import Footer from './Footer';
import { MdOutlineRealEstateAgent, MdOutlineVilla } from "react-icons/md";
import BeforeFooter from './Beforefooter.jsx';
import Imagee from '../assets/team1.jpg'
function About() {
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        const fetchAgents = async () => {
            try {
                const response = await axios.get('http://localhost:8090/api/v1/agent'); // Adjust the endpoint as needed
                console.log(response.data); // Log the response data
                setAgents(response.data);
            } catch (error) {
                console.error('Error fetching agents:', error); // Log any errors
            }
        };

        fetchAgents();
    }, []);

    return (
        <div>
            <SearchBar />
            <img src={Image} alt="signup" className='bg-cover bg-no-repeat flex justify-center text-center h-[300px] w-full absolute' />
            <div className='flex flex-col justify-center relative text-white ml-20 mb-32'>
                <h1 className='text-5xl mt-20 mb-3 font-serif'>About Us</h1>
                <p className='text-xl'>Get started by choosing from one of our pre-built page templates to showcase your properties</p>
                <div className='sm:px-16 px-6 sm:py-16 py-6 flex flex-col mt-28 justify-center align-middle sm:flex-col lg:flex-row gap-20 md:flex-col'>
                    <div className='flex flex-col gap-4 justify-center'>
                        <h1 className='font-bold text-[30px] text-blue-950 mb-4'>Just browse away. It’s all here.</h1>
                        <p className='mb-4 text-black'>
                            Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames.
                        </p>
                        <p className='text-black'>
                            Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Et netus malesuada fames.
                        </p>
                        <button className='py-3 px-2 bg-blue-600 rounded w-40 mt-2 hover:bg-blue-950 transition-colors' onClick={() => {
                            window.location.href = '/property';
                        }}>View All property</button>
                    </div>
                    <img src={Image1} alt="About" />
                </div>
            </div>
            <div id='help' className='relative'>
                <div className='flex lg:flex-row sm:px-10 sm:py-20 justify-center align-middle text-white'>
                    <div className='bg-blue-400 shadow-gray-500 shadow-md'>
                        <div className='flex flex-col gap-4 px-10 py-10 justify-center align-middle'>
                            <MdOutlineRealEstateAgent color='white' size='50px' />
                            <h1 className='text-[20px] font-bold'>Sell home or office</h1>
                            <p>
                                Get started by choosing from one of our pre-built page templates to showcase your properties
                            </p>
                        </div>
                    </div>
                    <div className='bg-blue-400 shadow-gray-500 shadow-md'>
                        <div className='flex flex-col gap-4 px-10 py-10 justify-center align-middle'>
                            <MdOutlineVilla color='white' size='50px' />
                            <h1 className='text-[20px] font-bold'>Rent home or office</h1>
                            <p>
                                Get started by choosing from one of our pre-built page templates to showcase your properties
                            </p>
                        </div>
                    </div>
                    <div className='bg-blue-400 shadow-gray-500 shadow-md'>
                        <div className='flex flex-col gap-4 px-10 py-10 justify-center align-middle'>
                            <MdOutlineRealEstateAgent color='white' size='50px' />
                            <h1 className='text-[20px] font-bold'>Find next</h1>
                            <p>
                                Get started by choosing from one of our pre-built page templates to showcase your properties
                            </p>
                        </div>
                    </div>
                </div>
            </div>
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

export default About;
