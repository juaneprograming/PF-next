import { TypeAnimation } from 'react-type-animation';

const AnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Hola,',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mi Nombre es Juan Ojeda',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
 export default AnimationText