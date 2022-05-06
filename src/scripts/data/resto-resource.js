import API_ENDPOINT from '../globals/api-endpoint';

class RestoResource {
    static async getAllResto() {
        const response = await fetch(API_ENDPOINT.GET_ALL_RESTO);
        const responseJson = await response.json();
        return responseJson;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default RestoResource;
