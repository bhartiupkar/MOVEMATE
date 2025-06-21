import { motion } from 'framer-motion';

const VibratingTiltingDiv = ({children}) => {
  return (
    <motion.div
      whileHover={{
        x: [0, -3, 4, -5, 1, 0],
        rotate: [0, -6, 2, -3, 2, 0],
        transition: {
          duration: 2,
          repeat: 3,
          repeatType:'reverse',
          ease: 'easeInOut',
        },
      }}
      style={{ willChange: 'transform' }}

      className="p-6 bg-gray-900/80 text-center mx-2 rounded-xl shadow-md "
    >
        {children}
      
    </motion.div>
  );
};

export default VibratingTiltingDiv;
