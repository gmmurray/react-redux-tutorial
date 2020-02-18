import { ADD_ARTICLE, DATA_REQUESTED } from '../constants/action-types';
export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
}

// replaced with redux-saga
// export function getData() {
//     return function (dispatch) {
//         return fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then(json => {
//                 dispatch({ type: DATA_LOADED, payload: json });
//             });
//     };
// }

export function getData() {
    return { type: DATA_REQUESTED };
}