import React from "react";
import PhotoCard from "./PhotoCard";
import "./styles.css";

const PhotographersContainer = ({ photographersCards }) => {
    return (
        <div className="flex flex-col w-[260px] box-border rounded-[10px] gap-[16px]">
            <div className="flex flex-row items-center">
                <p className="text-black font-bold mr-[24px]">Artists</p>
                <p className="text-[#8D8D8D] ">Photographers</p>
            </div>
            <div className="flex flex-col w-full box-border h-[707px] overflow-auto gap-[30px] ">
                {photographersCards.map((person, index) => (
                    <PhotoCard person={person} key={index} />
                ))}
            </div>
            <div className="flex flex-row w-full box-border justify-evenly">
                <p className="text-[#8D8D8D] text-xs">Privacy</p>
                <p className="text-[#8D8D8D] text-xs">Terms of Service</p>
                <p className="text-[#8D8D8D] text-xs">Cookie Notice</p>
            </div>
        </div>
    );
};

export default PhotographersContainer;
