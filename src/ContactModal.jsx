import React from "react";
import { useState } from "react";

// icons 
import { BsLinkedin, BsGithub, BsPhoneFill } from "react-icons/bs";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
const ContactModal = () => {
	const [modal, setModal] = useState(false);

	return (
		<div>
			<img
				src="./contact.png"
				alt=""
				className="w-20 h-20 absolute top-[45%] right-3 contactAni"
				onClick={() => setModal(!modal)}
				style={{ cursor: "url(./contact.png),auto" }}
			/>

			{/* modal box for contact  */}
			{modal && (
				<div className="w-screen h-screen flex items-center justify-center">
					<div className="w-96 h-72 bg-white bg-opacity-30 dark:bg-primaryLight backdrop-blur-md shadow-sm rounded-lg py-11 px-5 space-y-8">
						<a
							href="https://www.linkedin.com/in/thin-htet-htet-zaw-073491241"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2"
						>
							<BsLinkedin className="w-6 h-6 text-[#0077B5]" />
							<p className="font-semibold text-gray-500">
								LinkedIn : Thin Htet Htet Zaw
							</p>
						</a>
						<a
							href="https://github.com/thinhtethtetzaw"
							target="_blank"
							rel="noreferrer"
							className="flex items-center gap-2"
						>
							<BsGithub className="w-6 h-6 text-primaryDark" />
							<p className="font-semibold text-gray-500">Github : Berry</p>
						</a>
						<a
							href="mailto: thinhtethtetzaw778@gmail.com"
							className="flex items-center gap-2"
						>
							<EnvelopeIcon className="w-6 h-6 text-primaryDark" />
							<p className="font-semibold text-gray-500">
								Email : thinhtethtetzaw778@gmail.com
							</p>
						</a>
						<a
							href="tel: +959962079785"
							target="_blank"
							className="flex items-center gap-2"
							rel="noreferrer"
						>
							<BsPhoneFill className="w-6 h-6 text-[#61a9a6]" />
							<p className="font-semibold text-gray-500">
								Phone : +959962079785
							</p>
						</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default ContactModal;
