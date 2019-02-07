import axios from 'axios';
import {
    ITEM_LIST_URL,
    CATEGORY_LIST_URL,
    LOGIN_URL,
    REVIEWS_URL,
    ORDERS_URL,
    LOGGED_IN_URL,
    LOGOUT_URL
} from "./urls";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const getRequest = (url, get_params = {} ) => {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: get_params }).then((response) => {
            resolve(response);
        }).catch((error) => {
            reject(error);
        });
    });
};

export const postRequest = (url, data, params = {} ) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data).then((response) => {
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

export const getItem = (id) => {
    return getRequest(`${ITEM_LIST_URL}${id}`);
}

export const postLogin = (username, password) => {
    var data = {"username": username, "password": password};
    return postRequest(LOGIN_URL, data);
}

export const postLogout = () => {
    return postRequest(LOGOUT_URL);
}

export const getItemReviews = (id) => {
    var params = {"item_id": id};
    return getRequest(REVIEWS_URL, params);
}

export const getUserReviews = () => {
    var params = {"from_user": true};
    return getRequest(REVIEWS_URL, params);
}

export const getUserOrders = () => {
    var params = {"from_user": true};
    return getRequest(ORDERS_URL, params);
}

export const getOrder = (id) => {
    return getRequest(`${ORDERS_URL}${id}`)
}

export const getOrderItems = (id) => {
    var params = {"order_id": id};
    return getRequest(ITEM_LIST_URL, params);
}

export const getReview = (id) => {
    return getRequest(`${REVIEWS_URL}${id}`)
}

export const getIsLoggedIn = () => {
    return getRequest(LOGGED_IN_URL);
}