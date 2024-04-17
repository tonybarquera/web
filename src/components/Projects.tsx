import Project from "./Project";

function Projects() {
  return (
    <section className="my-8 mx-10" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center">
          <p className="font-roboto text-primary uppercase text-2xl font-bold">Projects</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Project 
            name="Calorie Tracker" 
            frontIcons={["React", "TypeScript", "TailwindCSS"]} 
            webUrl="https://willowy-yeot-8522be.netlify.app/"  
            githubUrl="https://github.com/tonybarquera/calorie-tracker"
          />

          <Project 
            name="GuitarLA" 
            backIcons={["Node.js", "MySql","Docker"]}
            webUrl="https://willowy-yeot-8522be.netlify.app/"  
            githubUrl="https://github.com/tonybarquera/calorie-tracker"
          />

          <Project 
            name="Control Gastos" 
            frontIcons={["React", "TypeScript", "TailwindCSS"]} 
            backIcons={["Node.js", "MySql","Docker"]}
            webUrl="https://willowy-yeot-8522be.netlify.app/"  
            githubUrl="https://github.com/tonybarquera/calorie-tracker"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects;