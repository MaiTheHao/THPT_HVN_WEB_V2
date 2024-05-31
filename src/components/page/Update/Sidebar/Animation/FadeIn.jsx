import { animated, useSpring } from "@react-spring/web";
import { useRef } from "react";

const FadeIn = ({ isVisible, maxWidth, children, ...rest }) => {
	const divTag = useRef();
	const styles = useSpring({
		opacity: isVisible ? 1 : 0,
		width: isVisible ? `${maxWidth}` : `0`,
		fontSize: isVisible ? `1em` : `0`,
		onStart: () => {if(isVisible){divTag.current.style.display = "block"}},
		onRest:() => {if(!isVisible){divTag.current.style.display = "none"}},
	});

	return (
		<animated.div {...rest} ref={divTag} style={styles}>
			{children}
		</animated.div>
	);
};

export default FadeIn;