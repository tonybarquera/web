function Skills() {
  const skills = ['NodeJS', 'React JS', 'HTML 5', 'CSS3', 'MySQL', 'TailwindCSS', 'Git/Github', 'TypeScript', 'C++', 'JavaScript', 'PHP', 'Java'];

  return (
    <section className="pt-16 px-3" id="skills">
      <div className="flex justify-center">
        <p className="font-roboto text-dark uppercase text-2xl font-bold border-b-2 border-slate-700 pb-2 px-10">My Skills</p>
      </div>
      <div className="max-w-5xl mx-auto md:flex md:justify-between md:items-center">
        <div className="w-4/12 hidden lg:block">
          <ul className="space-y-2">
            { skills.map(skill => (
              <li key={skill} className="font-roboto text-dark text-2xl">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="lg:w-8/12">
          <img src="./skills-lg.png" alt="image skills" className="mx-auto"/>
        </div>
      </div>
    </section>
  )
}

export default Skills;