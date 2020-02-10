import React, { Fragment } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import {
  Row, Col, Card, CardBody, CardTitle, Table, CardHeader, Button,
  DropdownToggle, DropdownMenu,
  Nav, NavItem, NavLink,
  UncontrolledTooltip, UncontrolledButtonDropdown,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, Label, Input, FormGroup, DropdownItem
} from 'reactstrap';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '', city: '' };
  }

  addressChange = address => {
    this.setState({ address });
  };

  cityChange = city => {
    this.setState({ city });
  };

  addressSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  citySelect = city => {
    geocodeByAddress(city)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };


  render() {
    const addressOptions = {
      types: ['address'],
      // componentRestrictions: {country: "us"}
    }
    const cityOptions = {
      types: ['geocode'],
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
      // componentRestrictions: {country: "us"}
    }

    return (
      <Fragment>
        <Row>
        <Col md='12'>
          <FormGroup>
            <Label for="address">Address</Label>
            {/* address */}
            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.addressChange}
              onSelect={this.addressSelect}
              searchOptions={addressOptions}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span>{suggestion.description}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </FormGroup>
        </Col>
        </Row>
        <Row>
          <Col md='6'>
            <FormGroup>
              <Label for="city">City</Label>
              {/* city */}
              <PlacesAutocomplete
                value={this.state.city}
                onChange={this.cityChange}
                onSelect={this.citySelect}
                searchOptions={cityOptions}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div>
                    <input
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                      })}
                    />
                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                          : { backgroundColor: '#ffffff', cursor: 'pointer' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </FormGroup>
          </Col>
          <Col md="6">

          </Col>
        </Row>
      </Fragment>
    );
  }
}


export default LocationSearchInput;
