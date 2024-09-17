import { A } from "@solidjs/router";
import {
	createResource,
	For,
	Match,
	Suspense,
	Switch,
	type ParentComponent,
} from "solid-js";
import { fetchNotes } from "../lib/notes";

export const NotesLayout: ParentComponent = (props) => {
	const [notes] = createResource(fetchNotes);

	return (
		<div>
			<Suspense>
				<Switch>
					<Match when={notes.error}>
						<span>Error: {notes.error.message}</span>
					</Match>
					<Match when={notes()}>
						<nav class="flex gap-2">
							<For each={notes()}>
								{(note) => (
									<A href={`/notes/${note.slug}`} activeClass="underline">
										{note.title}
									</A>
								)}
							</For>
						</nav>
					</Match>
				</Switch>
			</Suspense>

			{props.children}
		</div>
	);
};
