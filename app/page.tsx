import Image from "next/image";

export default function Home() {
	return (
		<div className="relative w-full min-h-screen">
			<nav className="fixed z-2 top-[50%] translate-y-[-50%] left-[3vw] border-l-2 border-r-[0vh] py-[3vh] gap-[2vh] flex flex-col">
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
			</nav>
			<div className="mx-auto mt-[22vh] w-fit relative z-2">
				<img
					src="/circle.png"
					className="w-full scale-140 absolute top-0 left-0 -translate-y-[2vh]"
					alt=""
				/>
				<h1 className="super-rugged text-[16vh] scale-90 font-extralight relative">
					Scribble
				</h1>
			</div>
			<p className="mx-auto relative z-2 w-fit mt-[11vh] super-rugged text-[5vh] pr-[10vw]">
				Create Art-Related Website -
			</p>
			<p className="mx-auto relative z-2 w-fit mt-[-1vh] super-rugged text-[7vh] pl-[20vw]">
				get a Sketchbook
			</p>
			<p className="mx-auto relative z-2 w-fit mt-[15vh] super-rugged text-[5vh]">
				Scroll
			</p>
			<img
				src="/crumbled.jpg"
				className="fixed top-0 left-0 w-full h-screen z-0 opacity-60"
				alt=""
			/>
			<img
				src="/spin.png"
				className="absolute bottom-[-8vh] right-[2vw] w-[17vw] opacity-70 sway"
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
				src="/stain.png"
				className="absolute top-[3vh] left-[25vw] w-[22vw] opacity-70 sway3"
				alt=""
			/>
			<img
				src="/spin3.png"
				className="absolute top-[50vh] right-[3vw] scale-x-70 w-[25vw] opacity-90 sway3"
				alt=""
			/>
			<img
				src="/swirl.png"
				className="absolute bottom-[-10vh] left-[13vw] w-[10vw] opacity-70 sway3"
				alt=""
			/>
			<img
				src="/swirl4.png"
				className="absolute left-[6vw] top-[-3vh] w-[10vw] opacity-70 sway rotate-80"
				alt=""
			/>
		</div>
	);
}
