import React from "react";

import Post from "./Post";

import Card from "./Card.jsx";

const PostContainer = ({ posts, cards }) => {
    return (
        <div className="flex flex-col w-[620px] box-border rounded-[10px] h-full gap-[30px] ">
            {posts.map((post, ind) => (
                <Post post={post} key={ind} />
            ))}

            <div className="w-full flex flex-row flex-nowrap overflow-auto gap-[20px] ">
                {cards.map((card, ind) => (
                    <Card card={card} key={ind} />
                ))}
            </div>
        </div>
    );
};

export default PostContainer;
