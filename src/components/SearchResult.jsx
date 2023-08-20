import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetch } from "../utils/API.jsx";
import { Context } from "../context/context.jsx";
import LeftPane from "./LeftPane.jsx";
import SearchResultVideoCard from "./SearchResultVideoCard.jsx";

const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);


    useEffect(() => {
        fetchSearchResults();
    }, [searchQuery]);

    const fetchSearchResults = () => {
        setLoading(true);
        fetch(`search/?q=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <LeftPane />

            <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">

                {/* Search Result Videos */}
                <div className="grid grid-cols-1 gap-2 p-5">
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SearchResult;