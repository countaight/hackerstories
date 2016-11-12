import React from 'react'

export class MapMarker extends React.Component {
	render () {
		return (
			<div className="stop-marker">
				<h3>{this.props.name}</h3>
			</div>
		)
	}
}

export default MapMarker