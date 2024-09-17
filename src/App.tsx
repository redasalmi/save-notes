import { Router, Route } from "@solidjs/router";
import { NotesLayout } from "./layouts/notes";
import { Notes } from "./routes/notes";
import { Note } from "./routes/note";

// example of how to invoke a rust function
// async function greet() {
// 	// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// 	setGreetMsg(await invoke("greet", { name: name() }));
// }

export const App = () => {
	return (
		<Router>
			<Route path="/notes" component={NotesLayout}>
				<Route path="/" component={Notes} />
				<Route path="/:slug" component={Note} />
			</Route>
		</Router>
	);
};
