import React from "react";
import "./about.css";

const About = () => {
	return (
		<div className="sideNote2 container col-12 col-md-6 ms-md-2  mt-sm-5">
			<p className="forTitle">About</p>
			<h1>Evangadi Networks Q&A</h1>
			<p>
				Evangadi Forum is a web platform for asking and answering questions,
				inspired by Stack Overflow. It uses the MERN stack and MySQL to create a
				dynamic and secure website. Users can sign up, post queries, provide
				solutions, and join conversations. The site has a flexible design and a
				search function that help users access the information they need. The
				site encourages a collaborative culture where users can exchange ideas
				and learn from each other. The MySQL database effectively handles user
				data, questions, answers, and comments. Users can interact with the
				content by commenting, voting, and rating, which reward high-quality
				posts. Evangadi Tech has a user-friendly interface made with React,
				which works well on different devices. It aims to build a lively
				community where users can engage in valuable interactions and share
				knowledge.
			</p>
			<button className="btn1">HOW IT WORKS</button>
		</div>
	);
};

export default About;
