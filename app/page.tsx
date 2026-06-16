"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [revealed, setRevealed] = useState([false, false, false]);

	const revealBlob = (index: number) => {
		setRevealed((prev) => {
			const next = [...prev];
			next[index] = true;
			return next;
		});
	};

	return (
		<div className="relative w-full min-h-screen">
			{/* <nav className="fixed z-2 top-[50%] translate-y-[-50%] left-[3vw] border-l-2 border-r-[0vh] py-[3vh] gap-[2vh] flex flex-col">
				<div className="flex items-center justify-start gap-[1vw]">
					<div className="w-[2vw] h-[0.2vh] bg-black"></div>
					<h2 className="text-[2vh]">What is Scribble?</h2>
				</div>
				<div className="flex items-center justify-start gap-[1vw]">
					<div className="w-[2vw] h-[0.2vh] bg-black"></div>
					<h2 className="text-[2vh]">Ready to get started?</h2>
				</div>
				<div className="flex items-center justify-start gap-[1vw]">
					<div className="w-[2vw] h-[0.2vh] bg-black"></div>
					<h2 className="text-[2vh]">What to Submit?</h2>
				</div>
				<div className="flex items-center justify-start gap-[1vw]">
					<div className="w-[2vw] h-[0.2vh] bg-black"></div>
					<h2 className="text-[2vh]">How to Submit?</h2>
				</div>
			</nav> */}
			<div className="mx-auto mt-[25vh] w-fit relative z-2">
				<img
					src="/circle.png"
					className="w-full scale-140 absolute top-0 left-0 -translate-y-[2vh] sway4"
					alt=""
				/>
				<h1 className="super-rugged text-[16vh] scale-90 font-extralight relative">
					Scribble
				</h1>
			</div>
			<p className="mx-auto relative z-2 w-fit mt-[9vh] super-rugged text-[5vh] pr-[12vw]">
				Create Art-Related Website -
			</p>
			<p className="mx-auto relative z-2 w-fit mt-[-2vh] super-rugged text-[7vh] pl-[10vw]">
				get a Sketchbook
			</p>
			<a
				href="https://forms.hackclub.com/t/4h4dSyrE5Bus"
				className="absolute w-fit z-5 right-[30vw] mt-[3vh] cursor-pointer"
			>
				<p className="super-rugged text-[5vh] leading-[5vh] relative">Submit</p>
				<img
					src="/circle.png"
					className="w-full scale-190 absolute top-0 left-0 -translate-y-[1vh] sway3"
					alt=""
				/>
			</a>

			<div className="">
				<img
					src="/crumbled.jpg"
					className="fixed top-0 left-0 w-full h-screen z-0 opacity-60"
					alt=""
				/>
				<img
					src="/spin.png"
					className="absolute top-[75vh] right-[2vw] w-[17vw] opacity-70 sway"
					alt=""
				/>
				<img
					src="/spin2.png"
					className="absolute top-[5vh] right-[12vw] w-[6vw] opacity-70 sway"
					alt=""
				/>
				<img
					src="/star.png"
					className="absolute top-[17vh] right-[3vw] w-[10vw] opacity-70 sway2"
					alt=""
				/>
				<img
					src="/triangle.png"
					className="absolute top-[10vh] left-[18vw] w-[7vw] opacity-70 sway2"
					alt=""
				/>
				<img
					src="/stain.png"
					className="absolute top-[3vh] left-[30vw] w-[22vw] opacity-70 sway4"
					alt=""
				/>
				<img
					src="/spin3.png"
					className="absolute top-[50vh] right-[3vw] scale-x-70 w-[25vw] opacity-90 sway3"
					alt=""
				/>
				<img
					src="/swirl.png"
					className="absolute top-[50vh] left-[13vw] w-[10vw] opacity-70 sway3"
					alt=""
				/>
				<img
					src="/swirl4.png"
					className="absolute left-[3vw] top-[20vh] w-[10vw] opacity-70 sway rotate-80"
					alt=""
				/>

				<img
					src="/hackclub.svg"
					className="absolute left-[1vw] top-[0vh] w-[12vw] z-5"
					alt=""
				/>
			</div>
			<div className="min-h-screen relative">
				<img
					src="/arrow.png"
					className="absolute right-[8vw] top-[8vh] w-[14vw] opacity-70 -rotate-30"
					alt=""
				/>
				<img
					src="/arrow2.png"
					className="absolute left-[10vw] top-[-2vh] w-[14vw] opacity-70 -rotate-80"
					alt=""
				/>
				<img
					src="/line.png"
					className="absolute left-[45vw] top-[-55vh] w-[10vw] opacity-70 rotate-80"
					alt=""
				/>
				<img
					src="/spin.png"
					className="absolute left-[2vw] top-[20vh] w-[10vw] opacity-80 sway4"
					alt=""
				/>
				<img
					src="/swirl4.png"
					className="absolute right-[2vw] top-[62vh] w-[8vw] opacity-80 sway4"
					alt=""
				/>
				<h1 className="super-rugged text-[10vh] mt-[43vh] mx-auto w-fit scale-90 font-extralight relative">
					What to make?
				</h1>
				<h2 className="super-rugged text-[5vh] mt-[-1vh] pl-[10vw] mx-auto w-fit scale-90 font-extralight relative sway5">
					(Click to Reveal)
				</h2>
				<div className="flex relative z-2 gap-[5vw] w-[80vw] mx-auto mt-[-2vh]">
					{/* Blob 1 */}
					<div
						onClick={() => revealBlob(0)}
						className="relative flex-1 cursor-pointer h-[35vw]"
					>
						<div className="absolute inset-0 flex items-center justify-center p-[2vw] text-center">
							<p className="super-rugged text-[2vw]">
								Create an art tool or utility website.
							</p>
						</div>

						<img
							src="/blob1.png"
							alt=""
							className={`absolute inset-0 w-full h-full object-contain sway3 hover:scale-105 transition-all duration-400 ${
								revealed[0] ? "opacity-0" : "opacity-100"
							}`}
						/>
					</div>

					{/* Blob 2 */}
					<div
						onClick={() => revealBlob(1)}
						className="relative flex-1 cursor-pointer h-[35vw]"
					>
						<div className="absolute inset-0 flex items-center justify-center p-[2vw] text-center">
							<p className="super-rugged text-[2vw]">
								Build a color theory learning experience.
							</p>
						</div>

						<img
							src="/blob2.png"
							alt=""
							className={`absolute inset-0 w-full h-full object-contain sway4 hover:scale-105 transition-all duration-400 ${
								revealed[1] ? "opacity-0" : "opacity-100"
							}`}
						/>
					</div>

					{/* Blob 3 */}
					<div
						onClick={() => revealBlob(2)}
						className="relative flex-1 cursor-pointer h-[35vw]"
					>
						<div className="absolute inset-0 flex items-center justify-center p-[2vw] text-center">
							<p className="super-rugged text-[2vw]">
								Make an interactive drawing or gallery site.
							</p>
						</div>

						<img
							src="/blob3.png"
							alt=""
							className={`absolute inset-0 w-full h-full object-contain sway3 hover:scale-105 transition-all duration-400 ${
								revealed[2] ? "opacity-0" : "opacity-100"
							}`}
						/>
					</div>
				</div>
			</div>
			<div className="min-h-screen relative">
				<img
					src="/arrow2.png"
					className="absolute right-[5vw] bottom-[18vh] w-[18vw] opacity-70 rotate-80"
					alt=""
				/>
				<img
					src="/arrow3.png"
					className="absolute left-[10vw] top-[-22vh] w-[8vw] opacity-70 -rotate-40"
					alt=""
				/>
				<img
					src="/line2.png"
					className="absolute left-[22.5vw] top-[-18vh] w-[55vw] opacity-80"
					alt=""
				/>
				<img
					src="/hook.png"
					className="absolute right-[9vw] top-[8vh] w-[15vw] opacity-80 sway2"
					alt=""
				/>
				<img
					src="/square.png"
					className="absolute left-[2vw] top-[15vh] w-[4vw] opacity-80 sway2"
					alt=""
				/>
				<img
					src="/triangle.png"
					className="absolute left-[3vw] top-[25vh] w-[10vw] opacity-80 sway4"
					alt=""
				/>
				<img
					src="/scribble.png"
					className="absolute left-[3vw] top-[80vh] w-[18vw] opacity-80 sway4"
					alt=""
				/>

				<img
					src="/heart.png"
					className="absolute right-[2.5vw] top-[24vh] w-[10vw] opacity-80 sway"
					alt=""
				/>
				<h1 className="super-rugged text-[10vh] mt-[0vh] mx-auto w-fit scale-90 font-extralight relative">
					What to submit?
				</h1>
				<div className="flex w-[70vw] mx-auto gap-[5vw] mt-[5vh] pl-[5vw] relative">
					<div className="flex flex-col w-[45vw] h-[60vh] ml-[3vw] mt-[3vh] items-start justify-center text-left px-[3vw] gap-[4.5vh]">
						<h2 className="super-rugged text-[3vh]">
							You must not use AI or any art that you didn't create yourself.
						</h2>
						<h2 className="super-rugged text-[3vh]">
							Under 30% of the website can be art - it's for the art tool, not
							the art itself.
						</h2>
						<h2 className="super-rugged text-[3vh]">
							You should be 18 years old or under to submit
						</h2>
						<h2 className="super-rugged text-[3vh]">
							All of the work and code should be your unique work
						</h2>
					</div>
					<img
						src="/square2.png"
						className="w-[70vw] absolute top-0 left-0"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}
