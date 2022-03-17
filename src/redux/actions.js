import { CREATE_ADDRESS, DELETE_ACCOUNT, GET_BALANCE, ERROR_ADDRESS } from './types';
import { PATH_GET_BALANCE } from '../appConstants/constants';


export function createAddress (cryptoAccount) {
   return {
        type: CREATE_ADDRESS,
        payload: cryptoAccount
   }
};

export function deleteCryptoAccount (cryptoAccount) {
    return {
        type: DELETE_ACCOUNT,
        payload: cryptoAccount
    }
 };

export function getBalance (cryptoAccounts) {
    let onlyAddresses = "";
    cryptoAccounts.forEach (item => onlyAddresses += item.currencyAddress + '|');
    const stringGet = PATH_GET_BALANCE + onlyAddresses;
    return async dispatch => {
        try {
            const response = await fetch(stringGet);
            const json = await response.json();
            dispatch({
                type: GET_BALANCE,
                payload: json
            });
        } catch (e) {
            dispatch({type: ERROR_ADDRESS})
        }
    };
 };


