import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

function AboutMe() {
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        'Hola, Soy Tony Barquera',
        'Ingeniero en Sistemas Computacionales',
        'Desarrollador FullStack'
      ],
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='bg-hero bg-cover bg-no-repeat bg-center border-primary border-t'>
      <section className="py-8 mx-10" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-8 md:mt-8 items-center justify-center py-24 md:py-32">
            <div className="mx-auto">
              {/* <img src="./tony_photo.png" alt="tony photo"/> */}
              <img src="./profile.jpg" alt="tony photo" className='rounded-full w-96 border-secondary border-8' />
            </div>
            <div className='h-16'>
              <span className='typed-text' ref={element} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMe;