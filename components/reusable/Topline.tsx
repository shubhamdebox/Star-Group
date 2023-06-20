import Image from "next/image";
import line from "../../public/Vector 5.svg"
export default function Topline() {
    return (
        <>
           <div className="absolute top-10  right-3 ">
                <Image src={line} alt={"svg"} className="w-[100%]"/>
           </div>
        </>
    )
}