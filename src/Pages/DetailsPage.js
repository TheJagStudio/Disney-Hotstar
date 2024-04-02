import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard/MovieCard";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const DetailsPage = () => {
    const { id } = useParams();
    const [genres, setGenres] = useState([]);
    const options = ["More Like This", "Trailers & More"];
    const [data, setData] = useState({});
    const [simmilar, setSimmilar] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    const [swiper, setSwiper] = useState(null);
    const [watchList, setWatchList] = useState(false);

    //  ref https://www.hotstar.com/in/movies/ms-dhoni-the-untold-story/1770003314?filters=content_type%3Dmovie

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let totalHeight = document.getElementById("heroDetailPage").scrollHeight;
            let scrollY = window.scrollY;
            let percentage = (scrollY / totalHeight) * 100;
            let opacity = 0;
            if (scrollY > 30) {
                opacity = Math.round(Math.min((percentage + Math.min(percentage, 40)) / 100, 1) * 100) / 100;
            }
            document.getElementById("coverHeroImage").style.opacity = opacity;
        });
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: "Bearer " + process.env.REACT_APP_TMDB_BEARER,
            },
        };

        fetch("https://api.themoviedb.org/3/movie/" + id + "?language=en-US&append_to_response=external_ids,similar,recommendations,credits,videos,translations", options)
            .then((response) => response.json())
            .then((response) => {
                setData(response);
                setGenres(response.genres);
                setSimmilar(response.similar.results);
                setRecommendations(response.recommendations.results);
                fetch("https://api.themoviedb.org/3/movie/" + id + "/similar?language=en-US&page=2", options)
                    .then((response) => response.json())
                    .then((response2) => {
                        setSimmilar([...response.similar.results, ...response2.results]);
                    })
                    .catch((err) => console.error(err));
                fetch("https://api.themoviedb.org/3/movie/" + id + "/recommendations?language=en-US&page=2", options)
                    .then((response) => response.json())
                    .then((response2) => {
                        setRecommendations([...response.recommendations.results, ...response2.results]);
                    });
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section>
            <div id="moviePlayer" className="bg-primary w-full fixed scale-0 h-screen top-0 left-0 z-[1001] object-contain transition-all group">
                <iframe id="playerFrame" className="w-full h-full group-hover:opacity-80" allowFullScreen allowTransparency></iframe>
                <svg
                    onClick={() => {
                        document.getElementById("playerFrame").src = "";
                        document.getElementById("moviePlayer").classList.add("scale-0");
                        document.getElementById("moviePlayer").classList.remove("scale-100");
                    }}
                    width={35}
                    height={35}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-5 right-5 bg-white rounded-full opacity-0 group-hover:opacity-100"
                >
                    <path fill="#000" d="m13.537 12 3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001-3.855 3.855-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001 3.855 3.855-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001 3.855-3.855 3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z" />
                </svg>
            </div>
            {/* Hero Section */}
            <div id="heroDetailPage" className="relative w-[calc(100%-120px)] min-h-[100vh] h-full overflow-hidden ml-[120px]" style={{ backgroundImage: "url('https://image.tmdb.org/t/p/original" + data.backdrop_path + "')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                {/* Video Player */}
                {/* <img className="sticky top-0" src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5333/1375333-i-e44f367bc7fa" alt="Image" /> */}

                <div className="absolute top-0 left-0 w-[70%] h-full bg-gradient-to-r from-primary via-primary/50 to-transparent transition-all duration-300" id="heroLeftDiv"></div>
                <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-primary via-primary/50 to-transparent" id="heroBottomDiv"></div>
                <div id="coverHeroImage" className="absolute top-0 left-0 w-full h-full bg-primary opacity-0"></div>
                {/* Movie - Series Info Div */}
                <div className="absolute bottom-12 left-3 max-w-[450px] w-full flex flex-col items-start justify-center gap-3 z-[2] overflow-visible">
                    {/* Image */}
                    {/* <img src="https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/5335/1375335-t-cb71a571dc93" alt="Image" className="max-w-[360px] w-full max-h-24 h-auto object-cover" /> */}
                    <h1 className="text-6xl font-bold font-['Satisfy',cursive]">{data.original_title}</h1>
                    <p className="w-full">{data.tagline}</p>
                    <div className="flex items-center justify-center gap-2 font-semibold text-gray-400 last:!hidden">
                        <p className="text-gray-300 ">{data.release_date === undefined ? "2023" : data.release_date.split("-")[0]}</p>
                        <span>•</span>
                        <p className="text-gray-300 ">{data.runtime}m</p>
                        <span>•</span>
                        <p className="text-gray-300 uppercase">{data.original_language}</p>
                        <span>•</span>
                        <p className="text-gray-200 bg-white/20 p-0.5 px-2 rounded-md font-bold">{data.status}</p>
                    </div>
                    {/* Movie Description */}
                    <p className="line-clamp-4 my-1.5 text-gray-300 text-base">{data.overview}</p>

                    {/* Genres of the movie */}
                    <div className="flex gap-2 ">
                        {genres.map((genre, i) => {
                            return (
                                <>
                                    <p key={i} className="text-gray-300 font-semibold ">
                                        {genre.name}
                                    </p>
                                    <p className="last:hidden">|</p>
                                </>
                            );
                        })}
                    </div>
                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-4 w-full h-14 mt-5">
                        <button
                            onClick={() => {
                                document.getElementById("playerFrame").src = "https://vidsrc.to/embed/movie/" + data.external_ids.imdb_id;
                                document.getElementById("moviePlayer").classList.add("scale-100");
                                document.getElementById("moviePlayer").classList.remove("scale-0");
                            }}
                            className="bg-[#e1e6f0] text-lg text-black flex items-center justify-center font-semibold w-full h-full rounded-lg hover:scale-105 transition-all duration-700 "
                        >
                            <p className="w-6 h-6 text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#000" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg>
                            </p>
                            <span className="text-black">Watch Now</span>
                        </button>
                        <div className="relative group">
                            <button
                                type="button"
                                className="bg-white/10 text-lg transition-all duration-300 hover:bg-white/40 h-full w-14 q p-4 rounded-lg"
                                onClick={() => {
                                    setWatchList(!watchList);
                                }}
                            >
                                {!watchList ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
                                        <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                                    </svg>
                                )}
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0f1014" className={`absolute -top-[22px] translate-y-2 group-hover:translate-y-0 opacity-0 transition-all duration-300 group-hover:opacity-100 left-[25%]`} viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                            {!watchList ? <span className="absolute -top-12 translate-y-2 left-[0%] bg-[rgba(15,16,20,1)] p-1.5 px-2 text-sm rounded-lg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">Watchlist</span> : <span className="absolute w-36 -top-12 translate-y-2 left-[0%] bg-[rgba(15,16,20,1)] p-1.5 px-2 text-sm rounded-lg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">Added to Watchlist</span>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full pl-[140px] mt-10 ">
                <div className="flex items-center justify-start gap-12 pb-6 border-b-2 border-b-[#252833] mb-8">
                    {options.map((option, i) => {
                        return (
                            <p key={i} className="text-xl font-semibold text-gray-400">
                                {option}
                            </p>
                        );
                    })}
                </div>
                <p className="text-xl text-gray-400 mb-3 font-semibold z-20">Similar Movies</p>
                <Swiper loop={true} speed={1000} slidesPerGroup={6} grabCursor={true} className="-translate-y-10 mySwiper group !overflow-y-visible z-0" slidesPerView={6} breakpoints={{ 1400: { slidesPerView: 6, slidesPerGroup: 6 }, 1200: { slidesPerView: 5, slidesPerGroup: 5 }, 1024: { slidesPerView: 4, slidesPerGroup: 4 }, 720: { slidesPerView: 3, slidesPerGroup: 3 } }} onSwiper={(s) => setSwiper(s)}>
                    <button className="h-full w-0 group-hover:w-16 scale-y-[80%] transition-all duration-500 absolute top-0 left-0 z-10 bg-gradient-to-r from-black to-transparent flex items-center justify-center" onClick={() => swiper.slidePrev()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </button>
                    <button className="h-full w-0 group-hover:w-16 scale-y-[80%] transition-all duration-500 absolute top-0 right-0 z-10 bg-gradient-to-l from-black to-transparent flex items-center justify-center" onClick={() => swiper.slideNext()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                    {simmilar.map((movie, index) => (
                        <SwiperSlide key={index} className="py-20">
                            <MovieCard id={movie.id} image={"https://image.tmdb.org/t/p/w500" + movie.poster_path} name={movie.original_title} coverImg={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={"-translate-y-20 " + (recommendations.length > 0 ? "" : "hidden")}>
                    <p className="text-xl text-gray-400 mb-3 font-semibold">Recommended Movies</p>
                    <Swiper loop={true} speed={1000} slidesPerGroup={6} grabCursor={true} className="-translate-y-10 mySwiper group " slidesPerView={6} breakpoints={{ 1400: { slidesPerView: 6, slidesPerGroup: 6 }, 1200: { slidesPerView: 5, slidesPerGroup: 5 }, 1024: { slidesPerView: 4, slidesPerGroup: 4 }, 720: { slidesPerView: 3, slidesPerGroup: 3 } }} onSwiper={(s) => setSwiper(s)}>
                        <button className="h-full w-0 group-hover:w-16 scale-y-[80%] transition-all duration-500 absolute top-0 left-0 z-10 bg-gradient-to-r from-black to-transparent flex items-center justify-center" onClick={() => swiper.slidePrev()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                            </svg>
                        </button>
                        <button className="h-full w-0 group-hover:w-16 scale-y-[80%] transition-all duration-500 absolute top-0 right-0 z-10 bg-gradient-to-l from-black to-transparent flex items-center justify-center" onClick={() => swiper.slideNext()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                        {recommendations.map((movie, index) => (
                            <SwiperSlide key={index} className="py-20">
                                <MovieCard id={movie.id} image={"https://image.tmdb.org/t/p/w500" + movie.poster_path} name={movie.original_title} coverImg={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;
