import { useReducer } from "react";
import Button from "./components/UI/Button";
import styled from "styled-components";
import { ACTIONS } from "./utils/constans";

const counterReducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.ADD_10:
			return state + 10;
		case ACTIONS.ADD_20:
			return state + 20;
		case ACTIONS.SUBTRACT_7:
			return state - 7;
		case ACTIONS.SUBTRACT_3:
			return state - 3;
		case ACTIONS.RESET:
			return 0;
		case ACTIONS.ADD_1:
			return state + 1;
		case ACTIONS.SUBTRACT_1:
			return state - 1;
		default:
			return state;
	}
};

const App = () => {
	const [count, dispatch] = useReducer(counterReducer, 0);

	const isAddDisabled = count >= 40;
	const isSubtractDisabled = count <= 0;

	return (
		<ContainerDiv>
			<h5>Counter: {count}</h5>
			<Button
				onClick={() => dispatch({ type: ACTIONS.ADD_10 })}
				disabled={isAddDisabled}>
				10+
			</Button>
			<Button
				onClick={() => dispatch({ type: ACTIONS.ADD_20 })}
				disabled={isAddDisabled}>
				20+
			</Button>
			<Button
				onClick={() => dispatch({ type: ACTIONS.SUBTRACT_7 })}
				disabled={isSubtractDisabled}>
				7-
			</Button>
			<Button
				onClick={() => dispatch({ type: ACTIONS.SUBTRACT_3 })}
				disabled={isSubtractDisabled}>
				3-
			</Button>
			<Button
				onClick={() => dispatch({ type: ACTIONS.ADD_1 })}
				disabled={isAddDisabled}>
				1+
			</Button>
			<Button
				onClick={() => dispatch({ type: ACTIONS.SUBTRACT_1 })}
				disabled={isSubtractDisabled}>
				1-
			</Button>
			<Button onClick={() => dispatch({ type: ACTIONS.RESET })}>Reset</Button>
		</ContainerDiv>
	);
};

export default App;

const ContainerDiv = styled.h1`
color`;
