import React from "react";
import Heart from "../Assets/heart2.svg";
import Like from "../Assets/heart_2.svg";
import Comment from "../Assets/comment.svg";
import Share from "../Assets/share.svg";

const Post = ({ post }) => {
    return (
        <div className="w-full h-[600px] box-border flex flex-col pt-[30px] pl-[30px] pr-[30px] rounded-[10px]  bg-white">
            <div className="w-full box-border flex flex-col gap-[30px] mb-[30px]">
                {/* {Profile photo name and usename} */}
                <div className="h-[48px] flex flex-row items-center box-border relative">
                    <div className="h-full box-border">
                        <img src={post.profile} className="w-full aspect-square rounded-[10px]"></img>
                    </div>
                    <div className="flex flex-col ml-[14px]">
                        <h2 className="text-[20px] text-black">{post.name}</h2>
                        <h4 className="text-[14px] text-[#8D8D8D]">{post.userName}</h4>
                    </div>
                    <div className="flex flex-col h-full justify-evenly  absolute right-0">
                        <div className="w-[4px] h-[4px] bg-black rounded-full"></div>
                        <div className="w-[4px] h-[4px] bg-black rounded-full"></div>
                        <div className="w-[4px] h-[4px] bg-black rounded-full"></div>
                    </div>
                </div>

                {/* {post text} */}

                <div className="w-full">
                    <span className="text-[14px] text-black">{post.content}</span>
                    <span className="text-[14px] text-[#FF5E8A]">Read More.</span>
                </div>

                {/* {post photo} */}
                <div className="h-[306px] w-full rounded-[10px] relative">
                    <img className="h-full w-full rounded-[10px]" src={post.photo}></img>
                    <img className="absolute h-[22px] w-[24] top-[25px] right-[25px]" src={Heart} />
                </div>
            </div>

            <div className="flex flex-row h-[78px] items-center ml-4">
                <div className="h-[22px] w-[24px] mr-[12px]">
                    <img src={Like} className="w-full h-full"></img>
                </div>
                <div className="text-[20px] font-semibold mr-[20px]">{post.likes}</div>

                {/* {Comments} */}
                <div className="h-[22px] w-[24px] mr-[12px]">
                    <img src={Comment} className="w-full h-full"></img>
                </div>
                <div className="text-[20px] font-semibold mr-[20px]">{post.comments}</div>

                {/* {shares} */}
                <div className="h-[22px] w-[24px] mr-[12px]">
                    <img src={Share} className="w-full h-full"></img>
                </div>
                <div className="text-[20px] font-semibold mr-[20px]">{post.shares}</div>
            </div>
        </div>
    );
};

export default Post;
