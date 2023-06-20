import Image from "next/image";
import bottom from "../../public/big sqaures.png"

export default function Bottom() {
    return (
        <>
           <div className="absolute -bottom-1 opacity-60">
                <Image src={bottom} alt={"svg"} />
           </div>
        </>
    )
}