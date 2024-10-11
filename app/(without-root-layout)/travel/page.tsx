import { Suspense } from "react";
import Data from "./data";

export default function Page() {
  return (
    <div className="text-gray-12">
      Travel page
      <Suspense>
        <Data />
      </Suspense>
    </div>
  );
}
