import { SampleApiClient } from "../api_adapter/apiClient";

describe('test', () => {
    test('example', () => {
        const a: number = 4;
        expect(a).toBe(4);
    });

    test('apiClient', async () => {
        const apiClient = new SampleApiClient();
        console.log(await apiClient.get阿部寛())
    });
})