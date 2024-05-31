import { animated, useSpring } from '@react-spring/web';
import React from 'react'
import useUpdateContext from '../../../../useUpdateContext';
import { faBars, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarOpenBtn = () => {
    const {sidebarVisible, setSidebarVisible} = useUpdateContext();
	const styles = useSpring({
		opacity: !sidebarVisible ? 1 : 0,
		display: !sidebarVisible ? 'block' : 'none',
	});

	return (
		<animated.button style={styles} onClick={()=>setSidebarVisible(!sidebarVisible)} className="openBtn sidebarActionBtn">
			<FontAwesomeIcon icon={faBars} />
			<FontAwesomeIcon icon={faCircleRight}/>
		</animated.button>
	);
};

export default SidebarOpenBtn