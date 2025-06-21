import { LuLuggage } from "react-icons/lu";
import { FaLuggageCart } from "react-icons/fa";

const RollingCircles = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 overflow-hidden z-10">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="w-6 h-6 bg-blue-400 rounded-full absolute bottom-2"
          style={{
            left: `${-100 * i}px`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${6 + i}s`,
            animationTimingFunction: 'linear',
            animationName: 'flow',
            animationIterationCount: 'infinite'
          }}
        ><LuLuggage/></div>
      ))}
    </div>
  );
};

export default RollingCircles;
