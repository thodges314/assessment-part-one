import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = ({onClick, children}) => (
	<StyledButton onClick={onClick}>
		{children}
	</StyledButton>
)

// default styles
const StyledButton = styled.div`
	background-image: linear-gradient(#2e2e2e, #020202);
	border-radius: 4px;
	color: white;
	display: inline-block;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 800;
	padding: 6px;
	&:active {
		filter: invert(10%);
	}
`

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func
}

export default Button