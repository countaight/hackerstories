import React from 'react'
import GoogleMap from 'google-map-react'
import MapMarker from './MapMarker'

export class CTAMap extends React.Component {
	componentDidMount () {
		this.props.loadLocation();
	}

	_renderMarkers () {
    return (
      this.props.ctaMap.stops.map((stop) => {
        return <MapMarker key={stop.stpid} lat={stop.lat} lng={stop.lon} name={stop.stpnm}/>
      })
    )
  }

  render () {
    return (
      <div className={'react-map'}>
        <h1 className={'map-title'}>Map with markers</h1>
        <div className={'google-map-component'}>
          <GoogleMap
            bootstrapURLKeys={{key: 'AIzaSyB2Chv-sdSPphlh-IsBKXfdzY8zUKqglww'}}
            center={{lat: 41.881832, lng: -87.623177}}
            zoom={12}
          >
           {this._renderMarkers()}
          </GoogleMap>
        </div>
      </div>
    )
  }
}

export default CTAMap
