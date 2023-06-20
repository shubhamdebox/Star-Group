import Image from "next/image";
import square2 from "../../public/big sqaures.png"

export default function Center() {
    return (
        <>
           <div className="absolute right-32 top-60 opacity-60">
                <Image src={square2} alt={"svg"} />
           </div>
        </>
    )
}