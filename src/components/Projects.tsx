import Project from "./Project";
import projects from '../../db/projects';

function Projects() {
  return (
    <section className="my-16 mx-10" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center">
          <p className="font-roboto text-dark uppercase text-2xl font-bold border-b-2 border-slate-700 pb-2 px-10">Projects</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
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
        </div>
      </div>
    </section>
  )
}

export default Projects;