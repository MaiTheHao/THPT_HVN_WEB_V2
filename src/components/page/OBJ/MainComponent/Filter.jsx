import React from 'react'

function FilterChoice({ title, children }) {
	const titleClassName = "filterChoiceTitle";
	const filterChoiceBox_className = "filterChoice";
	return (
		<>
			<span className={titleClassName}>{title}</span>
			<div className={filterChoiceBox_className}>{children}</div>
		</>
	);
}

function FilterChoiceOption({ title, children }) {
	const filterChoiceOption = "filterChoiceOption";
	return (
		<label className={filterChoiceOption}>
			{title && <span>{title}</span>}
			{children}
		</label>
	);
}

export {FilterChoice, FilterChoiceOption}