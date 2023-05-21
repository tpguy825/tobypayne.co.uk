import { type NextPage } from "next";
import Head from "next/head";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import font from "next/font/local";
import { useLongHover } from "@tpguy825/clicker";
import { Partytown } from "@builder.io/partytown/react";

import Github from "~/images/icons/github.svg";
import Twitter from "~/images/icons/twitter.svg";
import Twitch from "~/images/icons/twitch.svg";
import Youtube from "~/images/icons/youtube.svg";
import Email from "~/images/icons/email.svg";
import Pgp from "~/images/icons/pgp.svg";
import ProfilePicture from "~/images/pfp.png";
import rickroll from "~/images/notarickroll.webp";
import React from "react";
import { env } from "~/env.mjs";

const inter = font({
	src: "./fonts/Inter-roman.var.woff2",
	variable: "--font-inter",
});

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Toby Payne</title>
				<meta name="description" content="" />
				<link rel="icon" href={ProfilePicture.src} />

				<Partytown debug={true} forward={["dataLayer.push"]} />
			</Head>
			{/* eslint-disable-next-line @next/next/next-script-for-ga */}
			<script
				async
				type="text/partytown"
				src="https://www.googletagmanager.com/gtag/js?id=G-E27YNK7NFH"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'G-E27YNK7NFH');`,
				}}></script>
			<main className={`flex w-full ${inter.variable} font-sans`}>
				<OtherBitsMobile />
				<OtherBitsDesktop />
			</main>
		</>
	);
};

export default Home;

function LinkDivider() {
	return (
		<div className="mx-2 my-auto inline-block h-4 w-0 rounded-full border-x-[0.75px] border-gray-400"></div>
	);
}

function Links() {
	return (
		<>
			<Link href="https://github.com/tpguy825">
				<Image
					className="my-auto inline-block"
					alt="GitHub"
					title="GitHub"
					src={Github as StaticImageData}
				/>
			</Link>
			<LinkDivider />
			<Link href="https://twitter.com/tpguy825">
				<Image
					className="my-auto inline-block"
					alt="Twitter"
					title="Twitter"
					src={Twitter as StaticImageData}
				/>
			</Link>
			<LinkDivider />
			<Link href="https://twitch.tv/tpguy825">
				<Image
					className="my-auto inline-block"
					alt="Twitch"
					title="Twitch"
					src={Twitch as StaticImageData}
				/>
			</Link>
			<LinkDivider />
			<Link href="https://youtube.com/@tobypayne">
				<Image
					className="my-auto inline-block"
					alt="YouTube"
					title="YouTube"
					src={Youtube as StaticImageData}
				/>
			</Link>
			<LinkDivider />
			<Link href="mailto:toby@tobypayne.co.uk">
				<Image className="my-auto inline-block" alt="Email" title="Email" src={Email as StaticImageData} />
			</Link>
			<LinkDivider />
			<Link href="/toby@tobypayne.co.uk.pgp">
				<Image className="my-auto inline-block" alt="PGP" title="PGP key" src={Pgp as StaticImageData} />
			</Link>
		</>
	);
}

function ProfileImage() {
	const [isRickroll, handlers] = useLongHover(2000);
	return (
		<Image
			height={80}
			width={80}
			priority
			{...handlers}
			className="rounded-[50%]"
			src={isRickroll && env.NODE_ENV !== "development" ? rickroll : ProfilePicture}
			alt="Profile image"
		/>
	);
}

function OtherBitsDesktop() {
	return (
		<div className="m-4 hidden max-h-[8rem] w-full gap-3 rounded-2xl bg-gray-200 p-5 shadow-sm sm:flex">
			<div className="w-[5rem]">
				<ProfileImage />
			</div>
			<div className="my-auto">
				<h1 className=" text-3xl font-extrabold sm:mb-2 sm:text-[2.8rem] md:text-5xl">Toby Payne</h1>
				<p className="">Software Developer</p>
			</div>
			<div className="m-auto mr-2 block justify-end">
				<Links />
			</div>
		</div>
	);
}
function OtherBitsMobile() {
	return (
		<div className="m-4 flex max-h-[8rem] w-full gap-3 rounded-2xl bg-gray-200 p-5 shadow-sm sm:hidden">
			<div className="w-[5rem]">
				<ProfileImage />
			</div>
			<div className="my-auto">
				<h1 className=" text-3xl font-extrabold sm:mb-2 sm:text-[2.8rem] md:text-5xl">Toby Payne</h1>
				<p className="">Software Developer</p>
				<Links />
			</div>
		</div>
	);
}
