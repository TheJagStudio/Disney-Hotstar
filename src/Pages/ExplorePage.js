import React, { useEffect, useState } from "react";
import { movieData } from "../MovieData";

const ExplorePage = () => {
    const [data, setData] = useState(movieData);
    const [page, setPage] = useState(1);
    const [type, setType] = useState("movie");
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_TMDB_BEARER,
            },
        };

        fetch("https://api.themoviedb.org/3/discover/" + type + "?include_adult=false&language=en-US&page=" + page + "&primary_release_year=24&sort_by=popularity.desc", options)
            .then((response) => response.json())
            .then((response) => {
                let temp = [];
                for (let index = 0; index < response.results.length; index++) {
                    const element = response.results[index];
                    if (!data.includes(element)) {
                        temp.push(element);
                    }
                }
                setData([...data, ...temp]);
                if (page < 5) {
                    setPage(page + 1);
                }
            })
            .catch((err) => console.error(err));
    }, [page]);
    return (
        <section>
            <div id="heroDetailPage" className="relative w-[calc(100%-120px)] h-full overflow-hidden ml-[120px] p-8">
                <div className="relative bg-[#252833] w-full h-16 rounded-xl flex gap-5 items-center justify-start px-3 group">
                    <svg className="fill-[#8f98b2] group-hover:fill-white hover:scale-110 transition-all " width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                    </svg>
                    <input
                        onChangeCapture={() => {
                            let searchInput = document.getElementById("searchInput").value;
                            try {
                                clearTimeout(window.timeout);
                            } catch (err) {}
                            window.timeout = setTimeout(() => {
                                console.log(searchInput);
                                if (searchInput !== "" && searchInput !== undefined && searchInput !== null) {
                                    const options = {
                                        method: "GET",
                                        headers: {
                                            accept: "application/json",
                                            Authorization: "Bearer " + process.env.REACT_APP_TMDB_BEARER,
                                        },
                                    };
                                    setData([]);
                                    let tempData = [];
                                    let max = 6;
                                    for (let index = 1; index < max; index++) {
                                        fetch("https://api.themoviedb.org/3/search/" + type + "?query=" + searchInput + "&include_adult=false&language=en-US&sort_by=popularity.desc&page=" + index, options)
                                            .then((response) => response.json())
                                            .then((response) => {
                                                let temp = [];
                                                for (let index = 0; index < response.results.length; index++) {
                                                    const element = response.results[index];
                                                    if (!tempData.includes(element) && element.backdrop_path !== null && element.poster_path !== null) {
                                                        temp.push(element);
                                                    }
                                                }
                                                setData([...tempData, ...temp]);
                                                tempData = [...tempData, ...temp];
                                                max = response.total_pages + 1;
                                            })
                                            .catch((err) => console.error(err));
                                    }
                                } else {
                                    setPage(1);
                                    const options = {
                                        method: "GET",
                                        headers: {
                                            accept: "application/json",
                                            Authorization: "Bearer " + process.env.REACT_APP_TMDB_BEARER,
                                        },
                                    };

                                    fetch("https://api.themoviedb.org/3/discover/" + type + "?include_adult=false&language=en-US&page=" + page + "&primary_release_year=23&sort_by=popularity.desc", options)
                                        .then((response) => response.json())
                                        .then((response) => {
                                            let temp = [];
                                            for (let index = 0; index < response.results.length; index++) {
                                                const element = response.results[index];
                                                if (!data.includes(element) && element.backdrop_path !== null && element.poster_path !== null) {
                                                    temp.push(element);
                                                }
                                            }
                                            setData([...data, ...temp]);
                                            if (page < 5) {
                                                setPage(page + 1);
                                            }
                                        })
                                        .catch((err) => console.error(err));
                                }
                            }, 1500);
                        }}
                        id="searchInput"
                        className="text-white bg-transparent text-xl font-[500] w-full outline-none"
                        placeholder="Movie, shows and more"
                    />
                </div>
                <div className="w-full h-fit mt-5 overflow-x-scroll noScroll flex gap-3 items-center">
                    <p
                        onClick={() => {
                            setType("movie");
                            const options = {
                                method: "GET",
                                headers: {
                                    accept: "application/json",
                                    Authorization: "Bearer " + process.env.REACT_APP_TMDB_BEARER,
                                },
                            };
                            setData([]);
                            let tempData = [];
                            let max = 6;
                            for (let index = 1; index < max; index++) {
                                fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&language=en-US&page=" + index + "&primary_release_year=24&sort_by=popularity.desc", options)
                                    .then((response) => response.json())
                                    .then((response) => {
                                        let temp = [];
                                        for (let index = 0; index < response.results.length; index++) {
                                            const element = response.results[index];
                                            if (!tempData.includes(element) && element.backdrop_path !== null && element.poster_path !== null) {
                                                temp.push(element);
                                            }
                                        }
                                        setData([...tempData, ...temp]);
                                        tempData = [...tempData, ...temp];
                                        max = response.total_pages + 1;
                                    })
                                    .catch((err) => console.error(err));
                            }
                            document.getElementById("searchInput").value = "";
                        }}
                        className={(type === "movie" ? "bg-[#252833]" : "") + " px-5 py-2 rounded-full"}
                    >
                        Movie
                    </p>
                    <p
                        onClick={() => {
                            setType("tv");
                            const options = {
                                method: "GET",
                                headers: {
                                    accept: "application/json",
                                    Authorization: "Bearer " + process.env.REACT_APP_TMDB_BEARER,
                                },
                            };
                            setData([]);
                            let tempData = [];
                            let max = 6;
                            for (let index = 1; index < max; index++) {
                                fetch("https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=" + index + "&primary_release_year=24&sort_by=popularity.desc", options)
                                    .then((response) => response.json())
                                    .then((response) => {
                                        let temp = [];
                                        for (let index = 0; index < response.results.length; index++) {
                                            const element = response.results[index];
                                            if (!tempData.includes(element) && element.backdrop_path !== null && element.poster_path !== null) {
                                                temp.push(element);
                                            }
                                        }
                                        setData([...tempData, ...temp]);
                                        tempData = [...tempData, ...temp];
                                        max = response.total_pages + 1;
                                    })
                                    .catch((err) => console.error(err));
                            }
                            document.getElementById("searchInput").value = "";
                        }}
                        className={(type === "tv" ? "bg-[#252833]" : "") + " px-5 py-2 rounded-full"}
                    >
                        TV
                    </p>
                    <p className={(type === "anime" ? "bg-[#252833]" : "") + " px-5 py-2 rounded-full"}>Anime</p>
                </div>
                <p className="text-xl text-[#e1e6f0] font-bold my-5 mt-3">Popular Searches</p>
                <div className="w-full h-fit my-3 grid grid-cols-4 lg:grid-cols-7 gap-5">
                    {data.map((item, index) => (
                        <div key={index} className="relative w-full h-auto aspect-[1/1.5] group">
                            <div className="absolute top-0 group-hover:-top-10 group-hover:-translate-x-[25%] w-full h-full group-hover:w-[200%] group-hover:h-fit group-hover:max-h-fit opacity-0 group-hover:opacity-100 pb-5 bg-[#16181f] shadow-2xl shadow-black rounded-xl transition-all duration-500 overflow-hidden z-20 ">
                                <img
                                    className="w-full h-fit aspect-[16/9] object-cover "
                                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                                    onError={(event) => {
                                        event.target.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
                                    }}
                                    alt=""
                                />
                                <button
                                    onClick={() => {
                                        window.location.href = "/movie/" + item.id;
                                    }}
                                    className="hover:scale-110 transition-all bg-[#e1e6f0] text-sm text-black flex items-center justify-center font-semibold w-[calc(100%-1.25rem)] h-fit p-2 m-3 rounded-lg "
                                >
                                    <p className="w-4 h-4 text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#000" className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                        </svg>
                                    </p>
                                    <span className="text-black ml-2 ">Watch Now</span>
                                </button>
                                <p className="font-bold mx-3 uppercase">{type === "movie" ? item.original_title : item.original_name}</p>
                                <p className="text-sm mx-3 uppercase">
                                    <span>{type === "movie" ? item.release_date.split("-")[0] : item.first_air_date.split("-")[0]}</span>
                                    &nbsp;&#x2022;&nbsp;
                                    <span>{item.original_language}</span>
                                    &nbsp;&#x2022;&nbsp;
                                    <span>
                                        {item.vote_average} ({item.vote_count})
                                    </span>
                                </p>
                                <p className="text-[#8f98b2] text-sm px-3 truncate-5">{item.overview}</p>
                            </div>
                            <img className="w-full h-full object-contain rounded-lg" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExplorePage;
