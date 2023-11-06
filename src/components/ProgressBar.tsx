// ProgressBar Component
function ProgressBar({ children }:any) {
    return (
        <div className="py-[4px] pb-[25px] text-center flex justify-center items-center">
            <div className="h-[8px] md:h-[10px] w-full max-w-[360px] md:max-w-[540px] bg-[#fbfbfb] rounded-[2px]">
                {children}
            </div>
        </div>
    );
}

export default ProgressBar;
