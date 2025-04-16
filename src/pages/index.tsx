import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { theme_atom } from "~/client/client_state";

function Index() {
	let theme = useAtomValue(theme_atom);

	let nav = useNavigate();

	useEffect(() => {
		nav("/home", { replace: true }); // replace: true = no back button history
	}, [nav]);

	return (
		<div
			className="min-h-dvh flex items-center  justify-center"
			data-theme={theme}
		>
			<h2 className="text-5xl">loading</h2>
		</div>
	);
}

export default Index;
