import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FaJs, FaReact, FaPython, FaPhp, FaNpm, FaHtml5, FaCss3Alt, FaTools, FaEye,
} from 'react-icons/fa';
import { SiDjango, SiSass, SiLess } from 'react-icons/si';

import img1 from '../assets/imges/project-1.jpg';
import img4 from '../assets/imges/project-4.jpg';
import img3 from '../assets/imges/project-3.jpg';
import img2 from '../assets/imges/project-2.jpg';
import img7 from '../assets/imges/usman3.png';

import { ThemeContext } from '../context/ThemeProvider';

// Skills Array
const skills = [
  {
    title: "HTML & CSS",
    description: "Responsive layouts using Flexbox, Grid & modern CSS.",
    icon: <div className="flex gap-1"><FaHtml5 className="text-orange-600" /><FaCss3Alt className="text-blue-600" /></div>,
  },
  {
    title: "JavaScript",
    description: "Strong grasp of ES6+, DOM manipulation & async programming.",
    icon: <FaJs className="text-yellow-500" />,
  },
  {
    title: "React.js",
    description: "Proficient in hooks, state management, and scalable UIs.",
    icon: <FaReact className="text-blue-500" />,
  },
  {
    title: "Python & Flask",
    description: "Built scalable APIs and robust backends with Django.",
    icon: <div className="flex gap-1"><FaPython className="text-blue-600" /><SiDjango className="text-green-800" /></div>,
  },
   {
    title: "NumPy & Pandas",
    description: "Data manipulation, analysis & cleaning large datasets.",
    icon: <div className="flex gap-1"><FaNpm className="text-red-600" /><FaTools className="text-gray-600" /></div>,
  },
  {
    title: "Scikit-learn",
    description: "Skilled in ML modeling, preprocessing, and evaluation.",
    icon: <FaPhp className="text-indigo-500" />,
  },
 
  
  {
    title: "ML / DL",
    description: "Experience in training deep learning models & real-world ML apps.",
    icon: <div className="flex gap-1"><SiSass className="text-pink-500" /><SiLess className="text-blue-400" /></div>,
  },
];

// Projects Array
const projects = [
  { title: "Bone Fracture Detection and Advisory System", description: "Developed a CNN-based model to detect bone fractures from medical X-ray images with high accuracy and provide advisory support for diagnosis.", client: "Google", image: img1 },
  { title: "Song Recommendation System", description: "Built a recommendation model using collaborative filtering and content-based techniques to suggest personalized songs based on user preferences.", client: "Dropbox", image: img4 },
  { title: " E-commerce App (React Js)", description: " Designed and developed a responsive web application for online shopping with product listings, cart management, and secure checkout features.", client: "Uber", image: img3 },
  { title: "Delta code Web-App", description: "Built a React.js portfolio site to showcase services, projects, and contact info with a modern, responsive, and user-friendly design.", client: "Amazon", image: img2 },
];

// Blog Posts
const blogPosts = [
  {
    title: "Top JS Frameworks ",
    excerpt: "Explore leading JavaScript frameworks and their use cases.",
    date: "2 days ago",
    image: "https://cdn-icons-png.flaticon.com/512/919/919852.png",
  },
  {
    title: "Remote Working Tips",
    excerpt: "Master remote productivity with proven strategies.",
    date: "a week ago",
    image: "https://images.unsplash.com/photo-1587614203976-365c74645e83?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Full Stack Guide",
    excerpt: "Your roadmap to becoming a proficient full-stack developer.",
    date: "3 weeks ago",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

const AboutMe = () => {
  const { mode } = useContext(ThemeContext);
  const navigate = useNavigate();
  const handleNavigate = (path) => navigate(path);

  const isDark = mode === 'dark';
  const textColor = isDark ? 'text-gray-200' : 'text-gray-700';
  const subTextColor = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <main className="w-full p-6  animate-fadeInLeft">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-green-600">Muhammad Usman</h1>
              <h2 className={`text-xl mt-2 mb-4 font-semibold ${subTextColor}`}>junior  Software Engineer</h2>
              <p className={`max-w-xl leading-relaxed mx-auto lg:mx-0 ${textColor}`}>
                I'm a full-stack developer specializing in frontend/backend systems & machine learning. Check out my
                <Link to="/blog" className="text-green-500 underline mx-1">blog</Link>,
                <Link to="/portfolio" className="text-green-500 underline mx-1">portfolio</Link>, and
                <Link to="/resume" className="text-green-500 underline mx-1">resume</Link>.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button onClick={() => handleNavigate('/portfolio')} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md">
                  ➕ View Portfolio
                </button>
                <button onClick={() => handleNavigate('/resume')} className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-md">
                  📝 View Resume
                </button>
              </div> 
            </div>

            {/* Image */}
            <div className="flex-1">
             <img
  src={img7}
  alt="usman"
  className="rounded-xl not-only-of-type:w-full max-w-sm mx-auto h-108 object-cover hover:scale-105 transition duration-300 inline-block"
/>

            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4 hover:shadow-md transition">What I Do</h2>
          <p className={`mb-6 ${subTextColor}`}>
            With over 1 years of experience in web development and AI, here are some core skills I specialize in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-center gap-3 mb-2 text-lg">
                  <span>{skill.icon}</span>
                  <strong>{skill.title}</strong>
                </div>
                <p className={`text-sm ${subTextColor}`}>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        {/* Projects */}
<section className="mb-20">
  <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-600 pl-6">Featured Projects</h2>
  <div className="grid md:grid-cols-2 gap-8">
    {projects.map((project, i) => (
      <div
        key={i}
        className={`flex flex-col sm:flex-row rounded-lg shadow-md overflow-hidden 
          ${isDark ? 'bg-gray-900 text-gray-200 border border-gray-700' : 'bg-white text-gray-800 border border-gray-200'}`}
      >
        <div className="relative w-full sm:w-1/2 h-64">
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-fit" />
        </div>
        <div className="p-6 flex-1">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm mb-2">{project.description}</p>
          <p className="text-sm"><strong>Client:</strong> {project.client}</p>
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Blog */}
        <section>
          <h2 className="text-3xl font-bold mb-8 border-l-4 border-green-600 pl-6">Latest Blog Posts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div key={i} className={`rounded-lg shadow-md overflow-hidden ${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                <div className="h-48 bg-gray-100 flex items-center justify-center">
                  <img src={post.image} alt={post.title} className="h-48 w-full object-contain" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 underline">{post.title}</h3>
                  <p className={`text-sm mb-3 ${textColor}`}>{post.excerpt}</p>
                  <a href="#" className="text-green-500 hover:underline text-sm font-medium">Read more →</a>
                  <p className={`text-xs mt-2 ${subTextColor}`}>Published {post.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button onClick={() => handleNavigate('/blog')} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md flex items-center gap-2">
              <FaEye /> View Blog
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;
