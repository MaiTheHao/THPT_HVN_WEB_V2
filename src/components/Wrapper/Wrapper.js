import Tippy from "@tippyjs/react/headless";

function Wrapper({ buttonTitle, stateVisible, setState, ListRenderComponent, ...btnRest }) {
	return (
		<Tippy interactive onClickOutside={() => setState(false)} visible={stateVisible} render={(attrs) => <ListRenderComponent {...attrs}/>}>
			<button onClick={() => setState(!stateVisible)} className="wrapper-btn" {...btnRest}>
				{buttonTitle}
			</button>
		</Tippy>
	);
}

export default Wrapper;
