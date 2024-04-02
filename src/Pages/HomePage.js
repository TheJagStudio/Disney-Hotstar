import React, { useEffect, useState } from "react";

const HomePage = () => {
	const genres = ["Comedy", "Drama", "Couples", "Love Triangle"];

	const [watchList, setWatchList] = useState(false);
	const [activeMovieSlide, setactiveMovieSlide] = useState("https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/221/1530221-h-6d561a70286f");

	const demoHeroData = [
		{
			sliderImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/221/1530221-h-6d561a70286f",
		},
		{
			sliderImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6157/1536157-h-86662445caf6",
		},
		{
			sliderImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6195/1516195-h-3b4dc079b26c",
		},
		{
			sliderImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/168/1530168-h-0ec3cbb3bdb7",
		},
		{
			sliderImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/old_images/MOVIE/3314/1770003314/1770003314-h",
		},
		{
			sliderImg: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/9230/1389230-h-e74a6d002ef1",
		},
	];
	return (
		<section>
			{/* Hero Section */}
			<div id="heroDetailPage" className="relative w-[calc(100%-120px)] min-h-[100vh] h-full overflow-hidden ml-[120px]" style={{ backgroundImage: "url('" + activeMovieSlide + "')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
				{/* Video Player */}
				{/* <img className="sticky top-0" src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/5333/1375333-i-e44f367bc7fa" alt="Image" /> */}

				<div className=""></div>

				<div className="absolute top-0 left-0 w-[70%] h-full bg-gradient-to-r from-primary via-primary/50 to-transparent transition-all duration-300" id="heroLeftDiv"></div>
				<div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-primary via-primary/50 to-transparent" id="heroBottomDiv"></div>
				<div id="coverHeroImage" className="absolute top-0 left-0 w-full h-full bg-primary opacity-0"></div>
				{/* Movie - Series Info Div */}
				<div className="absolute bottom-12 left-3 max-w-[450px] w-full flex flex-col items-start justify-center gap-3 z-[2] overflow-visible">
					{/* Image */}
					<img src="https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/5335/1375335-t-cb71a571dc93" alt="Image" className="max-w-[360px] w-full max-h-24 h-auto object-cover" />
					{/* Year - Duration - Language - UA */}
					<div className="flex items-center justify-center gap-2 font-semibold text-gray-400">
						<p className="text-gray-300 ">2016</p>•<p className="text-gray-300 ">2h 58m</p>•<p className="text-gray-300 ">Hindi</p>•<p className="text-gray-200 bg-white/20 p-0.5 px-2 rounded-md font-bold">U</p>
					</div>
					{/* Movie Description */}
					<p className="line-clamp-3 my-1.5 text-gray-300 text-base">A tell-all tale about the life and times of Indian cricketer Mahendra Singh Dhoni, mapping his journey from a ticket collector to a celebrated sportsman.</p>

					{/* Genres of the movie */}
					<div className="flex gap-2 ">
						{genres.map((genre, i) => {
							return (
								<>
									<p key={i} className="text-gray-300 font-semibold ">
										{genre}
									</p>
									<p className="last:hidden">|</p>
								</>
							);
						})}
					</div>
					{/* Buttons */}
					<div className="flex items-center justify-center gap-4 w-full h-14 mt-5">
						<button className="bg-white/10 hover:bg-white/40 backdrop-blur-md text-lg text-white flex items-center justify-center font-semibold w-full h-full rounded-lg hover:scale-105 transition-all duration-700 ">
							<p className="w-6 h-6 text-white">
								<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" className="bi bi-play-fill" viewBox="0 0 16 16">
									<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
								</svg>
							</p>
							<span className="text-white">Watch Now</span>
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
				<div className="absolute right-3 bottom-12 h-fit flex items-center">
					<div
						className="bg-gradient-to-r from-black to-transparent h-[48px] w-[40px] flex items-center justify-center rounded-r-md absolute left-0 cursor-pointer"
						onClick={() => {
							document.getElementById("imgSlider").scrollLeft -= 90;
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
						</svg>
					</div>
					<div className="flex items-center gap-3 max-w-[480px] overflow-x-hidden h-[48px] transition-all duration-300 scroll-smooth" id="imgSlider">
						{demoHeroData.map((item, index) => (
							<img
								src={item.sliderImg}
								className={"h-full w-auto aspect-[1.77/1] rounded-md cursor-pointer border " + (activeMovieSlide === item.sliderImg ? "border-white" : "border-transparent")}
								key={index}
								onClick={() => {
									setactiveMovieSlide(item.sliderImg);
								}}
							/>
						))}
					</div>
					<div
						className="bg-gradient-to-l from-black to-transparent h-[48px] w-[40px] flex items-center justify-center rounded-l-md absolute right-0 cursor-pointer"
						onClick={() => {
							document.getElementById("imgSlider").scrollLeft += 90;
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomePage;
