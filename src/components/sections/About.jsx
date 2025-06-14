import React from 'react';
import { GraduationCap, Code, Target, Award, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'MySQL', 'MongoDB'] },
    { category: 'Tools & Others', items: ['Git', 'Figma', 'Linux'] },
  ];



  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate IT student dedicated to creating meaningful digital experiences
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education & Background */}
          <article className="animate-slide-in-left bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <section className="space-y-8">
              {/* University Education */}
              <div>
                <h4 className="text-xl font-semibold text-primary-300 mb-3">University Education</h4>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-1">NDT in Information Technology</h5>
                  <p className="text-gray-300">Institute of Technology University Of Moratuwa</p>
                  <p className="text-gray-400 text-sm">Currently in Third Semester</p>
                </div>
              </div>

              {/* School Education */}
              <div>
                <h4 className="text-xl font-semibold text-primary-300 mb-3">School Education</h4>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-1">Mahinda Rajapaksha College, Homagama</h5>
                  <p className="text-gray-300">Completed Advanced Level Examination in Physical science Stream</p>
                  <p className="text-gray-400 text-sm">Graduated 2020</p>
                </div>
              </div>
            </section>

            {/* Relevant Coursework */}
            <section className="mt-8">
              <h5 className="font-medium text-white mb-2">Relevant Coursework:</h5>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'Database Systems', 'Software Engineering'].map(course => (
                  <span
                    key={course}
                    className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </section>
          </article>

          {/* Career Aspirations */}
          <article className="animate-slide-in-right bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-primary-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Career Goals</h3>
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                I'm seeking internship opportunities in full-stack development where I can
                contribute to meaningful projects while continuing to grow my technical skills.
              </p>

              <p>
                My goal is to work with innovative teams that value clean code, user experience,
                and continuous learning. I'm particularly interested in:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Building scalable web applications</li>
                <li>Working with modern JavaScript frameworks</li>
                <li>Contributing to open source projects</li>
                <li>Learning about cloud technologies and DevOps</li>
              </ul>
            </div>
          </article>
        </div>



        {/* Technical Skills */}
        <section className="mb-16 animate-slide-up">
          <div className="flex items-center justify-center mb-8">
            <Code className="h-8 w-8 text-primary-400 mr-3" />
            <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={skillGroup.category}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-xl font-semibold text-primary-300 mb-4 text-center">
                  {skillGroup.category}
                </h4>
                <div className="space-y-3">
                  {skillGroup.items.map(skill => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
