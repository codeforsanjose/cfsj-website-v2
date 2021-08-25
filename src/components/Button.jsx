import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "gatsby";
export const ButtonStyleContainer = styled.button`
	white-space: nowrap;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	outline: none;
	font-weight: 500;
	border-radius: 6rem;
	font-size: 2rem;
	line-height: 2.4rem;
	font-family: "Rubik", sans-serif;
	color: white;
	border: none;
	padding: 1.6rem 3.2rem;
	background-color: ${(props) => props.theme.navColor};

	&.btn-radius-normal {
		border-radius: 0;
	}

	&.btn-donate {
		background-color: ${(props) => props.theme.skyColor};
		padding: 0.95rem 2.3rem;
		font-weight: 700;
		line-height: 2.1rem;
		&:hover {
			box-shadow: 2px 4px 0px #4c7894;
		}
	}

	&.btn-primary-yellow {
		background-color: ${(props) => props.theme.lemonadeColor};
		color: black;
		&:hover {
			box-shadow: 2px 4px 0px #b0b24b;
		}
	}

	&.btn-secondary-yellow {
		background: rgba(255, 255, 255, 0.15);
		border: 1px solid ${(props) => props.theme.lemonadeColor};
		color: ${(props) => props.theme.lemonadeColor};
		&:hover {
			box-shadow: 2px 4px 0px #b0b24b;
		}
	}
	&:hover {
		box-shadow: 2px 4px 0px #67819f;
	}
	&:focus {
		border: 1px solid #ffffff;
	}
	&[disabled] {
		cursor: not-allowed;
		background-color: #cecece;
		color: #a7a7a7;
		font-weight: 500;
		border: 1px solid #a7a7a7;
		box-shadow: none !important;

		> * {
			pointer-events: none;
		}
	}
`;

const Button = (props) => {
	const {
		className,
		disabled,
		btnType,
		children,
		link,
		href,
		style,
		htmlType,
		buttonRadius,
		...restProps
	} = props;
	const btnRadiusClass = `btn-radius-${buttonRadius}`;
	const btnTypeClass = `btn-${btnType}`;

	const allBtnClassesName = `btn ${btnRadiusClass} ${btnTypeClass} ${className}`;

	console.log(allBtnClassesName);

	if (link) {
		return (
			<ButtonStyleContainer
				as={Link}
				className={allBtnClassesName}
				to={link}
				style={style}
				{...restProps}
			>
				{children}
			</ButtonStyleContainer>
		);
	}
	if (href) {
		return (
			<ButtonStyleContainer
				as='a'
				className={allBtnClassesName}
				href={href}
				style={style}
				{...restProps}
			>
				{children}
			</ButtonStyleContainer>
		);
	}

	return (
		<ButtonStyleContainer
			className={allBtnClassesName}
			disabled={disabled}
			{...restProps}
			style={style}
			type={htmlType}
		>
			{children}
		</ButtonStyleContainer>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	/**
	 *  'donate' | 'primary-yellow' | 'secondary-yellow' |  'primary-blue'
	 */
	btnType: PropTypes.string,
	children: PropTypes.node.isRequired,
	/**
	 * If we have this link, the we render it as Link tag
	 */
	link: PropTypes.string,
	/**
	 * If we have this link, the we render it as a tag
	 */
	href: PropTypes.string,
	/**
	 * css inline style
	 */
	style: PropTypes.object,
	/**
	 * 'submit' | 'reset' | 'button'
	 */
	htmlType: PropTypes.string,
	/**
	 *  'normal' | 'circle'
	 */
	buttonRadius: PropTypes.string,
};
Button.defaultProps = {
	className: "",
	disabled: false,
	btnType: "primary-blue",
	htmlType: "button",
	buttonRadius: "circle",
};
export default Button;
