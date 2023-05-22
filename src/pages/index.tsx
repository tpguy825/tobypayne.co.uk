import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import font from "next/font/local";
import { useLongHover } from "@tpguy825/clicker";
import { Partytown } from "@builder.io/partytown/react";
import React from "react";

import Github from "~/images/icons/github";
import Twitter from "~/images/icons/twitter";
import Twitch from "~/images/icons/twitch";
import Youtube from "~/images/icons/youtube";
import Email from "~/images/icons/email";
import Pgp from "~/images/icons/pgp";
import ProfilePicture from "~/images/pfp.png";
import rickroll from "~/images/notarickroll.gif";

const inter = font({
	src: "./fonts/Inter-roman.var.woff2",
	variable: "--font-inter",
});

export default function Home(): JSX.Element {
	return (
		<>
			<Head>
				<title>Toby Payne</title>
				<meta name="description" content="Personal website" />
				<link rel="icon" href={ProfilePicture.src} />
				<link rel="apple-touch-icon" href="favicon.ico" />

				<Partytown forward={["dataLayer.push"]} />
			</Head>
			<Scripts />
			<main className={`flex w-full ${inter.variable} font-sans`}>
				<OtherBitsMobile />
				<OtherBitsDesktop />
			</main>
		</>
	);
}

function Scripts(): JSX.Element {
	return (
		<>
			{/* eslint-disable-next-line @next/next/next-script-for-ga */}
			<script
				async
				type="text/partytown"
				src="https://www.googletagmanager.com/gtag/js?id=G-E27YNK7NFH"></script>
			<script async type="text/partytown" src="https://www.clarity.ms/tag/h7cbux214u"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', 'G-E27YNK7NFH');`,
				}}></script>
			<script async type="text/partytown" src="./clarity.bundle.js"></script>
			<script
				type="text/partytown"
				dangerouslySetInnerHTML={{
					__html: `
    					(function(c,l,a,r,i,t,y){
    						c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    						// t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    						// y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    					})(window, document, "clarity", "script", "h7cbux214u");`,
				}}></script>
		</>
	);
}

function LinkDivider(): JSX.Element {
	return (
		<div className="mx-2 my-auto inline-block h-4 w-0 rounded-full border-x-[0.75px] border-gray-400"></div>
	);
}

function Links(): JSX.Element {
	return (
		<>
			<Link href="https://github.com/tpguy825" aria-label="Github">
				<Github className="my-auto inline-block" />
			</Link>
			<LinkDivider />
			<Link href="https://twitter.com/tpguy825" aria-label="Twitter">
				<Twitter className="my-auto inline-block" />
			</Link>
			<LinkDivider />
			<Link href="https://twitch.tv/tpguy825" aria-label="Twitch">
				<Twitch className="my-auto inline-block" />
			</Link>
			<LinkDivider />
			<Link href="https://youtube.com/@tobypayne" aria-label="Youtube">
				<Youtube className="my-auto inline-block" />
			</Link>
			<LinkDivider />
			<Link href="mailto:toby@tobypayne.co.uk" aria-label="Email">
				<Email className="my-auto inline-block" />
			</Link>
			<LinkDivider />
			<Link href="/toby@tobypayne.co.uk.pgp" aria-label="PGP key">
				<Pgp className="my-auto inline-block" />
			</Link>
		</>
	);
}

function ProfileImage(): JSX.Element {
	const [isRickroll, handlers] = useLongHover(2000);
	return (
		<Image
			height={80}
			width={80}
			priority
			{...handlers}
			className="rounded-[50%]"
			src={isRickroll ? rickroll : ProfilePicture}
			alt="Profile image"
		/>
	);
}

function OtherBitsDesktop(): JSX.Element {
	return (
		<div className="m-4 hidden max-h-[8rem] w-full gap-3 rounded-2xl bg-gray-200 p-5 shadow-sm sm:flex">
			<div className="w-[5rem]">
				<ProfileImage />
			</div>
			<div className="my-auto">
				<h1 className="text-3xl font-extrabold sm:mb-2 sm:text-5xl">Toby Payne</h1>
				<p>Software Developer</p>
			</div>
			<div className="m-auto mr-2 block justify-end">
				<Links />
			</div>
		</div>
	);
}
function OtherBitsMobile(): JSX.Element {
	return (
		<div className="m-4 flex max-h-[8rem] w-full gap-3 rounded-2xl bg-gray-200 p-5 shadow-sm sm:hidden">
			<div className="w-[5rem]">
				<ProfileImage />
			</div>
			<div className="my-auto">
				<h1 className=" text-3xl font-extrabold sm:mb-2 sm:text-5xl">Toby Payne</h1>
				<p className="">Software Developer</p>
				<Links />
			</div>
		</div>
	);
}
