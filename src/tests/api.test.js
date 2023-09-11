import { fetchAPI, submitAPI } from './../api'


test('fetchAPI should return non-empty array', async () => {
    fetchAPI('20230-09-12').then(result => {
        expect(result).not.toBe([])
    })
})

test('submitAPI should return on non-empty form data', async () => {
    fetchAPI('20230-09-12').then(result => {
        expect(result).not.toBe([])
    })
})