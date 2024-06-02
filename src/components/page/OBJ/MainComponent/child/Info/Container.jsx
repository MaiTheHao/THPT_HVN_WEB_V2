import React from 'react'
import Details from './Details';
import Avatar from './Avatar';
import ObjProp from './ObjProp';

function Container({ avatar, name, role, setUpForm }){
	return (
		<div id="container-info" className="container">
			<div className="container-left">
				<Avatar avatar={avatar} />
				<Details name={name} role={role} />
			</div>
			<div className="container-right">
				{setUpForm.map((obj) => (
					<ObjProp key={obj.id || Math.random()} {...obj} />
				))}
			</div>
		</div>
	);
};

export default Container