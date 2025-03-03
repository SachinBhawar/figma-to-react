import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import AsideSection from "./Components/AsideSection";
import PhotographersContainer from "./Components/PhotographersContainer";
import PostContainer from "./Components/PostContainer";
import { links } from "./utils/links.data.js";
import { posts } from "./utils/posts.data.js";
import { cards } from "./utils/cards.data.js";
import { photographersCards } from "./utils/photographersCards .data.js";

function App() {
    return (
        <>
            <div className="h-[1800px] w-screen bg-[#f5f5f5] flex flex-col items-center gap-[30px] pt-[40px]">
                <Navbar />
                <div className="flex flex-row gap-[30px] box-border">
                    <AsideSection links={links} />
                    <PostContainer posts={posts} cards={cards} />
                    <PhotographersContainer photographersCards={photographersCards} />
                </div>
            </div>
        </>
    );
}

export default App;
