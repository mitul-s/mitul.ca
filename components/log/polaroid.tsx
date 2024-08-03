import { cn } from "@/lib/utils";
import styles from "./log.module.css";

const Polaroid = ({ children }) => {
  return (
    <div
      className={cn("bg-gray-1 w-fit p-4 absolute", styles.polaroid)}
      style={{
        transform: `rotate(-${Math.floor(Math.random() * 100)}deg)`,
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
      }}
    >
      {children}
    </div>
  );
};

export default Polaroid;
