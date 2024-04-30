import { DiGithubBadge } from "react-icons/di";
import { DiChrome } from "react-icons/di";

type ProjectProps = {
  name: string;
  project: 'FrontEnd' | 'BackEnd' | 'FullStack';
  tools: string[];
  webUrl?: string;
  githubUrl: string;
  image: string;
}

function Project({ name, project, tools, webUrl, githubUrl, image } : ProjectProps ) {
  return (
    <div className="rounded-lg shadow-xl bg-primary">
      <div className="border-b border-primary border-opacity-30">
        <img src={image} className="rounded-t-md" alt="calorie-tracker" />
      </div>
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <p className="font-roboto text-lg font-bold uppercase text-primary">{name}</p>
          <div className="flex gap-2">
            { webUrl && 
              <a href={webUrl} target="_blank" className="hover:scale-125 transition-transform">
                <DiChrome color="#A39D90" size='35px' />
              </a>
            }
            <a href={githubUrl} target="_blank" className="hover:scale-125 transition-transform">
              <DiGithubBadge color="#A39D90" size='35px' />
            </a>
          </div>
        </div>

        { tools && 
          <>
            <p className="font-roboto text-sm font-bold uppercase text-primary">{project}</p>
            <div className="flex flex-wrap gap-2">
              { tools!.map(tool => (
                <img src={`https://img.shields.io/badge/${tool}-0?style=flat&logo=${tool}&color=%23000`} alt={`${tool} icon`} />
              )) }
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Project;