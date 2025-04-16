import { Link } from "react-router";

function Navbar() {
	return (
		<div className="h-16 bg-base-200">
			<nav className="flex container mx-auto items-center h-full px-2 md:px-0 bg-base-200">
				<Link to={"/home"} className="font-bold">Illumi</Link>
				<div className="ml-auto flex items-center gap-2"></div>
			</nav>
		</div>
	);
}

export default Navbar;
