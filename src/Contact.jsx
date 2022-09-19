import React from "react";

// icons
import { BsLinkedin, BsGithub, BsPhoneFill } from "react-icons/bs";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Contact = () => {
	return (
		<div>
			<p className="text-2xl text-center font-semibold text-[#61a9a6] dark:text-primaryLight mt-3">
				Contact
			</p>
			<div className="w-full flex justify-center">
				<button className="bg-[#61a9a6] text-white py-2 px-3 rounded-sm mt-2">
					Get In Touch !
				</button>
			</div>
			<div className="flex items-center justify-center gap-3 mt-5">
				<a
					href="https://www.linkedin.com/in/thin-htet-htet-zaw-073491241"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-2"
				>
					<BsLinkedin className="w-6 h-6 text-[#0077B5] dark:text-primaryLight" />

					{/* <p className="font-semibold text-gray-500">
						LinkedIn : Thin Htet Htet Zaw
					</p> */}
				</a>
				<a
					href="https://github.com/thinhtethtetzaw"
					target="_blank"
					rel="noreferrer"
					className="flex items-center gap-2"
				>
					<BsGithub className="w-6 h-6 text-primaryDark dark:text-primaryLight" />

					{/* <p className="font-semibold text-gray-500">Github : Berry</p> */}
				</a>
				<a
					href="mailto: thinhtethtetzaw778@gmail.com"
					className="flex items-center gap-2"
				>
					<EnvelopeIcon className="w-6 h-6 text-primaryDark dark:text-primaryLight" />
{/* 
					<p className="font-semibold text-gray-500">
						Email : thinhtethtetzaw778@gmail.com
					</p> */}
				</a>
				<a
					href="tel: +959962079785"
					target="_blank"
					className="flex items-center gap-2"
					rel="noreferrer"
				>
					<BsPhoneFill className="w-6 h-6 text-[#61a9a6] dark:text-primaryLight" />

					{/* <p className="font-semibold text-gray-500">Phone : +959962079785</p> */}
				</a>
			</div>
			<div className="bg-primaryDark dark:bg-primaryLight text-primaryLight dark:text-primaryDark bg-opacity-80 flex flex-col items-center justify-center text-sm mt-3 py-2">
				<p>Designed & Developed by Anirudha Singla .</p>
				<p>Copyright 2022, ALL RIGHTS RESERVED.</p>
			</div>
		</div>
	);
};

export default Contact;
