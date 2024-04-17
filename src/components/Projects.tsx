import { DiGithubBadge } from "react-icons/di";
import { DiChrome } from "react-icons/di";

function Projects() {
  return (
    <section className="my-8 mx-10" id="projects">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center">
          <p className="font-roboto text-primary uppercase text-2xl font-bold">Projects</p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="rounded-lg shadow-xl bg-slate-500">
            <div>
              <img src="./src/assets/calorie-tracker.webp" className="rounded-t-md" alt="calorie-tracker" />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-roboto text-lg font-bold uppercase">Calorie Tracker</p>
                <div className="flex gap-2">
                  <a href="https://willowy-yeot-8522be.netlify.app/" target="_blank"><DiChrome size='35px' /></a>
                  <a href="https://github.com/tonybarquera/calorie-tracker" target="_blank"><DiGithubBadge size='35px' /></a>
                </div>
              </div>
              <p className="font-roboto text-sm font-bold text-black uppercase">FrontEnd</p>
              <div className="flex flex-wrap gap-2">
                <img src="https://img.shields.io/badge/ReactJS-0?style=flat&logo=React&color=%23000" alt="React" />
                <img src="https://img.shields.io/badge/TypeScript-0?style=flat&logo=TypeScript&color=%23000" alt="TypeScript" />
                <img src="https://img.shields.io/badge/TailwindCSS-0?style=flat&logo=TailwindCSS&color=%23000" alt="Tailwind" />
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-xl bg-slate-500">
            <div>
              <img src="./src/assets/calorie-tracker.webp" className="rounded-t-md" alt="calorie-tracker" />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-roboto text-lg font-bold uppercase">Calorie Tracker</p>
                <div className="flex gap-2">
                  <a href="https://willowy-yeot-8522be.netlify.app/" target="_blank"><DiChrome size='35px' /></a>
                  <a href="https://github.com/tonybarquera/calorie-tracker" target="_blank"><DiGithubBadge size='35px' /></a>
                </div>
              </div>
              <p className="font-roboto text-sm font-bold text-black uppercase">FrontEnd</p>
              <div className="flex flex-wrap gap-2">
                <img src="https://img.shields.io/badge/ReactJS-0?style=flat&logo=React&color=%23000" alt="React" />
                <img src="https://img.shields.io/badge/TypeScript-0?style=flat&logo=TypeScript&color=%23000" alt="TypeScript" />
                <img src="https://img.shields.io/badge/TailwindCSS-0?style=flat&logo=TailwindCSS&color=%23000" alt="Tailwind" />
              </div>
            </div>
          </div>
        
          <div className="rounded-lg shadow-xl bg-slate-500">
            <div>
              <img src="./src/assets/calorie-tracker.webp" className="rounded-t-md" alt="calorie-tracker" />
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-roboto text-lg font-bold uppercase">Calorie Tracker</p>
                <div className="flex gap-2">
                  <a href="https://willowy-yeot-8522be.netlify.app/" target="_blank"><DiChrome size='35px' /></a>
                  <a href="https://github.com/tonybarquera/calorie-tracker" target="_blank"><DiGithubBadge size='35px' /></a>
                </div>
              </div>
              <p className="font-roboto text-sm font-bold text-black uppercase">FrontEnd</p>
              <div className="flex flex-wrap gap-2">
                <img src="https://img.shields.io/badge/ReactJS-0?style=flat&logo=React&color=%23000" alt="React" />
                <img src="https://img.shields.io/badge/TypeScript-0?style=flat&logo=TypeScript&color=%23000" alt="TypeScript" />
                <img src="https://img.shields.io/badge/TailwindCSS-0?style=flat&logo=TailwindCSS&color=%23000" alt="Tailwind" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;