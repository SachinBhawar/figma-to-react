import React from "react";
import { Link } from "react-router-dom";

const AsideSection = ({ links }) => {
    return (
        <div className="flex flex-col w-[260px] box-border rounded-[10px] gap-[16px]">
            <div className="flex flex-col w-full box-border bg-white rounded-[10px] h-[707px] gap-6 pt-8">
                {links.map((link, ind) => (
                    <Link
                        key={ind}
                        className="flex flext-row h-[32px] items-center px-[36px] gap-7 relative hover:before:content-[''] hover:before:absolute hover:before:left-0 hover:before:top-0 hover:before:w-[3px] hover:before:h-full hover:before:bg-[#88C2BB] active:text-black text-[#8D8D8D] hover:text-black"
                        to="/"
                    >
                        <img
                            className="h-[16px] w-[16px] filter grayscale group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                            src={link.logo}
                        />
                        <h4 className="font-semibold">{link.linkName}</h4>
                    </Link>
                ))}
            </div>
            <div className="flex flex-row w-full box-border justify-between">
                <p className="text-[#8D8D8D] text-xs">2022@logoname</p>
                <p className="text-[#8D8D8D] text-xs">Developed by ivon infotech</p>
            </div>
        </div>
    );
};

export default AsideSection;
