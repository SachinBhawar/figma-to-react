import React from "react";

const PhotoCard = ({ person }) => {
    return (
        <div className="w-[244px] h-[126px] relative">
            {/* Background Image */}
            <img className="h-full w-full rounded-xl" src={person?.img} alt="Background" />

            <div className="absolute flex flex-row h-[48px] top-[64px] left-[14px] gap-4">
                <div className="relative">
                    {/* Profile Picture */}
                    <img className="w-[48px] h-[48px] rounded-[10px]" src={person?.dp} alt="User DP" />
                    {person.online && (
                        <div className="absolute w-[12px] h-[12px] bg-green-500 rounded-full -top-0.5 -right-0.5 border-2 border-white"></div>
                    )}
                </div>

                {/* User Name & Username */}
                <div className="flex flex-col">
                    <h3 className="text-white font-bold">{person?.name || "Unknown"}</h3>
                    <h6 className="text-white text-[12px]">{person?.userName || "@"}</h6>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;
