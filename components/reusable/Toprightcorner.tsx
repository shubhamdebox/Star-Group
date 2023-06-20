import Image from "next/image";
import square from "../../public/square.png"
export default function Toprightcorner() {
    return (
        <>
           <div className="absolute  top-0 ">
                <Image src={square} alt={"svg"} />
           </div>
        </>
    )
}