// Updated Portfolio Component with per-project custom text support

import React, { useContext, useState } from 'react';
import img1 from '../assets/imges/project-1.jpg';
import img2 from '../assets/imges/project-2.jpg';
import img3 from '../assets/imges/project-3.jpg';
import img4 from '../assets/imges/project-4.jpg';
import img5 from "../assets/imges/project-5.jpg"
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

// Each project now has its OWN title + description
const allProjects = [
  {
    id: 1,
    client: 'Google',
    image: img1,
    category: 'FYP',
    title: 'Bone Fracture Detection System (FYP)',
    description: 'AI-powered system detecting bone fractures using ML and X-ray image analysis.'
  },
  {
    id: 2,
    client: 'Bone Fracture Detection System',
    image: img1,
    category: 'ML Project',
    title: 'Bone Fracture Detection System',
    description: 'AI-powered system detecting bone fractures using ML and X-ray image analysis.'
  },
  {
    id: 4,
    client: 'Startup Hub',
    image: img2,
    category: 'Frontend',
    title: ' Delta code Web-App ',
    description: 'uilt a React.js portfolio site to showcase services, projects, and contact info with a modern, responsive, and user-friendly '
  },
  {
    id: 5,
    client: 'SalesForce',
    image: img5,
    category: 'Backend',
    title: 'Health Metrics Pro',
    description: 'High-performance backend automating business workflows using python .'
  },
  {
    id: 7,
    client: 'Lyft',
    image: img3,
    category: 'Frontend',
    title: 'E Commerce ',
    description: 'WearHub is an AI-powered fashion e-commerce platform that helps users discover outfits tailored to their preferences.'
  },
  {
    id: 8,
    client: 'Song Recommendation System',
    image: img4,
    category: 'ML Project',
    title: 'ML Song Recommender',
    description: 'Backend service recommending songs using deep learning models.'
  }
];

const categories = ['All', 'FYP', 'ML Project', 'Frontend', 'Backend'];

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const { mode } = useContext(ThemeContext);

  const filtered = active === 'All' ? allProjects : allProjects.filter(p => p.category === active);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <section className="py-10 px-4 max-w-6xl mx-auto w-full">

        <div className="text-center">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="mt-2 max-w-xl mx-auto">
            Welcome to my online portfolio! I'm a passionate and detail-oriented developer...
          </p>

          <button
            onClick={() => handleNavigate('/contact')}
            className="mt-4 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Hire Me
          </button>
        </div>

        {/* Category buttons */}
        <div className="flex justify-center gap-4 mt-10 border-b border-gray-200 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-1 border-b-2 ${
                active === cat
                  ? 'border-green-500 text-green-600'
                  : `border-transparent ${mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {filtered.map(({ id, client, image, title, description }) => (
            <div
              key={id}
              className={`flex flex-col sm:flex-row shadow rounded overflow-hidden ${
                mode === 'dark' ? 'bg-gray-900' : 'bg-gray-200'
              }`}
            >
              <img
                src={image}
                alt="project"
                className="w-full sm:w-1/3 h-48 sm:h-auto object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>

                <p className="text-sm mt-1">{description}</p>

                <p className="text-sm mt-2">
                  Client: <span className="text-gray-600">{client}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}