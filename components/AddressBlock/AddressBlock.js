import styled from 'styled-components'
import {hotelData} from 'constants/hotelData'

const AddressBlock = () => {
	const {address} = hotelData.chicago

	return (
		<StyledAddressBlock>
			<div id='name'>{address.name}</div>
			<div className='address'>{`${address.house_number} ${address.street}`}</div>
			<div className='address'>{`${address.city}, ${address.state}, ${address.zip}`}</div>
			<a href={`tel:${address.telephone}`}><div id='telephone'>{address.telephone}</div></a>
		</StyledAddressBlock>
	)
}

const StyledAddressBlock = styled.div`
	#name {
		color: white;
		font-size: 1.3em;
		line-height: 2.08em;
	}
	.address {
		color: #a1bed9;
		font-weight: 500;
		line-height: 1.6em;
	}
	#telephone {
		color: white;
		font-weight: 500;
		text-decoration: underline;
		line-height: 1.6em;
	}
`

export default AddressBlock