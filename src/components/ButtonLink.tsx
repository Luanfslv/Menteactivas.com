import Link from "next/link";

interface ButtonLinkProps {
    href: string;
    children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, children }) => {
    const mudaCorDoBotao = (event: any) => {
        event.preventDefault();
        setTimeout(() => {
            window.location.href = href;
        }, 200);
    }

    return (
        <Link
            onClick={mudaCorDoBotao}
            className=" text-center w-full md:w-auto px-4 md:px-[33.30%] lg:px-[11.11%] sm:mx-0 sm:max-w-[355px] md:max-w-[800px] py-[16px] items-center text-[14px] font-bold rounded-[5px] bg-white border md:border-[1.5px] border-[#6700a7] text-[#6700a7] hover:text-[#fff] hover:bg-[#6700a7] hover:scale-105 transform transition-transform duration-200"
            href={href}>
            <p className="">{children}</p>
        </Link>

    );
}

export default ButtonLink;
