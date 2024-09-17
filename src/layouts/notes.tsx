import { A } from "@solidjs/router";
import {
	createResource,
	For,
	Match,
	Suspense,
	Switch,
	type ParentComponent,
} from "solid-js";

const fetchNotes = async () => {
	const notes = await new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{
					slug: "note-1",
					title: "Note 1",
				},
				{
					slug: "note-2",
					title: "Note 2",
				},
				{
					slug: "note-3",
					title: "Note 3",
				},
				{
					slug: "note-4",
					title: "Note 4",
				},
			]);
		}, 1000);
	});

	return notes;
};

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
