import { getNomadListData } from "@/lib/misc";
import Globe from "./globe";

const Data = async () => {
  const d = await getNomadListData();
  console.log(d);
  return (
    <div>
      <h1>Travel</h1>
      <p>Travel data</p>
      <Globe data={d} />
    </div>
  );
};

export default Data;
