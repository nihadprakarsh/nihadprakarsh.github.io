import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Life is too short to write documentation', 'Just kidding, go document your code', 'Where’s your will to be weird?'],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: false
    };

    const typed = new Typed(typedRef.current, options);

    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return <div ref={typedRef} className='typewriter'
  />;
};

export default TypingEffect;
