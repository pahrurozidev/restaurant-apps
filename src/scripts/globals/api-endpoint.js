import CONFIG from './config';

const API_ENDPOINT = {
    GET_ALL_RESTO: `${CONFIG.BASE_URL}/list`,
    DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
