import Project from "./Project";

function Projects() {
  return (
    <section className="my-8 mx-10" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center">
          <p className="font-roboto text-dark uppercase text-2xl font-bold border-b-2 border-slate-700 pb-2 px-10">Projects</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <Project 
            name="Pacientes de Veterinaria"
            project="FrontEnd"
            tools={["React", "TypeScript", "TailwindCSS"]}
            webUrl="https://tonybarquera.github.io/pacientes-veterinaria/"
            githubUrl="https://github.com/tonybarquera/pacientes-veterinaria"
            image="./pacientes-veterinaria.webp"
          />

          <Project 
            name="Control Gastos" 
            project="FrontEnd"
            tools={["React", "TypeScript", "TailwindCSS"]}
            webUrl="https://tonybarquera.github.io/control-gastos/"  
            githubUrl="https://github.com/tonybarquera/control-gastos"
            image="./control-gastos.webp"
          />

          <Project 
            name="Calorie Tracker" 
            project="FrontEnd"
            tools={["React", "TypeScript", "TailwindCSS"]} 
            webUrl="https://willowy-yeot-8522be.netlify.app/"  
            githubUrl="https://github.com/tonybarquera/calorie-tracker"
            image="./calorie-tracker.webp"
          />

          <Project 
            name="GuitarLA" 
            project="FrontEnd"
            tools={["React", "JavaScript", "TailwindCSS"]}
            webUrl="https://spiffy-unicorn-5967da.netlify.app/"  
            githubUrl="https://github.com/tonybarquera/guitarla"
            image="./guitar-la.webp"
          />

          <Project 
            name="Plazti Travel" 
            project="FrontEnd"
            tools={["HTML5", "CSS3", "JavaScript"]}
            webUrl="https://tonybarquera.github.io/Platzi-Travel/"  
            githubUrl="https://github.com/tonybarquera/Platzi-Travel"
            image="./platzi-travel.webp"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects;