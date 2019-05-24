import * as Axios from "axios";

export class SampleApiClient {
    private _axios: Axios.AxiosInstance;

    constructor(axios?: Axios.AxiosInstance) {
        if (axios === undefined)
            axios = Axios.default.create({});
        this._axios = axios;
    }

    async get阿部寛() {
        return (await this._axios.get("http://abehiroshi.la.coocan.jp/")).data;
    }
}