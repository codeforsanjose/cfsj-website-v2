import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../components/Button";
export const NavbarStyleContainer = styled.div`
	width: 100vw;
	height: 7.2rem;
	position: fixed;
	top: 0;
	transition: background-color 0.25s;
	background-color: rgba(27, 38, 59, 0.5);
	z-index: 999;
	> nav {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 9.6rem;
		font-weight: 500;

		> .nav-logo {
			height: 3.8rem;
			max-width: 41.2rem;
			margin-right: 28.6%;
		}
		> .nav-md-menu-icon {
			display: none;
		}
		> .nav-md-menu-icon {
			cursor: pointer;
		}
		> .nav-links {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex: 1;

			transition: top 0.3s ease-in-out;
		}

		.nav-link {
			font-size: 1.8rem;
			line-height: 2.1rem;
			font-weight: 500;
			color: white;
			&:hover {
				color: ${(props) => props.theme.fogColor};
			}
		}
	}
	@media screen and (max-width: 992px) {
		> nav {
			padding: 0 3.2rem;
			> .nav-logo {
				margin-right: 0;
			}
			> .nav-md-menu-icon {
				display: block;
				margin-left: auto;
			}
			> .nav-links {
				position: absolute;
				width: 100%;
				height: 100vh;
				top: -150vh;
				left: 0;
				flex-direction: column;
				background-color: ${(props) => props.theme.navColor};
				padding-top: 9.1rem;
				justify-content: start;
				> .nav-link {
					margin-bottom: 5.6rem;
				}
			}
			> .show-md-links {
				top: 0;
			}
		}
	}
`;
const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleNavbarClick = () => {
		if (show) {
			setShow(!show);
		}
	};

	return (
		<NavbarStyleContainer>
			<nav>
				<div className='nav-logo'>
					<Link to='/'>
						<StaticImage
							src='../assets/icon/cfsj-simplified-icon.svg'
							alt='cfsj icon'
							placeholder='tracedSVG'
						/>
					</Link>
				</div>
				<StaticImage
					src='../assets/icon/hamburger-menu-icon.svg'
					alt='menu icon'
					placeholder='tracedSVG'
					className='nav-md-menu-icon'
					onClick={() => setShow(!show)}
				/>
				<div
					className={show ? "nav-links show-md-links" : "nav-links"}
					onClick={handleNavbarClick}
				>
					<Link
						to='/work'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setShow(false)}
					>
						Our Work
					</Link>
					<Link
						to='/get-involved'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setShow(false)}
					>
						Get Involved
					</Link>
					<Link
						to='/tags'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setShow(false)}
					>
						Events
					</Link>
					<Link
						to='/about'
						className='nav-link'
						activeClassName='active-link'
						onClick={() => setShow(false)}
					>
						About Us
					</Link>

					<Button btnType='donate'>Donate</Button>
				</div>
			</nav>
		</NavbarStyleContainer>
	);
};

export default Navbar;
