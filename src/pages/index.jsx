import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Laout";
import Seo from "../components/Seo";
import HomeHero from "../components/HomeHero";
import FeaturedWork from "../components//FeaturedWork/FeaturedWork";
const IndexPageStyleContainer = styled.main`
	width: 100%;
`;

const IndexPage = () => {
	return (
		<Layout>
			<Seo title='Home' />
			<IndexPageStyleContainer>
				<HomeHero />
				<FeaturedWork />
			</IndexPageStyleContainer>
		</Layout>
	);
};

export default IndexPage;
