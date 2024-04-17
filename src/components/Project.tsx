import { DiGithubBadge } from "react-icons/di";
import { DiChrome } from "react-icons/di";

type ProjectProps = {
  name: string;
  frontIcons?: string[];
  backIcons?: string[];
  webUrl: string;
  githubUrl: string;
}

function Project({ name, frontIcons, backIcons, webUrl, githubUrl } : ProjectProps ) {
  const existsFront = frontIcons;
  const existsBack = backIcons;

  return (
    <div className="rounded-lg shadow-xl bg-slate-500">
      <div>
        <img src="./calorie-tracker.webp" className="rounded-t-md" alt="calorie-tracker" />
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-roboto text-lg font-bold uppercase">{name}</p>
          <div className="flex gap-2">
            <a href={webUrl} target="_blank"><DiChrome size='35px' /></a>
            <a href={githubUrl} target="_blank"><DiGithubBadge size='35px' /></a>
          </div>
        </div>

        { existsFront && 
          <>
            <p className="font-roboto text-sm font-bold text-black uppercase">FrontEnd</p>
            <div className="flex flex-wrap gap-2">
              { frontIcons!.map(icon => (
                <img src={`https://img.shields.io/badge/${icon}-0?style=flat&logo=${icon}&color=%23000`} alt="React" />
              )) }
            </div>
          </>
        }

        { existsBack && 
          <>
            <p className="font-roboto text-sm font-bold text-black uppercase">BackEnd</p>
            <div className="flex flex-wrap gap-2">
              { backIcons!.map(icon => (
                <img src={`https://img.shields.io/badge/${icon}-0?style=flat&logo=${icon}&color=%23000`} alt="React" />
              )) }
            </div>
          </>
        }
        
      </div>
    </div>
  )
}

export default Project;