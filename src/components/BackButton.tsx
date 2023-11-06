import Link from "next/link";

export default function BackButton({to}:any){
    return(
        <div className="">
            <Link href={to}>
               <button className="px-6 py-3">
                    <p>
                        <u className="text-[#61357d]">Atrás</u>
                    </p>
                </button> 
            </Link>
        </div>
    )
}