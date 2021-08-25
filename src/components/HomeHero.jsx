import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../components/Button";
const HomeHeroStyleContainer = styled.div`
	width: 100%;
	height: 96rem;
	background-color: lightblue;
	position: relative;
	.home-hero-img {
		height: 48rem;
	}
	.hero-img-grid {
		height: 96rem;
		width: 100%;
		display: grid;
		grid-template-columns: auto auto auto;
		position: relative;
		::after {
			position: absolute;
			content: "";
			width: 100%;
			height: 96rem;
			background-color: rgba(43, 43, 43, 0.6);
		}
	}
	.hero-info-container {
		position: absolute;
		top: 42.6rem;
		left: 17rem;
	}
	.hero-text-container {
		color: white;
		max-width: 91rem;
		.hero-main-text {
			font-size: 9.6rem;
			line-height: 11.4rem;
			margin-bottom: 2.4rem;
			position: relative;
		}
		.hero-main-text::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: -2.4rem;
			width: 100%;
			max-width: 88.1rem;
			height: 5px;
			border-radius: 1px;
			background-color: ${(props) => props.theme.lemonadeColor};
		}
		.hero-sub-text {
			font-weight: normal;
			display: inline-block;
			margin-top: 2.4rem;
			font-size: 2.4rem;
			line-height: 2%.8rem;
		}
	}
	.hero-btn-groups {
		position: absolute;
		bottom: 10rem;
		left: 49.6rem;
		button:first-child {
			margin-right: 2.4rem;
		}
	}
`;

const query = graphql`
	{
		allFile(
			filter: { name: { regex: "/home-hero-img/" } }
			sort: { fields: name, order: ASC }
		) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: DOMINANT_COLOR, height: 480)
				}
			}
		}
	}
`;
const HomeHero = () => {
	const data = useStaticQuery(query);
	const {
		allFile: { nodes: heroImgs },
	} = data;
	console.log(heroImgs);

	const displayGridImages = () => {
		return (
			<div className='hero-img-grid'>
				{heroImgs.map((image, index) => {
					const { name } = image;
					const pathToImage = getImage(image);
					return (
						<GatsbyImage
							key={index}
							image={pathToImage}
							alt={name}
						/>
					);
				})}
			</div>
		);
	};

	return (
		<HomeHeroStyleContainer>
			{displayGridImages()}
			<div className='hero-info-container'>
				<div className='hero-text-container'>
					<h1 className='hero-main-text'>Code for San José</h1>
					<span className='hero-sub-text'>
						A group of civic innovators working on making positive
						changes in San José.{" "}
					</span>
				</div>
			</div>
			<div className='hero-btn-groups'>
				<Button btnType='primary-yellow'>Volunteer</Button>
				<Button btnType='secondary-yellow'>
					Learn about Code for San Jose
				</Button>
			</div>
		</HomeHeroStyleContainer>
	);
};

export default HomeHero;
