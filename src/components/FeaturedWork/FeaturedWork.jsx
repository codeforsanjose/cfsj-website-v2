import * as React from "react";
import styled from "styled-components";
import Button from "../Button";
const FeaturedWorkStyleContainer = styled.div`
	margin: 12rem 0;
	padding: 0 15.2rem;
	h3 {
		color: #181a18;
		font-weight: 500;
		font-size: 4.8rem;
		line-height: 5.7rem;
	}
`;

const FeaturedWork = () => {
	return (
		<FeaturedWorkStyleContainer>
			<h3>Featured Work</h3>
		</FeaturedWorkStyleContainer>
	);
};

export default FeaturedWork;
