import React from "react";

function SearchResults(){
	return<p>Result</p>
}

function SearchBar(){
	return<p>SEARCH</p>
}

function Container() {
	return <div id="sidebar_container">
		<SearchBar/>
		<SearchResults/>
	</div>;
}

function SideBar() {
	return (
		<div id="webSideBar">
			<Container></Container>
		</div>
	);
}

export default SideBar;
