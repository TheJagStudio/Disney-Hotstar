import React, { useState, useEffect } from "react";

const Sidebar = () => {
	const [activeMenu, setActiveMenu] = useState("Home");

	useEffect(() => {
		if (window.location.pathname === "/") {
			setActiveMenu("Home");
		} else {
			setActiveMenu("Home");
		}
	}, []);

	const sidebarMenuData = [
		{
			svg: (
				<svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
				</svg>
			),
			filledSVG: (
				<svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
				</svg>
			),
			title: "Search",
			link: "/explore",
		},
		{
			svg: (
				<svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M7.5 0.5L7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L7.5 0.5ZM0.5 6.5L0.174604 6.12037L0 6.27003V6.5H0.5ZM5.5 14.5V15C5.77614 15 6 14.7761 6 14.5H5.5ZM9.5 14.5H9C9 14.7761 9.22386 15 9.5 15V14.5ZM14.5 6.5H15V6.27003L14.8254 6.12037L14.5 6.5ZM1.5 15H5.5V14H1.5V15ZM14.8254 6.12037L7.8254 0.120372L7.1746 0.879628L14.1746 6.87963L14.8254 6.12037ZM7.1746 0.120372L0.174604 6.12037L0.825396 6.87963L7.8254 0.879628L7.1746 0.120372ZM6 14.5V11.5H5V14.5H6ZM9 11.5V14.5H10V11.5H9ZM9.5 15H13.5V14H9.5V15ZM15 13.5V6.5H14V13.5H15ZM0 6.5V13.5H1V6.5H0ZM7.5 10C8.32843 10 9 10.6716 9 11.5H10C10 10.1193 8.88071 9 7.5 9V10ZM7.5 9C6.11929 9 5 10.1193 5 11.5H6C6 10.6716 6.67157 10 7.5 10V9ZM13.5 15C14.3284 15 15 14.3284 15 13.5H14C14 13.7761 13.7761 14 13.5 14V15ZM1.5 14C1.22386 14 1 13.7761 1 13.5H0C0 14.3284 0.671573 15 1.5 15V14Z"
						fill="#ffffff"
					/>
				</svg>
			),
			filledSVG: (
				<svg width="25px" height="25px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.8254 0.120372C7.63815 -0.0401239 7.36185 -0.0401239 7.1746 0.120372L0 6.27003V13.5C0 14.3284 0.671573 15 1.5 15H5.5C5.77614 15 6 14.7761 6 14.5V11.5C6 10.6716 6.67157 10 7.5 10C8.32843 10 9 10.6716 9 11.5V14.5C9 14.7761 9.22386 15 9.5 15H13.5C14.3284 15 15 14.3284 15 13.5V6.27003L7.8254 0.120372Z" fill="#ffffff" />
				</svg>
			),
			title: "Home",
			link: "/",
		},
		{
			svg: (
				<svg width={25} height={25} className="scale-110" viewBox="0 0 256 226" id="svg8">
					<g id="layer1">
						<path
							style={{
								fill: "none",
								stroke: "#ffffff",
								strokeWidth: 16,
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeMiterlimit: 4,
								strokeDasharray: "none",
								strokeOpacity: 1,
							}}
							d="M 191.99999,208 H 64 C 46.272,208 32,193.728 32,176 V 96 C 32,78.272 46.272,64 64,64 h 128 c 17.728,0 32,14.272 32,32 v 80 c 0,17.728 -14.272,32 -32,32"
							id="path843"
						/>
						<path
							style={{
								fill: "none",
								stroke: "#ffffff",
								strokeWidth: 16,
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeOpacity: 1,
								strokeMiterlimit: 4,
								strokeDasharray: "none",
							}}
							d="M 128,64 176,16"
							id="path821"
						/>
						<path
							style={{
								fill: "none",
								stroke: "#ffffff",
								strokeWidth: 16,
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeOpacity: 1,
								strokeMiterlimit: 4,
								strokeDasharray: "none",
							}}
							d="M 128,64 80,16"
							id="path823"
						/>
					</g>
				</svg>
			),
			filledSVG: (
				<svg width={25} height={25} className="scale-110" viewBox="0 0 256 226" id="svg8">
					<g id="layer1">
						<path
							style={{
								fill: "#ffffff",
								stroke: "#ffffff",
								strokeWidth: 16,
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeMiterlimit: 4,
								strokeDasharray: "none",
								strokeOpacity: 1,
							}}
							d="M 191.99999,208 H 64 C 46.272,208 32,193.728 32,176 V 96 C 32,78.272 46.272,64 64,64 h 128 c 17.728,0 32,14.272 32,32 v 80 c 0,17.728 -14.272,32 -32,32"
							id="path843"
						/>
						<path
							style={{
								fill: "none",
								stroke: "#ffffff",
								strokeWidth: 16,
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeOpacity: 1,
								strokeMiterlimit: 4,
								strokeDasharray: "none",
							}}
							d="M 128,64 176,16"
							id="path821"
						/>
						<path
							style={{
								fill: "none",
								stroke: "#ffffff",
								strokeWidth: 16,
								strokeLinecap: "round",
								strokeLinejoin: "round",
								strokeOpacity: 1,
								strokeMiterlimit: 4,
								strokeDasharray: "none",
							}}
							d="M 128,64 80,16"
							id="path823"
						/>
					</g>
				</svg>
			),
			title: "TV",
			link: "#",
		},
		{
			svg: (
				<svg viewBox="78.156 110.416 313.654 313.11" width="25px" height="25px">
					<path
						fill="white"
						d="M 358.914 110.416 C 358.914 110.416 370.477 110.761 369.959 120.944 C 369.441 131.127 360.639 131.644 360.294 131.817 C 359.949 131.99 126.013 141.482 126.013 141.482 C 126.013 141.482 106.51 144.416 106.51 158.051 C 106.51 171.686 105.992 203.701 105.992 203.701 C 105.992 203.701 115.312 192.31 131.536 191.792 C 147.76 191.274 303.203 189.495 331.568 190.757 C 343.284 191.278 388.655 182.127 390.3 239.831 C 391.945 297.535 391.808 364.042 391.808 364.042 C 391.808 364.042 389.774 408.915 343.865 416.336 C 297.956 423.757 203.199 427.051 129.637 418.235 C 118.624 416.915 108.567 415.545 98.671 406.052 C 90.31 398.032 86.513 390.256 85.65 387.727 C 80.272 371.961 89.499 361.972 112.215 379.079 C 114.439 380.754 120.624 388.391 129.545 390.048 C 147.798 393.438 225.7 395.692 239.844 395.366 C 272.669 394.609 318.093 392.448 338.391 390.552 C 365.433 388.026 365.006 367.224 365.653 362.518 C 367.953 345.784 367.045 259.842 365.651 241.805 C 364.871 231.717 360.941 219.003 332.493 218.107 C 273.317 216.244 151.45 217.703 141.515 217.899 C 104.893 218.622 107.965 238.174 106.38 247.958 C 105.562 253.009 102.194 333.082 108.131 364.802 C 111.002 380.14 116.685 380.8 117.128 384.871 C 119.829 409.703 86.821 419.692 81.005 370.773 C 75.838 327.316 79.279 156.028 79.279 156.028 C 79.279 156.028 85.32 126.265 111.899 121.26 C 138.478 116.255 358.803 110.593 358.914 110.416 Z"
					/>
				</svg>
			),
			filledSVG: (
				<svg viewBox="78.156 110.416 313.654 313.11" xmlns="http://www.w3.org/2000/svg" width="25px" height="25px">
					<path
						fill="white"
						d="M 358.914 110.416 C 358.914 110.416 370.477 110.761 369.959 120.944 C 369.441 131.127 360.639 131.644 360.294 131.817 C 359.949 131.99 126.013 141.482 126.013 141.482 C 126.013 141.482 106.51 144.416 106.51 158.051 C 106.51 171.686 105.992 203.701 105.992 203.701 C 105.992 203.701 115.312 192.31 131.536 191.792 C 147.76 191.274 303.203 189.495 331.568 190.757 C 343.284 191.278 388.655 182.127 390.3 239.831 C 391.945 297.535 391.808 364.042 391.808 364.042 C 391.808 364.042 389.774 408.915 343.865 416.336 C 297.956 423.757 203.199 427.052 129.637 418.235 C 118.624 416.915 109.581 414.36 98.671 406.052 C 90.31 399.686 89.87 396.878 85.991 387.504 C 80.129 373.338 89.499 361.972 112.215 379.079 C 114.439 380.754 120.624 388.391 129.545 390.048 C 147.798 393.438 134.339 335.542 140.276 367.262 C 143.147 382.6 139.435 377.906 139.878 381.977 C 142.579 406.809 92.885 423.747 81.005 370.773 C 71.429 328.071 79.279 156.028 79.279 156.028 C 79.279 156.028 85.32 126.265 111.899 121.26 C 138.478 116.255 358.803 110.593 358.914 110.416 Z"
					/>
				</svg>
			),
			title: "Movies",
			link: "#",
		},
		{
			svg: (
				<svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M38.892 14.296C26.973 19.323 15.061 32.693 15.01 41.102c-.009 1.359-2.437 8.367-13.59 39.218L.039 84.141l27.731-.321c31.091-.359 32.628-.667 41.006-8.237 18.829-17.01 3.415-50.678-20.822-45.48-20.01 4.292-21.144 34.431-1.379 36.658 12.603 1.421 18.192-11.422 8.707-20.006-1.841-1.666-2.037-1.62-4.623 1.079-2.699 2.817-2.699 2.82-.68 4.647 4.522 4.092 1.159 8.906-4.439 6.355-6.306-2.873-7.474-12.102-2.199-17.377 13.386-13.386 34.151 8.644 23.31 24.731-16.699 24.779-55.114-1.28-42.293-28.69 8.743-18.692 31.564-23.429 50.15-10.41l5.702 3.995 7.395-5.566c8.152-6.136 8.232-6.278 5.458-9.658-2.098-2.557-1.74-2.656-8.938 2.474l-3.978 2.835-8.663-4.293c-11.285-5.592-23.213-6.537-32.592-2.581M16 62.281c0 .371-1.105 3.609-2.455 7.196L11.09 76h15.259l-2.071-2.25c-1.138-1.237-3.467-4.476-5.174-7.196C17.397 63.834 16 61.911 16 62.281"
						fillRule="evenodd"
					/>
				</svg>
			),
			filledSVG: (
				<svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
					<path d="M38.892 14.296C26.973 19.323 15.061 32.693 15.01 41.102c-.009 1.359-2.437 8.367-13.59 39.218L.039 84.141l27.731-.321c31.091-.359 32.628-.667 41.006-8.237 18.829-17.01 3.415-50.678-20.822-45.48-20.01 4.292-21.144 34.431-1.379 36.658 12.603 1.421 18.192-11.422 8.707-20.006-1.841-1.666-2.037-1.62-4.623 1.079-2.699 2.817-2.699 2.82-.68 4.647 4.522 4.092 1.159 8.906-4.439 6.355-6.306-2.873-7.474-12.102-2.199-17.377 13.386-13.386 34.151 8.644 23.31 24.731-16.699 24.779-55.114-1.28-42.293-28.69 8.743-18.692 31.564-23.429 50.15-10.41l5.702 3.995 7.395-5.566c8.152-6.136 8.232-6.278 5.458-9.658-2.098-2.557-1.74-2.656-8.938 2.474l-3.978 2.835-8.663-4.293c-11.285-5.592-23.213-6.537-32.592-2.581M16 62.281c0 .371-1.105 3.609-2.455 7.196L11.09" fillRule="evenodd" />
				</svg>
			),
			title: "Anime",
			link: "#",
		},
	];

	return (
		<div className="min-w-[118px] overflow-hidden h-screen fixed top-0 left-0 bg-transparent py-8 flex flex-col z-[1000] group hover:min-w-[400px] hover:bg-gradient-to-r hover:from-primary hover:via-primary/70 hover:to-transparent transition-all duration-300" onMouseEnter={() => {}} onMouseLeave={() => {}}>
			<a href="/">
				<div className="px-5">
					<img className="w-20 h-20 object-contain" src="/logo.svg" alt="Logo" />
				</div>
			</a>
			<div className="mt-16 px-12 flex flex-col items-start">
				<a href="#" className="cursor-pointer my-5 hover:scale-110 group/semi origin-left transition-all duration-300">
					<div className="flex items-center gap-5 opacity-30 group-hover:opacity-60 group-hover/semi:opacity-100 hover:font-bold transition-all duration-300">
						<img src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_32/feature/profile/38.png" className="h-[20px] w-[20px]" alt="myspace" />
						<p className="hidden group-hover:block my-0 transition-all duration-100">My Space</p>
					</div>
				</a>
				{sidebarMenuData.map((item, index) => (
					<a href={item.link} className="cursor-pointer my-5 hover:scale-110 group/semi origin-left transition-all duration-300">
						<div className="flex items-center gap-5 opacity-30 group-hover:opacity-60 group-hover/semi:opacity-100 hover:font-bold transition-all duration-300" key={index}>
							<div className="hidden group-hover/semi:block">{item.filledSVG}</div>
							<div className="block group-hover/semi:hidden">{item.svg}</div>
							<p className="hidden group-hover:block my-0 transition-all duration-100">{item.title}</p>
						</div>
					</a>
				))}
				{/*  */}
			</div>
		</div>
	);
};

export default Sidebar;
