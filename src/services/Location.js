import { fetch_locationitem_pending, fetch_locationitem_success, fetch_locationitem_error, fetch_organizationdata_pending, fetch_organizationdata_success, fetch_organizationdata_error, fetch_location_types_pending, fetch_location_types_success, fetch_entity_types_pending, fetch_entity_types_success, fetch_property_types_pending, fetch_property_types_success, fetch_day_intervals_pending, fetch_day_intervals_success, fetch_property_pending, fetch_property_success, edit_location_data_success, edit_location_data_pending, update_locationitem_success, delete_location_data_success, data_post_status } from '../actions/locationitem';
import axios from 'axios';
import { SERVER_URL, HEADER } from '../config';
import statusMessage from './status';

let locations = { "locations": [{ 'location': "BIPL-PDI-MBG" }, { 'location': "CMASH" }, { 'location': "CMNLD" }, { 'location': "CMVBG" }] };

// axios.get(`${SERVER_URL}region/list?country=US`).then(function (res) {

export function fetchlocationitemdata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      var instance = axios.create({ baseURL: SERVER_URL, timeout: 2000, });
      try {
         axios.post(`${SERVER_URL}locations`, locations, { headers: HEADER })
            .then(async (res) => {
               statusMessage(dispatch, "loading", false);
               resolve(
                  dispatch(fetch_locationitem_success(res.data.rows))
               );
            });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchorganizationdata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}entities`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_organizationdata_success(res.data.rows))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchlocationtypesdata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}location_types`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_location_types_success(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchentitytypesdata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}entity_types`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_entity_types_success(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchpropertytypesdata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}property_types`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_property_types_success(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchpropertydata(id) {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}property/list?entity=${id}`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_property_success(res.data.list))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function fetchdayintervalsdata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}day_intervals`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_day_intervals_success(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function business_hours(value) {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.post(`${SERVER_URL}location`, value, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            var status = '';
            if (res.status === 200 && res.data !== '') {
               status = 'success';
            }
            if (res.status === 200 && res.data === '') {
               status = 'error';
            }
            resolve(
               dispatch(data_post_status(status, res.data, 'add'))
            );
         }).catch(error => {
            statusMessage(dispatch, 'error', error);
            reject(error);
            resolve(
               dispatch(data_post_status('error', error, 'add'))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function add_organization(value) {
   // location
   console.log("add_organization::", value);
}

export function editLocation(editid) {
   let editdata = [];
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.post(`${SERVER_URL}locations`, locations, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            res.data.rows.map((item, index) => {
               if (item.id === editid) {
                  editdata.push(item);
               }
            })
            resolve(
               dispatch(edit_location_data_success(editdata[0]))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}

export function deleteLocationData(id) {
   // locations.forEach(function (item, index, object) {
   //    if (item.id === id) {
   //       object.splice(index, 1);
   //    }
   // });
   // return dispatch => {
   //    dispatch(delete_location_data_success());
   //    return true;
   // }
}










