import styled from "styled-components";

const Button = ({ children, onClick, disabled }) => {
	return (
		<ButtonStyled onClick={onClick} disabled={disabled}>
			{children}
		</ButtonStyled>
	);
};

export default Button;

const ButtonStyled = styled.button`
	margin: 5px;
	padding: 15px 40px;
	cursor: pointer;
	color: white;
	background-color: #2385e6;
	border: none;
	border-radius: 6px;
	transition: background-color 0.3s;

	&:hover {
		background-color: #1d74d0;
	}

	&:active {
		background-color: #1b6db0;
	}

	&:disabled {
		cursor: not-allowed;
		background-color: #b0b0b0;
		color: #7d7d7d;
	}
`;
