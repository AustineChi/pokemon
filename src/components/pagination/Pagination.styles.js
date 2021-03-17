import styled, { keyframes } from "styled-components";

const buttonAnimate = keyframes`
    0% {  opacity: 0;  translateY(40px) }
    100% {  opacity: 1; transform: translate(0) }
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 50px 0;
	box-sizing: border-box;
`;

export const Button = styled.button`
        cursor: pointer;
        background-color: #2f3337;
        border: 0;
        width: 100px;
        margin: 5px 0;
        color: white;
        border-radius: 0.25rem;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 15px;
        padding: 10px;
        outline: none;
        animation: ${buttonAnimate} .7s ease-out .5s;
        animation-fill-mode: backwards;
        &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3)
        }
        &:active {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            transform: translateY(4px);
        }
}
`;
