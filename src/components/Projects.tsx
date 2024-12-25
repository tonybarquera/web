import Project from "./Project";
import projects from '../../db/projects';

function Projects() {
  return (
    <section className="my-16 mx-10" id="projects">
      {/* max-w-5xl mx-auto */}
      <div className=""> 
        <div className="flex justify-center">
          <p className="font-roboto text-dark uppercase text-2xl font-bold border-b-2 border-slate-700 pb-2 px-10">My Projects</p>
        </div>

        {/* <div className="grid grid-flow-col gap-10 overflow-y-scroll mt-8">
          { projects.map(project => (
            <Project 
              name={project.name}
              project={project.project}
              tools={project.tools}
              webUrl={project?.webUrl}
              githubUrl={project.githubUrl}
              image={project.image}
            />
          ))}
        </div> */}

        <div className="relative mt-8">
          <div className="absolute inset-y-0 left-0 w-4 md:w-56 bg-gradient-to-r from-secondary to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-4 md:w-56 bg-gradient-to-l from-secondary to-transparent pointer-events-none"></div>
          <div className="grid grid-flow-col gap-4 md:gap-10 overflow-y-scroll px-4 md:px-56">
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