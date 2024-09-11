import { useState } from "react";
import styles from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewPost({ onAddPost }) {
	const [body, setBody] = useState("");
	const [text, setText] = useState("");

	const onChangeBody = (event) => setBody(event.target.value);
	const onChangeText = (event) => setText(event.target.value);
	const onSubmitForm = (event) => {
		event.preventDefault();
		const postData = {
			body: body,
			author: text,
		};
		onAddPost(postData);
		onCancel();
	};

	return (
		<Modal>
			<form className={styles.form} onSubmit={onSubmitForm}>
				<p>
					<label htmlFor="body">Text</label>
					<textarea id="body" required rows={3} onChange={onChangeBody} />
				</p>
				<p>
					<label htmlFor="name">Your name</label>
					<input type="text" id="name" required onChange={onChangeText} />
				</p>
				<p className={styles.actions}>
					<Link to=".." type="button">
						Cancel
					</Link>
					<button>Submit</button>
				</p>
			</form>
		</Modal>
	);
}

export default NewPost;
