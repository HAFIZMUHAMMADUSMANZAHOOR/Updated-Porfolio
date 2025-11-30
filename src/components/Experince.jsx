import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';

export default function Experience() {
  const { mode } = useContext(ThemeContext);

  return (
    <div className={`${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className="text-3xl font-bold tracking-wide text-center mt-7 mb-7 text-green-600 animate-fadeInLeft">
        PROFESSIONAL EXPERIENCE
      </h1>

      <div className="w-24 h-1 bg-blue-500 mx-auto mb-7 rounded-full animate-fadeInLeft"></div>

      <h2 className={`text-2xl font-bold tracking-wide text-center mb-10 animate-fadeInLeft ${mode === 'dark' ? 'text-gray-300' : ''}`}> 
        With over 1 years of experience in web development and AI
      </h2>

      <div className="space-y-10 p-6">
        {/* Experience 1 */}
        <div className={`border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white/40 backdrop-blur-md text-gray-700'} animate-slideInLeft`}> 
          <h2 className="text-xl font-semibold flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
            <span className="text-blue-500">💻</span> Devaura Tech - Web Developer
          </h2>
          <p className={`text-sm ${mode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>June 2025 - Present</p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Developed and deployed responsive web applications by integrating dynamic front-end interfaces with robust back-end architectures.</li>
            <li>Implemented API-driven solutions and modular components using modern frameworks.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className={`border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white/40 backdrop-blur-md text-gray-700'} animate-slideInLeft`}> 
          <h2 className="text-xl font-semibold flex items-center gap-2 hover:text-green-600 transition-colors duration-300">
            <span className="text-green-500">🐍</span> Innovative Sun - Python Backend Intern
          </h2>
          <p className={`text-sm ${mode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>July 2024 - Dec 2024</p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Gained hands-on experience in writing, testing, and debugging Python code.</li>
            <li>Developed small-scale projects to enhance problem-solving and logical thinking.</li>
            <li>Applied Python for data handling, scripting, and automation.</li>
          </ul>
        </div>

        {/* Experience 3 */}
        <div className={`border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white/40 backdrop-blur-md text-gray-700'} animate-slideInLeft`}> 
          <h2 className="text-xl font-semibold flex items-center gap-2 hover:text-purple-600 transition-colors duration-300">
            <span className="text-purple-500">🌐</span> Codelab Tech - Web Developer Intern
          </h2>
          <p className={`text-sm ${mode === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}>June 2023 - Oct 2023</p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Learned and applied HTML, CSS, JavaScript, React, and responsive design principles.</li>
            <li>Worked on frontend development projects focusing on UI/UX improvements.</li>
            <li>Gained hands-on experience in website layout, styling, React components, and interactive features.</li>
          </ul>
        </div>
      </div>

      {/* Animations CSS */}
      <style jsx>{`
        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease forwards;
        }

        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}