import React, { Component, Fragment } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import {
	Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
	DropdownToggle, DropdownMenu,
	Nav, NavItem, NavLink,
	UncontrolledTooltip, UncontrolledButtonDropdown,
	Modal, ModalHeader, ModalBody, ModalFooter,
	Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';

Geocode.setApiKey("AIzaSyDQAwNqjxL0L2-5X8yqNLEfpsZj6Z1B_Is");
Geocode.enableDebug();
// googlemapsclient = require('@google/maps').createClient({ key: 'AIzaSyDQAwNqjxL0L2-5X8yqNLEfpsZj6Z1B_Is' });

class Map extends Component {
	constructor(props) {
		super(props);
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			citylat: '',
			citylng: '',
			postalCode: 0,
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}
		}
	}
	/**
	 * Get the current address from the default map position and set those values in the state
	 */
	componentDidMount() {		
		Geocode.fromLatLng(this.state.mapPosition.lat, this.state.mapPosition.lng).then(
			response => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					city = this.getCity(addressArray),
					area = this.getArea(addressArray),
					state = this.getState(addressArray),
					postalCode = this.getPostalCode(addressArray);
				// console.log('city', city, area, state);

				this.setState({
					address: (address) ? address : '',
					area: (area) ? area : '',
					city: (city) ? city : '',
					state: (state) ? state : '',
					postalCode: (postalCode) ? postalCode : 0,
				})

				let selectedPlace = {
					city: this.getCity(addressArray),
					area: this.getArea(addressArray),
					state: this.getState(addressArray),
					postalCode: this.getPostalCode(addressArray),
					lat: this.state.mapPosition.lat,
					lng: this.state.mapPosition.lat,
					address: response.results[0].formatted_address,
				}
				this.props.getSelectedPlace(selectedPlace);
			},
			error => {
				console.error(error);
			}
			
		);
	};
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		// let glatlng = {
		// 	lat: this.state.citylat,
		// 	lng: this.state.citylng
		// }
		// // if(glatlng.lat !== '' && glatlng.lng !== ''){
		// // 	this.props.getlatLng(glatlng);
		// // }
		// this.setState({markerPosition: glatlng});

		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area ||
			this.state.state !== nextState.state
		) {
			return true
		} else if (this.props.center.lat === nextProps.center.lat) {
			return false
		}

	}
	componentWillReceiveProps = (props) => {
		this.setState({ city: props.city })

	}

	// getcitylat=(e)=>{
	// 	this.setState({citylat:e.target.value});
	// }
	// getcitylag=(e)=>{
	// 	this.setState({citylng:e.target.value});
	// }
	/**
	 * Get the city and set the city input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	// Geocode=()=>{


	// }
	getCity = (addressArray) => {
		let city = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
				city = addressArray[i].long_name;
				return city;
			}
		}
	};
	/**
	 * Get the area and set the area input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getArea = (addressArray) => {
		let area = '';
		for (let i = 0; i < addressArray.length; i++) {
			if (addressArray[i].types[0]) {
				for (let j = 0; j < addressArray[i].types.length; j++) {
					if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
						area = addressArray[i].long_name;
						return area;
					}
				}
			}
		}
	};
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getState = (addressArray) => {
		let state = '';
		for (let i = 0; i < addressArray.length; i++) {
			for (let i = 0; i < addressArray.length; i++) {
				if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
					state = addressArray[i].long_name;
					return state;
				}
			}
		}
	};

	getPostalCode = (addressArray) => {
		let postal_code = '';
		for (let i = 0; i < addressArray.length; i++) {
			for (let i = 0; i < addressArray.length; i++) {
				if (addressArray[i].types[0] && 'postal_code' === addressArray[i].types[0]) {
					postal_code = addressArray[i].long_name;
					return postal_code;
				}
			}
		}
	}
	/**
	 * And function for city,state and address input
	 * @param event
	 */
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = (event) => {

	};

	// /**
	//   * When the user types an address in the search box
	//   * @param place
	//   */
	//  onPlaceSelected = ( place ) => {
	// 	const address = place.formatted_address,
	// 	addressArray =  place.address_components,
	// 	city = this.getCity( addressArray ),
	// 	area = this.getArea( addressArray ),
	// 	state = this.getState( addressArray ),
	// 	latValue = place.geometry.location.lat(),
	// 	lngValue = place.geometry.location.lng();
	//  // Set these values in the state.
	//    this.setState({
	// 	address: ( address ) ? address : '',
	// 	area: ( area ) ? area : '',
	// 	city: ( city ) ? city : '',
	// 	state: ( state ) ? state : '',
	// 	markerPosition: {
	// 	 lat: latValue,
	// 	 lng: lngValue
	// 	},
	// 	mapPosition: {
	// 	 lat: latValue,
	// 	 lng: lngValue
	// 	},
	//    })
	//   };

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	onMarkerDragEnd = (event) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();

		Geocode.fromLatLng(newLat, newLng).then(
			response => {
				const address = response.results[0].formatted_address,
					addressArray = response.results[0].address_components,
					city = this.getCity(addressArray),
					area = this.getArea(addressArray),
					state = this.getState(addressArray),
					postalCode = this.getPostalCode(addressArray);
				this.setState({
					address: (address) ? address : '',
					area: (area) ? area : '',
					city: (city) ? city : '',
					state: (state) ? state : '',
					postalCode: (postalCode) ? postalCode : 0,
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				})
				let selectedPlace = {
					city: this.state.city.value, //this.getCity(addressArray),
					area: this.state.area, //this.getArea(addressArray),
					// state: this.getState(addressArray),
					postalCode: this.getPostalCode(addressArray),
					latitude: event.latLng.lat(),
					longitude: event.latLng.lng(),
					address: response.results[0].formatted_address,
				}
				this.props.getSelectedPlace(selectedPlace);
			},
			error => {
				console.error(error);
			}
		);
	};

	/**
	 * When the user types an address in the search box
	 * @param place
	 */
	onPlaceSelected = (place) => {
		const address = place.formatted_address,
			place_id = place.place_id,
			addressArray = place.address_components,
			city = this.getCity(addressArray),
			area = this.getArea(addressArray),
			state = this.getState(addressArray),
			postalCode = this.getPostalCode(addressArray),
			latValue = place.geometry.location.lat(),
			lngValue = place.geometry.location.lng();
		// Set these values in the state.
		this.setState({
			address: (address) ? address : '',
			area: (area) ? area : '',
			city: (city) ? city : '',
			state: (state) ? state : '',
			place_id: (place_id) ? place_id : '',
			postalCode: (postalCode) ? postalCode : 0,
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
			},
		})

		let selectedPlace = {
			cityId: this.state.city.value, //this.getCity(addressArray), //place_id, //36842, //this.getCity(addressArray),
			areaAcres: this.state.area, //this.getArea(addressArray), //20, //this.getArea(addressArray),
			// state: this.getState(addressArray),
			postalCode: this.getPostalCode(addressArray),
			latitude: place.geometry.location.lat(),
			longitude: place.geometry.location.lng(),
			address: place.formatted_address,
		}
		this.props.getSelectedPlace(selectedPlace);
	};

	render() {
		console.log("city12::", this.state.markerPosition);
		const mapurl = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDQAwNqjxL0L2-5X8yqNLEfpsZj6Z1B_Is&libraries=places`;
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
					<Fragment>
						<GoogleMap google={this.props.google}
							defaultZoom={this.props.zoom}
							defaultCenter={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						>
							{/* InfoWindow on top of marker */}
							<InfoWindow
								onClose={this.onInfoWindowClose}
								position={{ lat: (this.state.markerPosition.lat + 0.0018), lng: this.state.markerPosition.lng }}
							>
								<div>
									<span style={{ padding: 0, margin: 0 }}>{this.state.address}</span>
								</div>
							</InfoWindow>
							{/*Marker*/}
							<Marker google={this.props.google}
								name={'Dolores park'}
								draggable={true}
								onDragEnd={this.onMarkerDragEnd}
								position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
							/>
							<Marker />
							{/* For Auto complete Search Box */}

						</GoogleMap>
					</Fragment>
				)
			)
		);
		let map;
		if (this.props.center.lat !== undefined) {
			map = <Fragment>
				{/* <div className="autocmplt"> */}
				<Row>
					<Col md='6'>
						<FormGroup>
							<Label for="type">Area</Label>
							<Input type="text" name="area" className="form-control" onChange={(e) => this.setState({ area: e.target.value })} value={this.state.area} />
						</FormGroup>
					</Col>
					<Col md='6'>
						<FormGroup>
							<Label for="search">Search Location For Property</Label>
							<Autocomplete
								style={{
									width: '100%',
									height: '40px',
									paddingLeft: '16px',
									marginTop: '2px',
								}}
								className="form-control"
								onPlaceSelected={this.onPlaceSelected}
								types={['(regions)']}
							// componentRestrictions={{ city: this.state.city.label }}
							/>
						</FormGroup>
					</Col>

				</Row>
				{/* </div> */}
				<Row>
					<Col md='6'>
						{/* <FormGroup>
							<Label for="type">Area</Label>
							<Input type="text" name="area" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.area} />
						</FormGroup> */}

						{/* <FormGroup>
							<Label for="type">City</Label>
							<Input type="text" name="city" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.city} />
						</FormGroup> */}

						{/* <div className="form-group">
					<label htmlFor="">State</label>
					<input type="text" name="state" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.state} />
				</div> */}

						<FormGroup>
							<Label for="type">Address</Label>
							<Input type="text" name="address" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.address} />
						</FormGroup>

						<FormGroup>
							<Label for="type">Postal Code</Label>
							<Input type="text" name="postalCode" className="form-control" onChange={this.onChange} readOnly="readOnly" value={this.state.postalCode} />
						</FormGroup>

					</Col>
					<Col md="6">

						<AsyncMap
							googleMapURL={mapurl}
							loadingElement={
								<div style={{ height: `100%` }} />
							}
							containerElement={
								<div style={{ height: this.props.height }} />
							}
							mapElement={
								<div style={{ height: `100%` }} />
							}
						/>
					</Col>
				</Row>
			</Fragment>
		} else {
			map = <div style={{ height: this.props.height }} />
		}
		return (map)
	}

}

export default Map
