
import { LuLuggage } from "react-icons/lu";
import { FaLuggageCart } from "react-icons/fa";
const FlowingCircles = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 overflow-hidden z-10">
      {[...Array(20)].map((_, i) => (
        <div

          key={i}
          className="w-1 h-8 text-5xl rounded-full absolute bottom-4"
          style={{
            left: `${-120 * i}px`,
            animationDelay: `${i * 1.5}s`,
            animationName: 'flow',
            animationDuration: `${8 + i * 0.5}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        ><LuLuggage/></div>
      ))}
    </div>
  );
};

export default FlowingCircles;
