import Image from "next/image";
import img from "./img.jpg";
import img2 from "./img2.jpg";
import Figure from "../components/figure";

const Images = () => {
  return (
    <div className="relative grid gap-x-2 grid-cols-2 h-full items-center">
      <Figure src={img} alt="" />
      <Figure src={img2} alt="" />
    </div>
  );
};

export default Images;
