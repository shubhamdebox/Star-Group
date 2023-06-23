import Image from "next/image";
import square2 from "../../public/big sqaures.png";

export default function Center() {
  return (
    <>
      <div className="absolute right-32 top-60 opacity-50 max-h-[60vh] overflow-hidden">
        <Image src={square2} className="" alt={"svg "} />
      </div>
    </>
  );
}
