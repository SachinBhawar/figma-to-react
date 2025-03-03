import React from "react";

const Card = ({ card }) => {
    return (
        <div className="flex flex-col w-[252px] gap-[10px] shrink-0 mb-20px">
            <img className="w-full h-[180px] rounded-md" src={card.img}></img>
            <p className="text-[13px]">{card.text}</p>
            <div className="flex flex-row justify-between items-center">
                <p className="text-[24px] font-semibold font-Barlow">{card.price}</p>

                <div className="flex flex-row items-center gap-1">
                    {Array.from({ length: card.stars }).map((ele, ind) => (
                        <div className="h-[14px] w-[14px]" key={ind}>
                            <img className="w-full h-full" src={card.starImg}></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
