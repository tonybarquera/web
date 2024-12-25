import Project from "./Project";
import projects from '../../db/projects';

function Projects() {
  return (
    <section className="py-16" id="projects">
      <div className=""> 
        <div className="flex justify-center">
          <p className="font-roboto text-dark uppercase text-2xl font-bold border-b-2 border-slate-700 pb-2 px-10">My Projects</p>
        </div>

        <div className="relative mt-8">
          <div className="absolute inset-y-0 left-0 w-12 md:w-28 lg:w-56 bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-12 md:w-28 lg:w-56 bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
          <div className="grid grid-flow-col gap-5 md:gap-8 overflow-y-scroll px-12 md:px-28 lg:px-56">
            { projects.map(project => (
              <Project 
                key={project.name}
                name={project.name}
                project={project.project}
                tools={project.tools}
                webUrl={project?.webUrl}
                githubUrl={project.githubUrl}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;