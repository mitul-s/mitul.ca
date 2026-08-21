import Ferrari from "./ferrari";
import Honk from "./honk";

const Ferraris = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 hidden overflow-hidden xl:block"
  >
    <div className="absolute left-[4%] top-[36%] animate-in slide-in-from-left-full duration-1000">
      <Honk>
        <Ferrari className="w-60 -rotate-2" />
      </Honk>
    </div>
    <div className="absolute right-[4%] top-[58%] animate-in slide-in-from-right-full duration-1000">
      <Honk>
        <Ferrari className="w-60 -scale-x-100 rotate-2" />
      </Honk>
    </div>
  </div>
);

export default Ferraris;
