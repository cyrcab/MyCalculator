import styled from "styled-components";

const Calculator = () => {
	return (
		<Container>
			<ResultContainer></ResultContainer>
			<ButtonsContainer>
				<Row>
					<Button>AC</Button>
					<Button>+ / -</Button>
					<Button>%</Button>
					<Button>/</Button>
				</Row>
				<Row>
					<Button>7</Button>
					<Button>8</Button>
					<Button>9</Button>
					<Button>X</Button>
				</Row>
				<Row>
					<Button>4</Button>
					<Button>5</Button>
					<Button>6</Button>
					<Button>-</Button>
				</Row>
				<Row>
					<Button>1</Button>
					<Button>2</Button>
					<Button>3</Button>
					<Button>+</Button>
				</Row>
				<Row>
					<Button>0</Button>
					<Button></Button>
					<Button>,</Button>
					<Button> = </Button>
				</Row>
			</ButtonsContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: black;
	padding: 0.5em;
	width: 50%;
`;

const ResultContainer = styled.div`
	width: 100%;
	height: 50px;
	background-color: green;
	margin-bottom: 0.5em;
`;

const ButtonsContainer = styled.div`
	width: 100%;
	height: 300px;
	background-color: red;
`;
const Row = styled.div`
	width: 100%;
	height: 60px;
	border-bottom: 1px solid black;
	display: flex;
`;
const Button = styled.div`
	border-right: 1px solid black;
	width: 25%;
    background-color: blue;
	font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
	:hover {
		background-color: lightblue;
		cursor: pointer;
	}
`;

export default Calculator;
