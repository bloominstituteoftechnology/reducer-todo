import React from "react";

export default function Todo({ text, toggle, completed, i }) {
	return (
		<div
			onClick={toggle(i)}
			style={{ textDecoration: completed ? "line-through" : "none" }}>
			<h3>{text}</h3>
		</div>
	);
}
