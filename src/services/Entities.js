import { data_post_status } from '../actions/locationitem';
import axios from 'axios';
import { fetch_entities_types_sucess, fetch_addentitiy_types_success, fetch_sector_addentitiy_types_success } from '../actions/entitiesitem';
import { SERVER_URL, HEADER } from '../config/config';
import statusMessage from './status';
export function fetchentitiesdata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}entities`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            resolve(
               dispatch(fetch_entities_types_sucess(res.data.rows))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}
export function fetchentititypedata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}entity_types`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            //   console.log(":::::", res);
            resolve(
               dispatch(fetch_addentitiy_types_success(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}
export function fetchsectorentititypedata() {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.get(`${SERVER_URL}industry_sectors`, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            console.log(":::::", res);
            resolve(
               dispatch(fetch_sector_addentitiy_types_success(res.data))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}
export function addEntitiy(val) {
   return dispatch => new Promise(async (resolve, reject) => {
      await statusMessage(dispatch, 'loading', true);
      try {
         axios.put(`${SERVER_URL}entities`, val, { headers: HEADER }).then(async (res) => {
            statusMessage(dispatch, "loading", false);
            var status = '';
            if (res.status === 200 && res.data !== '') {
               status = 'success';
            }
            if (res.status === 200 && res.data === '') {
               status = 'error';
            }
            axios.get(`${SERVER_URL}entities`, { headers: HEADER }).then(async (res) => {
               statusMessage(dispatch, "loading", false);
               resolve(
                  dispatch(fetch_entities_types_sucess(res.data.rows))
               );
            });
            resolve(
               dispatch(data_post_status(status, res.data, 'addentitie'))
            );
         }).catch(error => {
            statusMessage(dispatch, 'error', error);
            reject(error);
            resolve(
               dispatch(data_post_status('error', error, 'addentitie'))
            );
         });
      } catch (error) {
         reject(error);
      }
   }).catch(async (err) => { await statusMessage(dispatch, 'error', err); throw err; });
}
