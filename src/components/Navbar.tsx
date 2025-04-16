import { useAtom } from "jotai";
import { Link } from "react-router";
import { theme_atom } from "~/client/client_state";
import { motion } from "motion/react";

let curr_theme: "forest" | "nord" = "nord";

function Navbar() {
	let [theme, setTheme] = useAtom(theme_atom);

	return (
		<div className="h-16 bg-base-200/60">
			<nav className="flex container mx-auto items-center h-full px-2 md:px-0 bg-base-200">
				<Link
					to={"/home"}
					className="font-bold"
				>
					Illumi
				</Link>
				<div className="ml-auto flex items-center gap-2 ">
					<div
						className="w-18 outline outline-base-content/25 bg-base-100 p-2 flex items-center rounded-full cursor-pointer relative py-4"
						onClick={() => {
							if (theme === "nord") {
								setTheme("forest");
							} else {
								setTheme("nord");
							}
						}}
					>
						<motion.div
							className="bg-base-100 outline size-5 rounded-full absolute"
							animate={{
								x: theme === "nord" ? 36 : 0, // adjust `36` to fit your toggle's size
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 20,
							}}
						/>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
