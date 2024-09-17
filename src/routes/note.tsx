import { useParams } from "@solidjs/router";

export const Note = () => {
	const params = useParams();

	return (
		<div>
			<h1>{params.slug}</h1>
			<p>I am just a note</p>
		</div>
	);
};
