import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="my-16 mx-10" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center">
          <p className="font-roboto text-dark uppercase text-2xl font-bold border-b-2 border-slate-700 pb-2 px-10">Contact Me</p>
        </div>
        <div className="flex flex-col items-center gap-8 md:flex-row md:w-1/2 mx-auto mt-8 md:flex md:justify-between">
          <a href="https://www.linkedin.com/in/tony-barquera-40a978227/" target="_blank">
            <FaLinkedin color="#1E293B" size='100px' className="hover:scale-110 transition-all"/>
          </a>
          
          <a href="https://github.com/tonybarquera" target="_blank">
            <FaGithub color="#1E293B" size='100px' className="hover:scale-110 transition-all"/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;