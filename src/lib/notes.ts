import { invoke } from "@tauri-apps/api/core";

export async function fetchNotes() {
	const notes = await invoke<ArrayBuffer>("read_notes_file");
	const decoder = new TextDecoder();
	const str = decoder.decode(notes);
	const json = JSON.parse(str) as Array<{ slug: string; title: string }>;

	return json;
}
