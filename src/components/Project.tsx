import { DiGithubBadge } from "react-icons/di";
import { DiChrome } from "react-icons/di";

type ProjectProps = {
  name: string;
  frontIcons?: string[];
  backIcons?: string[];
  webUrl: string;
  githubUrl: string;
  image: string;
}

function Project({ name, frontIcons, backIcons, webUrl, githubUrl, image } : ProjectProps ) {
  const existsFront = frontIcons;
  const existsBack = backIcons;

  return (
    <div className="rounded-lg shadow-xl bg-primary">
      <div>
        <img src={image} className="rounded-t-md" alt="calorie-tracker" />
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-roboto text-lg font-bold uppercase text-blue">{name}</p>
          <div className="flex gap-2">
            <a href={webUrl} target="_blank" className="hover:scale-125 transition-transform"><DiChrome color="white" size='35px' /></a>
            <a href={githubUrl} target="_blank" className="hover:scale-125 transition-transform"><DiGithubBadge color="white" size='35px' /></a>
          </div>
        </div>

        { existsFront && 
          <>
            <p className="font-roboto text-sm font-bold uppercase text-blue">FrontEnd</p>
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