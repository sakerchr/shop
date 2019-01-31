import axios from 'axios';
import {
    ITEM_LIST_URL,
    CATEGORY_LIST_URL
} from "./urls";

export const getRequest = (url, params = {} ) => {
    const method = "GET";
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            params: params
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
};

export const postRequest = (url, data, params = {} ) => {
    const method = "POST";
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            data: data,
            url: url,
            params: params
        }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
};

export const getItems = () => {
    return getRequest(ITEM_LIST_URL);
};

export const getCategories = () => {
    return getRequest(CATEGORY_LIST_URL);
}