import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
   
    {
      id: 1,
      title: 'Task Management App',
      description: ' A simple and intuitive task manager built with React to help users organize their daily tasks efficiently.',
      technologies: ['React', 'typescript'],
      githubUrl: 'https://github.com/Umeshzz2001/Taskmanagement.git',
      liveUrl: 'https://taskmanagementappwithreact.netlify.app/',
      imageUrl: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false,
    },
    {
      id: 2,
      title: 'Conference Management System',
      description: 'A simple web app built with HTML, CSS, and PHP to manage and display conference events, schedules, and registrations.',
      technologies: ['Html', 'JavaScript', 'Css', 'PHP'],
      githubUrl: 'https://github.com/Umeshzz2001/Conference.git',
      imageUrl: 'https://www.wtcmanila.com.ph/wp-content/uploads/2020/03/5-Ways-To-Organize-A-Conference.jpg',
      featured: false,
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      description: 'A simple and responsive personal portfolio website built with React JS to showcase my skills, projects, and education.',
      technologies: ['React', 'JavaScript', 'Tailwind css'],
      githubUrl: 'https://github.com/Umeshzz2001/portfolio.git',
      liveUrl: 'https://social-analytics-demo.herokuapp.com',
      imageUrl: 'https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in full-stack development, 
            from concept to deployment
          </p>
        </div>



        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">All Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300 overflow-hidden hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={`${project.title} preview`}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-gray-400 text-xs px-2 py-1">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="h-3 w-3" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in collaborating?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, 
              and ways to contribute to meaningful software solutions.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;