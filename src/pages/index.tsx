import { useLayoutEffect } from "react";
import { useNavigate } from "react-router";

function index() {
	let nav = useNavigate();

	useLayoutEffect(() => {
		nav("/home");
	}, []);
	return <div>index</div>;
}

export default index;
