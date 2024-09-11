import { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
	const [posts, setPosts] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setIsFetching(true);
			const response = await fetch("http://localhost:8080/posts");
			const resData = await response.json();
			setPosts(resData.posts);
			setIsFetching(false);
		};

		fetchPosts();
	}, []);

	const addPostHandler = (postData) => {
		fetch("http://localhost:8080/posts", {
			method: "POST",
			body: JSON.stringify(postData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setPosts((existingPosts) => [postData, ...existingPosts]);
	};

	return (
		<>
			{!isFetching && posts.length > 0 && (
				<ul className={styles.posts}>
					{posts.map((post) => (
						<Post key={post.author} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{!isFetching && posts.length === 0 && (
				<div style={{ textAlign: "center", color: "white" }}>
					<h2>There are no posts yet.</h2>
					<p>Start adding some!</p>
				</div>
			)}
			{isFetching && (
				<div style={{ textAlign: "center", color: "white" }}>
					<p>Loading Posts...</p>
				</div>
			)}
		</>
	);
}

export default PostList;