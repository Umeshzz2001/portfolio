import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';


import profileImage from '/assets/image1.jpg';

const Home = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Hero Section */}
      <div className="flex-1 flex items-center justify-center px-4 pt-20 pb-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 p-1 animate-floating">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                <img
                  src={profileImage} 
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Sandeepa Hiripitiya
            </h1>

            
            <div className="text-xl md:text-2xl text-primary-400 font-medium h-8">
              <Typewriter
                options={{
                  strings: ['UI/UX Designer', 'Web Developer'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Welcome to my portfolio!
              Explore my projects and get to know my work.
              Let's connect and create something great together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() =>
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              <a
                href="https://github.com/Umeshzz2001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sandeepa-hiripitiya-82bba6305/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:umeshsandeepa1@gmail.com"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center pb-8 animate-bounce-subtle">
        <button
          onClick={scrollToNext}
          className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
          aria-label="Scroll to learn more"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>

      
      <div className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Welcome to My Digital Space
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm an IT student with a passion for UI/UX design and web development, 
            always eager to learn new technologies and solve complex problems. 
            This portfolio showcases my journey in software development and the projects 
            that have shaped my skills.
          </p>
          <div className="mt-8">
            <button
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-block bg-transparent border border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
