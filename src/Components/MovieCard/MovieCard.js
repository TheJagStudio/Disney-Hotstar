import { React, useState } from "react";

const MovieCard = ({ image, coverImg, name, id }) => {
    const [watchList, setWatchList] = useState(false);

    return (
        <div className="group/movie w-[200px] h-[260px] overflow-hidden hover:overflow-visible rounded-lg flex relative">
            <img src={image ? image : ""} alt={name} className="h-full w-full object-cover z-0 rounded-lg" />

            <div className="w-[380px] h-fit absolute -top-10 -left-20 z-50 opacity-0 group-hover:opacity-100 shadow-2xl transition-all duration-300 overflow-hidden scale-0 bg-movie-card-bg group-hover/movie:scale-100 rounded-lg hover:cursor-pointer">
                <div className="relative ">
                    <img src={coverImg ? coverImg : ""} alt={name} className="h-auto min-h-64 w-full object-cover relative before:content-[''] before:absolute before:bg-gradient-to-t before:from-movie-card-bg before:to-transparent before:w-full before:h-10 before:bottom-0 before:left-0" />
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-movie-card-bg to-transparent" />
                </div>
                <div className="w-full h-auto px-3 pb-3">
                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-2 w-full h-10 mt-2">
                        <button
                            onClick={() => {
                                window.location.href = "/movie/" + id;
                            }}
                            className="bg-[#e1e6f0] text-sm text-black flex items-center justify-center font-semibold w-full h-full rounded-lg "
                        >
                            <p className="w-4 h-4 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#000" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg>
                            </p>
                            <span className="text-black ml-2">Watch Now</span>
                        </button>
                        <div className="relative h-full group/watchlist">
                            <button
                                type="button"
                                className="bg-white/10 text-lg transition-all duration-300 hover:bg-white/40 h-full w-10 q p-3 rounded-lg"
                                onClick={() => {
                                    setWatchList(!watchList);
                                }}
                            >
                                {!watchList ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                )}
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0f1014" className={`absolute -top-[22px] translate-y-2 group-hover/watchlist:translate-y-0 opacity-0 transition-all duration-300 group-hover/watchlist:opacity-100 left-[25%]`} viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                            {!watchList ? <span className="absolute -top-12 translate-y-2 -left-10 bg-[rgba(15,16,20,1)] p-1.5 px-2 text-sm rounded-lg opacity-0 transition-all duration-300 group-hover/watchlist:translate-y-0 group-hover/watchlist:opacity-100">Watchlist</span> : <span className="absolute w-36 -top-12 translate-y-2 -left-28 bg-[rgba(15,16,20,1)] p-1.5 px-2 text-sm rounded-lg opacity-0 transition-all duration-300 group-hover/watchlist:translate-y-0 group-hover/watchlist:opacity-100">Added to Watchlist</span>}
                        </div>
                    </div>
                    <div className="flex items-start justify-start gap-2 text-sm font-semibold text-white mt-3 ml-1">
                        <p className="text-gray-300 ">2016</p>
                        <span>•</span>
                        <p className="text-gray-300 ">2h 58m</p>
                        <span>•</span>
                        <p className="text-gray-300 ">Hindi</p>
                        <span>•</span>
                        <p className="text-gray-300 ">Adventure</p>
                    </div>
                    <p className="line-clamp-4 text-gray-500 text-sm font-medium mt-2">The film chronicles Milkha Singh's, aka The Flying Sikh's, incredible struggle - from being an orphan to becoming one of India's greatest athletes.</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
