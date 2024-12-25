import { DiGithubBadge } from "react-icons/di";
import { DiChrome } from "react-icons/di";

import type { Project } from '../../types';

function Project({ name, project, tools, webUrl, githubUrl, image } : Project ) {
  return (
    <div className="rounded-lg shadow-xl bg-primary w-72 md:w-96">
      <div className="border-b-1 border-primary border-opacity-30 h-56 md:h-64">
        <img src={image} className="rounded-t-md h-56 md:h-64 w-full" alt="calorie-tracker" />
      </div>
      <div className="p-4 space-y-4 h-48 md:h-56 border-t border-primary">
        <div className="flex items-center justify-between">
          <p className="font-roboto text-base md:text-lg font-bold uppercase text-primary">{name}</p>
          <div className="flex gap-1 md:gap-2">
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