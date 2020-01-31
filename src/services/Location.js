import { fetch_locationitem_pending, fetch_locationitem_success, fetch_locationitem_error, fetch_organizationdata_pending, fetch_organizationdata_success, fetch_organizationdata_error, fetch_location_types_pending, fetch_location_types_success, fetch_entity_types_pending, fetch_entity_types_success, fetch_property_types_pending, fetch_property_types_success, fetch_day_intervals_pending, fetch_day_intervals_success, fetch_property_pending, fetch_property_success, edit_location_data_success, edit_location_data_pending, update_locationitem_success, delete_location_data_success } from '../actions/locationitem';
// import axios from 'axios';

let locations = [
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Building",
      "id": 89,
      "locationBusinessHoursList": [
         {
            "id": 5,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 4,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 2,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 3,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 6,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 7,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 1,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 240
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Building",
      "id": 89,
      "locationBusinessHoursList": [
         {
            "id": 5,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 4,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 2,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 3,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 6,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 7,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 1,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 240
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Building",
      "id": 89,
      "locationBusinessHoursList": [
         {
            "id": 5,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 4,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 2,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 3,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 6,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 7,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 1,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 240
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Building",
      "id": 89,
      "locationBusinessHoursList": [
         {
            "id": 5,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 4,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 2,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 3,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 6,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 7,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 1,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 240
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Building",
      "id": 89,
      "locationBusinessHoursList": [
         {
            "id": 5,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 4,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 2,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 3,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 6,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 7,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 1,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 240
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Building",
      "id": 89,
      "locationBusinessHoursList": [
         {
            "id": 5,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 4,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 2,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 3,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 6,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 7,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 1,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 240
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Building",
      "id": 89,
      "locationBusinessHoursList": [
         {
            "id": 5,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 4,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 2,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 3,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 6,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 7,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 1,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 240
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Block d",
      "id": 90,
      "locationBusinessHoursList": [
         {
            "id": 9,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 90
         },
         {
            "id": 11,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 13,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 12,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 14,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 8,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 210
         },
         {
            "id": 10,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Block d",
      "id": 90,
      "locationBusinessHoursList": [
         {
            "id": 9,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 90
         },
         {
            "id": 11,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 13,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 12,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 14,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 8,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 210
         },
         {
            "id": 10,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Block d",
      "id": 90,
      "locationBusinessHoursList": [
         {
            "id": 9,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 90
         },
         {
            "id": 11,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 13,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 12,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 14,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 8,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 210
         },
         {
            "id": 10,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Block d",
      "id": 90,
      "locationBusinessHoursList": [
         {
            "id": 9,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 90
         },
         {
            "id": 11,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 13,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 12,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 14,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 8,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 210
         },
         {
            "id": 10,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Block d",
      "id": 90,
      "locationBusinessHoursList": [
         {
            "id": 9,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 90
         },
         {
            "id": 11,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 13,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 12,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 14,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 8,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 210
         },
         {
            "id": 10,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Block d",
      "id": 90,
      "locationBusinessHoursList": [
         {
            "id": 9,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 90
         },
         {
            "id": 11,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 13,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 12,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 14,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 8,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 210
         },
         {
            "id": 10,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Block d",
      "id": 90,
      "locationBusinessHoursList": [
         {
            "id": 9,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 90
         },
         {
            "id": 11,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 13,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 12,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 14,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 8,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 210
         },
         {
            "id": 10,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Block",
      "id": 91,
      "locationBusinessHoursList": [
         {
            "id": 15,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 19,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 16,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 20,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 17,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 60
         },
         {
            "id": 18,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 21,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 540
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Block",
      "id": 91,
      "locationBusinessHoursList": [
         {
            "id": 15,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 19,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 16,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 20,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 17,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 60
         },
         {
            "id": 18,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 21,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 540
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Block",
      "id": 91,
      "locationBusinessHoursList": [
         {
            "id": 15,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 19,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 16,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 20,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 17,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 60
         },
         {
            "id": 18,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 21,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 540
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Block",
      "id": 91,
      "locationBusinessHoursList": [
         {
            "id": 15,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 19,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 16,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 20,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 17,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 60
         },
         {
            "id": 18,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 21,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 540
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Block",
      "id": 91,
      "locationBusinessHoursList": [
         {
            "id": 15,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 19,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 16,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 20,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 17,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 60
         },
         {
            "id": 18,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 21,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 540
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Block",
      "id": 91,
      "locationBusinessHoursList": [
         {
            "id": 15,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 19,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 16,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 20,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 17,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 60
         },
         {
            "id": 18,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 21,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 540
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Main Block",
      "id": 91,
      "locationBusinessHoursList": [
         {
            "id": 15,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 19,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 16,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 20,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 17,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 60
         },
         {
            "id": 18,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 21,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 540
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "JC Block",
      "id": 92,
      "locationBusinessHoursList": [
         {
            "id": 24,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 25,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 23,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 27,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 26,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 22,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 28,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "JC Block",
      "id": 92,
      "locationBusinessHoursList": [
         {
            "id": 24,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 25,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 23,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 27,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 26,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 22,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 28,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "JC Block",
      "id": 92,
      "locationBusinessHoursList": [
         {
            "id": 24,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 25,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 23,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 27,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 26,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 22,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 28,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "JC Block",
      "id": 92,
      "locationBusinessHoursList": [
         {
            "id": 24,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 25,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 23,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 27,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 26,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 22,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 28,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "JC Block",
      "id": 92,
      "locationBusinessHoursList": [
         {
            "id": 24,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 25,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 23,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 27,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 26,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 22,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 28,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "JC Block",
      "id": 92,
      "locationBusinessHoursList": [
         {
            "id": 24,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 25,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 23,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 27,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 26,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 22,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 28,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "JC Block",
      "id": 92,
      "locationBusinessHoursList": [
         {
            "id": 24,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 25,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 23,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 27,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 26,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 22,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 28,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Machines Lab",
      "id": 93,
      "locationBusinessHoursList": [
         {
            "id": 29,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 30,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 31,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 33,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 35,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 32,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 34,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Machines Lab",
      "id": 93,
      "locationBusinessHoursList": [
         {
            "id": 29,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 30,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 31,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 33,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 35,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 32,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 34,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Machines Lab",
      "id": 93,
      "locationBusinessHoursList": [
         {
            "id": 29,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 30,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 31,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 33,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 35,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 32,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 34,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Machines Lab",
      "id": 93,
      "locationBusinessHoursList": [
         {
            "id": 29,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 30,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 31,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 33,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 35,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 32,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 34,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Machines Lab",
      "id": 93,
      "locationBusinessHoursList": [
         {
            "id": 29,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 30,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 31,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 33,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 35,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 32,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 34,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Machines Lab",
      "id": 93,
      "locationBusinessHoursList": [
         {
            "id": 29,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 30,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 31,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 33,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 35,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 32,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 34,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "Machines Lab",
      "id": 93,
      "locationBusinessHoursList": [
         {
            "id": 29,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 30,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 31,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 33,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 35,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 32,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 34,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "SR Block",
      "id": 94,
      "locationBusinessHoursList": [
         {
            "id": 39,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 42,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 37,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 36,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 240
         },
         {
            "id": 38,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 40,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 41,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "SR Block",
      "id": 94,
      "locationBusinessHoursList": [
         {
            "id": 39,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 42,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 37,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 36,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 240
         },
         {
            "id": 38,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 40,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 41,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "SR Block",
      "id": 94,
      "locationBusinessHoursList": [
         {
            "id": 39,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 42,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 37,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 36,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 240
         },
         {
            "id": 38,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 40,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 41,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "SR Block",
      "id": 94,
      "locationBusinessHoursList": [
         {
            "id": 39,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 42,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 37,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 36,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 240
         },
         {
            "id": 38,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 40,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 41,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "SR Block",
      "id": 94,
      "locationBusinessHoursList": [
         {
            "id": 39,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 42,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 37,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 36,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 240
         },
         {
            "id": 38,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 40,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 41,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "SR Block",
      "id": 94,
      "locationBusinessHoursList": [
         {
            "id": 39,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 42,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 37,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 36,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 240
         },
         {
            "id": 38,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 40,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 41,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "SR Block",
      "id": 94,
      "locationBusinessHoursList": [
         {
            "id": 39,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 42,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 37,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 36,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 240
         },
         {
            "id": 38,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 40,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 41,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "AK Block",
      "id": 95,
      "locationBusinessHoursList": [
         {
            "id": 45,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 46,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 43,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 49,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 44,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 48,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 47,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "AK Block",
      "id": 95,
      "locationBusinessHoursList": [
         {
            "id": 45,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 46,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 43,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 49,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 44,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 48,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 47,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "AK Block",
      "id": 95,
      "locationBusinessHoursList": [
         {
            "id": 45,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 46,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 43,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 49,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 44,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 48,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 47,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "AK Block",
      "id": 95,
      "locationBusinessHoursList": [
         {
            "id": 45,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 46,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 43,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 49,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 44,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 48,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 47,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "AK Block",
      "id": 95,
      "locationBusinessHoursList": [
         {
            "id": 45,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 46,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 43,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 49,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 44,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 48,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 47,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "AK Block",
      "id": 95,
      "locationBusinessHoursList": [
         {
            "id": 45,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 46,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 43,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 49,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 44,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 48,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 47,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "AK Block",
      "id": 95,
      "locationBusinessHoursList": [
         {
            "id": 45,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 46,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 43,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 49,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 44,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 48,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 47,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "MG Block",
      "id": 96,
      "locationBusinessHoursList": [
         {
            "id": 56,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 50,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 51,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 55,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 52,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 53,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 54,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "MG Block",
      "id": 96,
      "locationBusinessHoursList": [
         {
            "id": 56,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 50,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 51,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 55,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 52,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 53,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 54,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "MG Block",
      "id": 96,
      "locationBusinessHoursList": [
         {
            "id": 56,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 50,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 51,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 55,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 52,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 53,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 54,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "MG Block",
      "id": 96,
      "locationBusinessHoursList": [
         {
            "id": 56,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 50,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 51,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 55,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 52,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 53,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 54,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "MG Block",
      "id": 96,
      "locationBusinessHoursList": [
         {
            "id": 56,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 50,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 51,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 55,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 52,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 53,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 54,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "MG Block",
      "id": 96,
      "locationBusinessHoursList": [
         {
            "id": 56,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 50,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 51,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 55,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 52,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 53,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 54,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Dundigal Campus",
      "propertyId": 33,
      "entityId": 49,
      "locationType": {
         "id": 1,
         "value": "Building"
      },
      "entityReference": "Marri Laxman Reddy Institute Technology",
      "region": "Hyderabad,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "MG Block",
      "id": 96,
      "locationBusinessHoursList": [
         {
            "id": 56,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 50,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 51,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 55,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 52,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 53,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 54,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "qw2",
      "aggregateId": "sd",
      "floor": "block-c",
      "id": 97,
      "locationBusinessHoursList": [
         {
            "id": 60,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 59,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 58,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 63,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 61,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 62,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 270
         },
         {
            "id": 57,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 330
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "qw2",
      "aggregateId": "sd",
      "floor": "block-c",
      "id": 97,
      "locationBusinessHoursList": [
         {
            "id": 60,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 59,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 58,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 63,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 61,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 62,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 270
         },
         {
            "id": 57,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 330
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "qw2",
      "aggregateId": "sd",
      "floor": "block-c",
      "id": 97,
      "locationBusinessHoursList": [
         {
            "id": 60,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 59,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 58,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 63,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 61,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 62,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 270
         },
         {
            "id": 57,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 330
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "qw2",
      "aggregateId": "sd",
      "floor": "block-c",
      "id": 97,
      "locationBusinessHoursList": [
         {
            "id": 60,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 59,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 58,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 63,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 61,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 62,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 270
         },
         {
            "id": 57,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 330
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "qw2",
      "aggregateId": "sd",
      "floor": "block-c",
      "id": 97,
      "locationBusinessHoursList": [
         {
            "id": 60,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 59,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 58,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 63,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 61,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 62,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 270
         },
         {
            "id": 57,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 330
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "qw2",
      "aggregateId": "sd",
      "floor": "block-c",
      "id": 97,
      "locationBusinessHoursList": [
         {
            "id": 60,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 59,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 58,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 63,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 61,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 62,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 270
         },
         {
            "id": 57,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 330
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "qw2",
      "aggregateId": "sd",
      "floor": "block-c",
      "id": 97,
      "locationBusinessHoursList": [
         {
            "id": 60,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 59,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 58,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 63,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 61,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 62,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 270
         },
         {
            "id": 57,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 330
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "df",
      "id": 101,
      "locationBusinessHoursList": [
         {
            "id": 85,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 86,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 88,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 91,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 87,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 89,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 90,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "df",
      "id": 101,
      "locationBusinessHoursList": [
         {
            "id": 85,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 86,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 88,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 91,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 87,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 89,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 90,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "df",
      "id": 101,
      "locationBusinessHoursList": [
         {
            "id": 85,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 86,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 88,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 91,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 87,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 89,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 90,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "df",
      "id": 101,
      "locationBusinessHoursList": [
         {
            "id": 85,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 86,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 88,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 91,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 87,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 89,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 90,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "df",
      "id": 101,
      "locationBusinessHoursList": [
         {
            "id": 85,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 86,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 88,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 91,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 87,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 89,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 90,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "df",
      "id": 101,
      "locationBusinessHoursList": [
         {
            "id": 85,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 86,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 88,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 91,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 87,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 89,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 90,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "df",
      "id": 101,
      "locationBusinessHoursList": [
         {
            "id": 85,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 86,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 150
         },
         {
            "id": 88,
            "weekDay": 4,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 91,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 87,
            "weekDay": 3,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 89,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 90,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sfsdf",
      "id": 102,
      "locationBusinessHoursList": [
         {
            "id": 98,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 600
         },
         {
            "id": 95,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 210
         },
         {
            "id": 96,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 92,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 97,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 93,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 94,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 120
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sfsdf",
      "id": 102,
      "locationBusinessHoursList": [
         {
            "id": 98,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 600
         },
         {
            "id": 95,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 210
         },
         {
            "id": 96,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 92,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 97,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 93,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 94,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 120
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sfsdf",
      "id": 102,
      "locationBusinessHoursList": [
         {
            "id": 98,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 600
         },
         {
            "id": 95,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 210
         },
         {
            "id": 96,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 92,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 97,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 93,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 94,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 120
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sfsdf",
      "id": 102,
      "locationBusinessHoursList": [
         {
            "id": 98,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 600
         },
         {
            "id": 95,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 210
         },
         {
            "id": 96,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 92,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 97,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 93,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 94,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 120
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sfsdf",
      "id": 102,
      "locationBusinessHoursList": [
         {
            "id": 98,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 600
         },
         {
            "id": 95,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 210
         },
         {
            "id": 96,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 92,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 97,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 93,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 94,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 120
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sfsdf",
      "id": 102,
      "locationBusinessHoursList": [
         {
            "id": 98,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 600
         },
         {
            "id": 95,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 210
         },
         {
            "id": 96,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 92,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 97,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 93,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 94,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 120
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sfsdf",
      "id": 102,
      "locationBusinessHoursList": [
         {
            "id": 98,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 600
         },
         {
            "id": 95,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 210
         },
         {
            "id": 96,
            "weekDay": 5,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 92,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 97,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 93,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 210
         },
         {
            "id": 94,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 120
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 103,
      "locationBusinessHoursList": [
         {
            "id": 102,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 99,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 104,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 103,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 100,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 105,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 180,
            "closesAt": 360
         },
         {
            "id": 101,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 103,
      "locationBusinessHoursList": [
         {
            "id": 102,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 99,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 104,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 103,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 100,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 105,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 180,
            "closesAt": 360
         },
         {
            "id": 101,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 103,
      "locationBusinessHoursList": [
         {
            "id": 102,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 99,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 104,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 103,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 100,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 105,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 180,
            "closesAt": 360
         },
         {
            "id": 101,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 103,
      "locationBusinessHoursList": [
         {
            "id": 102,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 99,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 104,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 103,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 100,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 105,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 180,
            "closesAt": 360
         },
         {
            "id": 101,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 103,
      "locationBusinessHoursList": [
         {
            "id": 102,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 99,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 104,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 103,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 100,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 105,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 180,
            "closesAt": 360
         },
         {
            "id": 101,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 103,
      "locationBusinessHoursList": [
         {
            "id": 102,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 99,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 104,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 103,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 100,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 105,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 180,
            "closesAt": 360
         },
         {
            "id": 101,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 103,
      "locationBusinessHoursList": [
         {
            "id": 102,
            "weekDay": 4,
            "businessType": 3,
            "opensAt": 0,
            "closesAt": 180
         },
         {
            "id": 99,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 104,
            "weekDay": 6,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 103,
            "weekDay": 5,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 100,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 105,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 180,
            "closesAt": 360
         },
         {
            "id": 101,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 104,
      "locationBusinessHoursList": [
         {
            "id": 111,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 510
         },
         {
            "id": 106,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 109,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 107,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 108,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 180
         },
         {
            "id": 110,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 112,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 104,
      "locationBusinessHoursList": [
         {
            "id": 111,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 510
         },
         {
            "id": 106,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 109,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 107,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 108,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 180
         },
         {
            "id": 110,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 112,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 104,
      "locationBusinessHoursList": [
         {
            "id": 111,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 510
         },
         {
            "id": 106,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 109,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 107,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 108,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 180
         },
         {
            "id": 110,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 112,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 104,
      "locationBusinessHoursList": [
         {
            "id": 111,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 510
         },
         {
            "id": 106,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 109,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 107,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 108,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 180
         },
         {
            "id": 110,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 112,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 104,
      "locationBusinessHoursList": [
         {
            "id": 111,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 510
         },
         {
            "id": 106,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 109,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 107,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 108,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 180
         },
         {
            "id": 110,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 112,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 104,
      "locationBusinessHoursList": [
         {
            "id": 111,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 510
         },
         {
            "id": 106,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 109,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 107,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 108,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 180
         },
         {
            "id": 110,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 112,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "main",
      "id": 104,
      "locationBusinessHoursList": [
         {
            "id": 111,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 210,
            "closesAt": 510
         },
         {
            "id": 106,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 109,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 107,
            "weekDay": 2,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 108,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 180
         },
         {
            "id": 110,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 112,
            "weekDay": 7,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sdf",
      "id": 105,
      "locationBusinessHoursList": [
         {
            "id": 114,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 270
         },
         {
            "id": 115,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 117,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 118,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 540
         },
         {
            "id": 116,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 113,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 119,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sdf",
      "id": 105,
      "locationBusinessHoursList": [
         {
            "id": 114,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 270
         },
         {
            "id": 115,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 117,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 118,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 540
         },
         {
            "id": 116,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 113,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 119,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sdf",
      "id": 105,
      "locationBusinessHoursList": [
         {
            "id": 114,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 270
         },
         {
            "id": 115,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 117,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 118,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 540
         },
         {
            "id": 116,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 113,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 119,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sdf",
      "id": 105,
      "locationBusinessHoursList": [
         {
            "id": 114,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 270
         },
         {
            "id": 115,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 117,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 118,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 540
         },
         {
            "id": 116,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 113,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 119,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sdf",
      "id": 105,
      "locationBusinessHoursList": [
         {
            "id": 114,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 270
         },
         {
            "id": 115,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 117,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 118,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 540
         },
         {
            "id": 116,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 113,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 119,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sdf",
      "id": 105,
      "locationBusinessHoursList": [
         {
            "id": 114,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 270
         },
         {
            "id": 115,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 117,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 118,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 540
         },
         {
            "id": 116,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 113,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 119,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Padi",
      "propertyId": 31,
      "entityId": 48,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Brakes India Private Limited",
      "region": "Chennai,TN",
      "zone": "",
      "aggregateId": "",
      "floor": "sdf",
      "id": 105,
      "locationBusinessHoursList": [
         {
            "id": 114,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 60,
            "closesAt": 270
         },
         {
            "id": 115,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 117,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 118,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 510,
            "closesAt": 540
         },
         {
            "id": 116,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 113,
            "weekDay": 1,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 119,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "g",
      "id": 106,
      "locationBusinessHoursList": [
         {
            "id": 124,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 122,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 121,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 180
         },
         {
            "id": 125,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 120,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 30,
            "closesAt": 120
         },
         {
            "id": 126,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 390,
            "closesAt": 510
         },
         {
            "id": 123,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "g",
      "id": 106,
      "locationBusinessHoursList": [
         {
            "id": 124,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 122,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 121,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 180
         },
         {
            "id": 125,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 120,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 30,
            "closesAt": 120
         },
         {
            "id": 126,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 390,
            "closesAt": 510
         },
         {
            "id": 123,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "g",
      "id": 106,
      "locationBusinessHoursList": [
         {
            "id": 124,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 122,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 121,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 180
         },
         {
            "id": 125,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 120,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 30,
            "closesAt": 120
         },
         {
            "id": 126,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 390,
            "closesAt": 510
         },
         {
            "id": 123,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "g",
      "id": 106,
      "locationBusinessHoursList": [
         {
            "id": 124,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 122,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 121,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 180
         },
         {
            "id": 125,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 120,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 30,
            "closesAt": 120
         },
         {
            "id": 126,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 390,
            "closesAt": 510
         },
         {
            "id": 123,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "g",
      "id": 106,
      "locationBusinessHoursList": [
         {
            "id": 124,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 122,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 121,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 180
         },
         {
            "id": 125,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 120,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 30,
            "closesAt": 120
         },
         {
            "id": 126,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 390,
            "closesAt": 510
         },
         {
            "id": 123,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "g",
      "id": 106,
      "locationBusinessHoursList": [
         {
            "id": 124,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 122,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 121,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 180
         },
         {
            "id": 125,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 120,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 30,
            "closesAt": 120
         },
         {
            "id": 126,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 390,
            "closesAt": 510
         },
         {
            "id": 123,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "g",
      "id": 106,
      "locationBusinessHoursList": [
         {
            "id": 124,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 122,
            "weekDay": 3,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 121,
            "weekDay": 2,
            "businessType": 3,
            "opensAt": 90,
            "closesAt": 180
         },
         {
            "id": 125,
            "weekDay": 6,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 120,
            "weekDay": 1,
            "businessType": 3,
            "opensAt": 30,
            "closesAt": 120
         },
         {
            "id": 126,
            "weekDay": 7,
            "businessType": 3,
            "opensAt": 390,
            "closesAt": 510
         },
         {
            "id": 123,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "block-c",
      "id": 107,
      "locationBusinessHoursList": [
         {
            "id": 128,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 132,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 570
         },
         {
            "id": 131,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 133,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 127,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 130,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 129,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 180
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "block-c",
      "id": 107,
      "locationBusinessHoursList": [
         {
            "id": 128,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 132,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 570
         },
         {
            "id": 131,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 133,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 127,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 130,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 129,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 180
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "block-c",
      "id": 107,
      "locationBusinessHoursList": [
         {
            "id": 128,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 132,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 570
         },
         {
            "id": 131,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 133,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 127,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 130,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 129,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 180
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "block-c",
      "id": 107,
      "locationBusinessHoursList": [
         {
            "id": 128,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 132,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 570
         },
         {
            "id": 131,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 133,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 127,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 130,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 129,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 180
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "block-c",
      "id": 107,
      "locationBusinessHoursList": [
         {
            "id": 128,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 132,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 570
         },
         {
            "id": 131,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 133,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 127,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 130,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 129,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 180
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "block-c",
      "id": 107,
      "locationBusinessHoursList": [
         {
            "id": 128,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 132,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 570
         },
         {
            "id": 131,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 133,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 127,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 130,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 129,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 180
         }
      ]
   },
   {
      "property": "Vizag Development Center",
      "propertyId": 32,
      "entityId": 46,
      "locationType": {
         "id": 2,
         "value": "Floor"
      },
      "entityReference": "Apple",
      "region": "Visakhapatnam,AP",
      "zone": "",
      "aggregateId": "",
      "floor": "block-c",
      "id": 107,
      "locationBusinessHoursList": [
         {
            "id": 128,
            "weekDay": 2,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 132,
            "weekDay": 6,
            "businessType": 3,
            "opensAt": 300,
            "closesAt": 570
         },
         {
            "id": 131,
            "weekDay": 5,
            "businessType": 2,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 133,
            "weekDay": 7,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 127,
            "weekDay": 1,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 130,
            "weekDay": 4,
            "businessType": 1,
            "opensAt": null,
            "closesAt": null
         },
         {
            "id": 129,
            "weekDay": 3,
            "businessType": 3,
            "opensAt": 120,
            "closesAt": 180
         }
      ]
   }
]

let entities = [
   {
      "id": 46,
      "reference": "APL",
      "name": "Apple",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 8,
         "value": "Hospitality"
      },
      "industrySector": "Hospitality",
      "enableLora": true,
      "applications": [
         {
            "id": 62,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "42"
         },
         {
            "id": 63,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "43"
         }
      ],
      "entityOptions": [
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "42"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "43"
         },
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "bd5f8778-14b4-41d2-818b-2fc93bbf92b1"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1feabd47-723e-4d08-bccf-591cd234fee5"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "24"
         }
      ]
   },
   {
      "id": 46,
      "reference": "APL",
      "name": "Apple",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 8,
         "value": "Hospitality"
      },
      "industrySector": "Hospitality",
      "enableLora": true,
      "applications": [
         {
            "id": 62,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "42"
         },
         {
            "id": 63,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "43"
         }
      ],
      "entityOptions": [
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "42"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "43"
         },
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "bd5f8778-14b4-41d2-818b-2fc93bbf92b1"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1feabd47-723e-4d08-bccf-591cd234fee5"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "24"
         }
      ]
   },
   {
      "id": 46,
      "reference": "APL",
      "name": "Apple",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 8,
         "value": "Hospitality"
      },
      "industrySector": "Hospitality",
      "enableLora": true,
      "applications": [
         {
            "id": 62,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "42"
         },
         {
            "id": 63,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "43"
         }
      ],
      "entityOptions": [
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "42"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "43"
         },
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "bd5f8778-14b4-41d2-818b-2fc93bbf92b1"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1feabd47-723e-4d08-bccf-591cd234fee5"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "24"
         }
      ]
   },
   {
      "id": 46,
      "reference": "APL",
      "name": "Apple",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 8,
         "value": "Hospitality"
      },
      "industrySector": "Hospitality",
      "enableLora": true,
      "applications": [
         {
            "id": 62,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "42"
         },
         {
            "id": 63,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "43"
         }
      ],
      "entityOptions": [
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "42"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "43"
         },
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "bd5f8778-14b4-41d2-818b-2fc93bbf92b1"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1feabd47-723e-4d08-bccf-591cd234fee5"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "24"
         }
      ]
   },
   {
      "id": 46,
      "reference": "APL",
      "name": "Apple",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 8,
         "value": "Hospitality"
      },
      "industrySector": "Hospitality",
      "enableLora": true,
      "applications": [
         {
            "id": 62,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "42"
         },
         {
            "id": 63,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "43"
         }
      ],
      "entityOptions": [
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "42"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "43"
         },
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "bd5f8778-14b4-41d2-818b-2fc93bbf92b1"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1feabd47-723e-4d08-bccf-591cd234fee5"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "24"
         }
      ]
   },
   {
      "id": 48,
      "reference": "BIPL",
      "name": "Brakes India Private Limited",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 9,
         "value": "Manufacturing/Industrial"
      },
      "industrySector": "Manufacturing/Industrial",
      "enableLora": true,
      "applications": [
         {
            "id": 67,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "40"
         },
         {
            "id": 68,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "41"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "6e8f1235-6f37-4c01-b3e9-92f28b78138d"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "18"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "40"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "41"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1e1f08e9-8b53-4acb-8203-73fb5faac3ac"
         }
      ]
   },
   {
      "id": 48,
      "reference": "BIPL",
      "name": "Brakes India Private Limited",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 9,
         "value": "Manufacturing/Industrial"
      },
      "industrySector": "Manufacturing/Industrial",
      "enableLora": true,
      "applications": [
         {
            "id": 67,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "40"
         },
         {
            "id": 68,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "41"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "6e8f1235-6f37-4c01-b3e9-92f28b78138d"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "18"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "40"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "41"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1e1f08e9-8b53-4acb-8203-73fb5faac3ac"
         }
      ]
   },
   {
      "id": 48,
      "reference": "BIPL",
      "name": "Brakes India Private Limited",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 9,
         "value": "Manufacturing/Industrial"
      },
      "industrySector": "Manufacturing/Industrial",
      "enableLora": true,
      "applications": [
         {
            "id": 67,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "40"
         },
         {
            "id": 68,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "41"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "6e8f1235-6f37-4c01-b3e9-92f28b78138d"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "18"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "40"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "41"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1e1f08e9-8b53-4acb-8203-73fb5faac3ac"
         }
      ]
   },
   {
      "id": 48,
      "reference": "BIPL",
      "name": "Brakes India Private Limited",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 9,
         "value": "Manufacturing/Industrial"
      },
      "industrySector": "Manufacturing/Industrial",
      "enableLora": true,
      "applications": [
         {
            "id": 67,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "40"
         },
         {
            "id": 68,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "41"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "6e8f1235-6f37-4c01-b3e9-92f28b78138d"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "18"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "40"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "41"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1e1f08e9-8b53-4acb-8203-73fb5faac3ac"
         }
      ]
   },
   {
      "id": 48,
      "reference": "BIPL",
      "name": "Brakes India Private Limited",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 9,
         "value": "Manufacturing/Industrial"
      },
      "industrySector": "Manufacturing/Industrial",
      "enableLora": true,
      "applications": [
         {
            "id": 67,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "40"
         },
         {
            "id": 68,
            "value": "WaterMonitoring",
            "reference": "LORA_APP_WaterMonitoring",
            "key": "41"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "6e8f1235-6f37-4c01-b3e9-92f28b78138d"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "18"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "40"
         },
         {
            "optionType": "LORA_APP_WaterMonitoring",
            "optionValue": "41"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "1e1f08e9-8b53-4acb-8203-73fb5faac3ac"
         }
      ]
   },
   {
      "id": 1,
      "reference": "CMH",
      "name": "Club Mahindra Holidays",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 8,
         "value": "Hospitality"
      },
      "industrySector": "Hospitality",
      "enableLora": null,
      "applications": [

      ],
      "entityOptions": [

      ]
   },
   {
      "id": 45,
      "reference": "GGL",
      "name": "Google",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 18,
         "value": "Technology/Science"
      },
      "industrySector": "Technology/Science",
      "enableLora": null,
      "applications": [

      ],
      "entityOptions": [

      ]
   },
   {
      "id": 49,
      "reference": "MLRIT",
      "name": "Marri Laxman Reddy Institute Technology",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 4,
         "value": "Education"
      },
      "industrySector": "Education",
      "enableLora": true,
      "applications": [
         {
            "id": 72,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "44"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "c9048c55-1611-4cb3-a9f5-91d1cbdb5e14"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "26"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "44"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "0fca94b3-0f6c-45cd-8ed9-f59631924a9a"
         }
      ]
   },
   {
      "id": 49,
      "reference": "MLRIT",
      "name": "Marri Laxman Reddy Institute Technology",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 4,
         "value": "Education"
      },
      "industrySector": "Education",
      "enableLora": true,
      "applications": [
         {
            "id": 72,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "44"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "c9048c55-1611-4cb3-a9f5-91d1cbdb5e14"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "26"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "44"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "0fca94b3-0f6c-45cd-8ed9-f59631924a9a"
         }
      ]
   },
   {
      "id": 49,
      "reference": "MLRIT",
      "name": "Marri Laxman Reddy Institute Technology",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 4,
         "value": "Education"
      },
      "industrySector": "Education",
      "enableLora": true,
      "applications": [
         {
            "id": 72,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "44"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "c9048c55-1611-4cb3-a9f5-91d1cbdb5e14"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "26"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "44"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "0fca94b3-0f6c-45cd-8ed9-f59631924a9a"
         }
      ]
   },
   {
      "id": 49,
      "reference": "MLRIT",
      "name": "Marri Laxman Reddy Institute Technology",
      "entityType": {
         "id": 1,
         "reference": "Organization"
      },
      "type": "Organization",
      "sector": {
         "id": 4,
         "value": "Education"
      },
      "industrySector": "Education",
      "enableLora": true,
      "applications": [
         {
            "id": 72,
            "value": "EnergyMonitoring",
            "reference": "LORA_APP_EnergyMonitoring",
            "key": "44"
         }
      ],
      "entityOptions": [
         {
            "optionType": "Lora_OTAA_Device_Profile_Id",
            "optionValue": "c9048c55-1611-4cb3-a9f5-91d1cbdb5e14"
         },
         {
            "optionType": "Lora_Org_Id",
            "optionValue": "26"
         },
         {
            "optionType": "LORA_APP_EnergyMonitoring",
            "optionValue": "44"
         },
         {
            "optionType": "Lora_Service_Profile_Id",
            "optionValue": "0fca94b3-0f6c-45cd-8ed9-f59631924a9a"
         }
      ]
   }
]

let property = {
   "listName": "Properties List",
   "list": [
      {
         "id": 18,
         "value": "Ashtamudi,Ashtamichira,KL"
      },
      {
         "id": 17,
         "value": "Naldhera,Naldehra,HP"
      },
      {
         "id": 13,
         "value": "Varca Beach,Varca,GA"
      }
   ]
};

let location_types = [
   {
      "id": 4,
      "value": "Basement"
   },
   {
      "id": 1,
      "value": "Building"
   },
   {
      "id": 2,
      "value": "Floor"
   },
   {
      "id": 5,
      "value": "Outside"
   },
   {
      "id": 3,
      "value": "Roof"
   },
   {
      "id": 8,
      "value": "Room"
   },
   {
      "id": 7,
      "value": "Space"
   },
   {
      "id": 6,
      "value": "Wing"
   },
   {
      "id": 9,
      "value": "Zone"
   }
];

let entity_types = [{ "id": 1, "reference": "Organization" }, { "id": 2, "reference": "Service Provider" }];

let property_types = [
   {
      "id": 1,
      "value": "Automobile Dealership"
   },
   {
      "id": 2,
      "value": "Church"
   },
   {
      "id": 3,
      "value": "College/University"
   },
   {
      "id": 4,
      "value": "Convenience Store"
   },
   {
      "id": 5,
      "value": "Convention Centre"
   },
   {
      "id": 6,
      "value": "Courthouse"
   },
   {
      "id": 7,
      "value": "Data Centre"
   },
   {
      "id": 8,
      "value": "Drinking Water Treatment & Distribution"
   },
   {
      "id": 9,
      "value": "Energy/Power Station"
   },
   {
      "id": 10,
      "value": "Factory"
   },
   {
      "id": 11,
      "value": "Fire Station"
   },
   {
      "id": 45,
      "value": "Greenhouse"
   },
   {
      "id": 12,
      "value": "Gurdwara"
   },
   {
      "id": 13,
      "value": "Hospital"
   },
   {
      "id": 14,
      "value": "Hotel"
   },
   {
      "id": 47,
      "value": "Hydrophonic Farm"
   },
   {
      "id": 15,
      "value": "Laboratory"
   },
   {
      "id": 16,
      "value": "Library"
   },
   {
      "id": 17,
      "value": "Mailing Centre/Post Office"
   },
   {
      "id": 18,
      "value": "Mall"
   },
   {
      "id": 19,
      "value": "Mixed Use Property"
   },
   {
      "id": 20,
      "value": "Monastery"
   },
   {
      "id": 21,
      "value": "Mosque"
   },
   {
      "id": 22,
      "value": "Movie Theatre"
   },
   {
      "id": 23,
      "value": "Multifamily Housing"
   },
   {
      "id": 24,
      "value": "Museum"
   },
   {
      "id": 25,
      "value": "Office"
   },
   {
      "id": 26,
      "value": "Performing Arts"
   },
   {
      "id": 27,
      "value": "Police Station"
   },
   {
      "id": 46,
      "value": "Polyhouse"
   },
   {
      "id": 28,
      "value": "Prison/Incarceration"
   },
   {
      "id": 29,
      "value": "Residence Hall/Dormitory"
   },
   {
      "id": 30,
      "value": "Resort"
   },
   {
      "id": 31,
      "value": "Restaurant/Bar"
   },
   {
      "id": 32,
      "value": "Retail Store"
   },
   {
      "id": 33,
      "value": "School"
   },
   {
      "id": 34,
      "value": "Self-Storage Facility"
   },
   {
      "id": 35,
      "value": "Senior Care Community"
   },
   {
      "id": 36,
      "value": "Single Family Home"
   },
   {
      "id": 37,
      "value": "Social/Meeting Hall"
   },
   {
      "id": 38,
      "value": "Stadium"
   },
   {
      "id": 39,
      "value": "Supermarket/Grocery Store"
   },
   {
      "id": 40,
      "value": "Temple"
   },
   {
      "id": 41,
      "value": "Transportation Terminal/Station"
   },
   {
      "id": 42,
      "value": "Warehouse/Distribution Centre"
   },
   {
      "id": 43,
      "value": "Wastewater Treatment Plant"
   },
   {
      "id": 44,
      "value": "Wholesale Club/Supercentre"
   }
];

let day_intervals = [
   {
      "id": 1,
      "value": "00:00",
      "minutes": 0
   },
   {
      "id": 2,
      "value": "00:30",
      "minutes": 30
   },
   {
      "id": 3,
      "value": "01:00",
      "minutes": 60
   },
   {
      "id": 4,
      "value": "01:30",
      "minutes": 90
   },
   {
      "id": 5,
      "value": "02:00",
      "minutes": 120
   },
   {
      "id": 6,
      "value": "02:30",
      "minutes": 150
   },
   {
      "id": 7,
      "value": "03:00",
      "minutes": 180
   },
   {
      "id": 8,
      "value": "03:30",
      "minutes": 210
   },
   {
      "id": 9,
      "value": "04:00",
      "minutes": 240
   },
   {
      "id": 10,
      "value": "04:30",
      "minutes": 270
   },
   {
      "id": 11,
      "value": "05:00",
      "minutes": 300
   },
   {
      "id": 12,
      "value": "05:30",
      "minutes": 330
   },
   {
      "id": 13,
      "value": "06:00",
      "minutes": 360
   },
   {
      "id": 14,
      "value": "06:30",
      "minutes": 390
   },
   {
      "id": 15,
      "value": "07:00",
      "minutes": 420
   },
   {
      "id": 16,
      "value": "07:30",
      "minutes": 450
   },
   {
      "id": 17,
      "value": "08:00",
      "minutes": 480
   },
   {
      "id": 18,
      "value": "08:30",
      "minutes": 510
   },
   {
      "id": 19,
      "value": "09:00",
      "minutes": 540
   },
   {
      "id": 20,
      "value": "09:30",
      "minutes": 570
   },
   {
      "id": 21,
      "value": "10:00",
      "minutes": 600
   },
   {
      "id": 22,
      "value": "10:30",
      "minutes": 630
   },
   {
      "id": 23,
      "value": "11:00",
      "minutes": 660
   },
   {
      "id": 24,
      "value": "11:30",
      "minutes": 690
   },
   {
      "id": 25,
      "value": "12:00",
      "minutes": 720
   },
   {
      "id": 26,
      "value": "12:30",
      "minutes": 750
   },
   {
      "id": 27,
      "value": "13:00",
      "minutes": 780
   },
   {
      "id": 28,
      "value": "13:30",
      "minutes": 810
   },
   {
      "id": 29,
      "value": "14:00",
      "minutes": 840
   },
   {
      "id": 30,
      "value": "14:30",
      "minutes": 870
   },
   {
      "id": 31,
      "value": "15:00",
      "minutes": 900
   },
   {
      "id": 32,
      "value": "15:30",
      "minutes": 930
   },
   {
      "id": 33,
      "value": "16:00",
      "minutes": 960
   },
   {
      "id": 34,
      "value": "16:30",
      "minutes": 990
   },
   {
      "id": 35,
      "value": "17:00",
      "minutes": 1020
   },
   {
      "id": 36,
      "value": "17:30",
      "minutes": 1050
   },
   {
      "id": 37,
      "value": "18:00",
      "minutes": 1080
   },
   {
      "id": 38,
      "value": "18:30",
      "minutes": 1110
   },
   {
      "id": 39,
      "value": "19:00",
      "minutes": 1140
   },
   {
      "id": 40,
      "value": "19:30",
      "minutes": 1170
   },
   {
      "id": 41,
      "value": "20:00",
      "minutes": 1200
   },
   {
      "id": 42,
      "value": "20:30",
      "minutes": 1230
   },
   {
      "id": 43,
      "value": "21:00",
      "minutes": 1260
   },
   {
      "id": 44,
      "value": "21:30",
      "minutes": 1290
   },
   {
      "id": 45,
      "value": "22:00",
      "minutes": 1320
   },
   {
      "id": 46,
      "value": "22:30",
      "minutes": 1350
   },
   {
      "id": 47,
      "value": "23:00",
      "minutes": 1380
   },
   {
      "id": 48,
      "value": "23:30",
      "minutes": 1410
   }
];

export function deleteLocationData(id) {
   locations.forEach(function(item, index, object) {
      if (item.id === id) {
        object.splice(index, 1);
      }
    });
   return dispatch => {
      dispatch(delete_location_data_success());
      return true;
   }
}

export function updatedLocationData(editted_data, editid) {
   // let data = [...locations];
   // data.map((item, index) => {
   //    if (item.id === editid) {
   //       item['property'] = editted_data[0].propertyName;
   //       item['locationBusinessHoursList'] = editted_data[0].locationBusinessHoursList;
   //       item['locationType'] = editted_data[0].locationType;
   //       item['propertyId'] = editted_data[0].property;
   //       item['aggregateId'] = editted_data[0].aggregationid;
   //       item['entityId'] = editted_data[0].organization;
   //       item['floor'] = editted_data[0].label;
   //       item['zone'] = editted_data[0].zone;
   //       item['entityReference'] = editted_data[0].entityReference;        
   //    }
   // })
   // locations = data;
   // console.log("loc::", data);
   return dispatch => {
      dispatch(update_locationitem_success(locations));
      return locations;
   }
}

export function fetchlocationitemdata() {
   return dispatch => {
      dispatch(fetch_locationitem_pending());
      dispatch(fetch_locationitem_success(locations));
      return locations;
   }
}

export function fetchorganizationdata() {
   return dispatch => {
      dispatch(fetch_organizationdata_pending());
      dispatch(fetch_organizationdata_success(entities));
      return entities;
   }
}

export function fetchlocationtypesdata() {
   return dispatch => {
      dispatch(fetch_location_types_pending());
      dispatch(fetch_location_types_success(location_types));
      return location_types;
   }
}

export function fetchentitytypesdata() {
   return dispatch => {
      dispatch(fetch_entity_types_pending());
      dispatch(fetch_entity_types_success(entity_types));
      return entity_types;
   }
}

export function fetchpropertytypesdata() {
   return dispatch => {
      dispatch(fetch_property_types_pending());
      dispatch(fetch_property_types_success(property_types));
      return property_types;
   }
}

export function fetchdayintervalsdata() {
   return dispatch => {
      dispatch(fetch_day_intervals_pending());
      dispatch(fetch_day_intervals_success(day_intervals));
      return day_intervals;
   }
}

export function business_hours(value) {
   console.log("business_hours::", value);
}

export function add_organization(value) {
   console.log("add_organization::", value);
}

export function editLocation(editid) {
   let editdata = [];
   locations.map((item, index) => {
      if (item.id === editid) {
         editdata.push(item);
      }
   })
   return dispatch => {
      dispatch(edit_location_data_success(editdata[0]));
      return editdata[0];
   }
}

export function fetchpropertydata() {
   return dispatch => {
      dispatch(fetch_property_pending());
      dispatch(fetch_property_success(property.list));
      return property.list;
   }
}













