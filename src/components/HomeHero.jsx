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
		bottom: 34.7rem;
		left: 17rem;
		display: flex;
	}
	.hero-text-container {
		color: white;
		max-width: 91rem;
		.hero-main-text {
			margin-top: 0;
			font-size: 9.6rem;
			line-height: 11.4rem;
			margin-bottom: 1.5rem;
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
			font-weight: 400;
			display: inline-block;
			margin-top: 1.2rem;
			font-size: 2.4rem;
			line-height: 2.8rem;
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

	@media screen and (max-width: 500px) {
		height: 58.3rem;
		.hero-img-grid {
			height: 58.3rem;
			::after {
				height: 58.3rem;
			}
		}
		.hero-info-container {
			bottom: 21rem;
			left: 2rem;
			.hero-main-text {
				margin-top: 0;
				width: 25rem;
				font-size: 4.8rem;
				line-height: 5.7rem;
			}

			.hero-main-text::after {
				width: 33rem;
				height: 3px;
			}

			.hero-sub-text {
				font-size: 1.8rem;
			}
		}
		.hero-btn-groups {
			display: flex;
			flex-direction: column;
			align-items: center;
			left: 3.5rem;
			bottom: 4.8rem;
			button:first-child {
				margin: 0 0 2.6rem 0;
			}
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
