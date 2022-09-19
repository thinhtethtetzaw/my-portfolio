import { useState, useEffect } from "react";

// icons 
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import ContactModal from "./ContactModal";
import Contact from "./Contact";

function App() {
	const [theme, setTheme] = useState(localStorage.theme || "light");

	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	const toggleTheme = () => {
		if (localStorage.theme === "dark") {
			localStorage.theme = "light";
			setTheme("light");
			document.documentElement.classList.remove("dark");
		} else {
			localStorage.theme = "dark";
			setTheme("dark");
			document.documentElement.classList.add("dark");
		}
	};
	return (
		<div className="App">
			<div className="w-screen h-screen relative bg-primaryLight dark:bg-primaryDark text-primaryDark dark:text-primaryLight">
        <div className="w-screen h-14 p-2 px-4 bg-[#61A9A6] dark:bg-[#97e6e2] text-white dark:text-primaryDark bg-opacity-90 flex justify-between items-center">
          <button className="flex items-center gap-2" onClick={toggleTheme}>
            <p className="text-[0.8rem] font-bold uppercase text-primaryLight dark:text-primaryDark">
              {theme === "dark" && "Light"}
              {theme === "light" && "Dark"}
            </p>
            {theme === "dark" && (
              <SunIcon className="text-primaryLight dark:text-primaryDark w-6 h-6" />
            )}
            {theme === "light" && (
              <MoonIcon className="text-primaryLight dark:text-primaryDark w-5 h-5" />
            )}
          </button>
          <ul className="flex gap-10">
            <li>About</li>
            <li>My Skills</li>
            <li>Edu & Exp</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <ContactModal/>
        <Contact/>
			</div>
		</div>
	);
}

export default App;
