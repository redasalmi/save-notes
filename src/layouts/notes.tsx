import { A } from "@solidjs/router";
import type { ParentComponent } from "solid-js";

export const NotesLayout: ParentComponent = (props) => {
	return (
		<div>
			<nav>
				<A href="/notes/note-1" activeClass="underline">
					note 1
				</A>
				<A href="/notes/note-2" activeClass="underline">
					note 2
				</A>
			</nav>
			{props.children}
		</div>
	);
};
