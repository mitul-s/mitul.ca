import Taxi from "./taxi";

const DrivingCar = ({ reverse = false }: { reverse?: boolean }) => (
  <div
    aria-hidden
    className="pointer-events-none absolute bottom-full left-0 w-24 translate-y-[22%]"
  >
    <div
      className={`motion-reduce:animate-none ${
        reverse ? "animate-drive-across-reverse" : "animate-drive-across"
      }`}
    >
      <Taxi className="w-full" />
    </div>
  </div>
);

export default DrivingCar;
