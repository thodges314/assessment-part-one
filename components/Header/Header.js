import Router, {withRouter} from 'next/router'
import Link from 'next/link'
import {pageHeaders} from 'constants/pageHeaders'
import styled from 'styled-components'

import {Button} from 'components/common'

const Header = (page) => {
	const {route} = page.router

	let headerText = '404 error'
	if(route in pageHeaders) {
		headerText = pageHeaders[route]
	}

	return (
		<StyledHeader>
				<div id='button'>
					<Button onClick={()=>Router.back()}>
						&lt; Back
					</Button>
				</div>
				<div id='text'>
					{headerText}
				</div>
				<div id='hilt-logo'>
					<Link href='/'><img src='static/images/HI_mk_logo_hiltonbrandlogo_3.jpg' alt='logo' height='30px'/></Link>
				</div>
		</StyledHeader>
	)
}

const StyledHeader = styled.div`
	background-color: #1c1c1c;
	display: flex;
	flex-direction: row;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	flex-grow:1;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	#button {
		margin: 6.5px;
	}
	#text {
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 800;
		color: white;
	}
	#hilt-logo {
		margin: 6.5px;
	}
	}


`

export default withRouter(Header)