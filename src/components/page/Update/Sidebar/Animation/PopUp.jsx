import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";

const PopUp = ({ isExtended, sideBarMaxWidth, children, ...rest }) => {
	const divTag = useRef();
	const styles = useSpring({
		width: isExtended ? `${sideBarMaxWidth}` : `100%`,
	});

	return (
		<animated.div {...rest} ref={divTag} style={styles}>
			{children}
		</animated.div>
	);
};

export default PopUp;