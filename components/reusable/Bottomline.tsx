import Image from "next/image";
import line from "../../public/Vector 6.svg"

export default function Bottomline() {
    return (
        <>
           <div className="absolute  bottom-10 ">
                <Image src={line} alt={"svg"} />
           </div>
        </>
    )
}