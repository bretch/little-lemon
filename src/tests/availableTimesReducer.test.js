import availableTimesReducer, { LOCAL_STORAGE_KEY } from './../availableTimesReducer'

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
Object.defineProperty(window, "localStorage", {
    value: {
        getItem: (...args) => mockGetItem(...args),
        setItem: (...args) => mockSetItem(...args),
    },
});

describe('availableTimesReducer', () => {
    beforeEach(() => {
        mockGetItem.mockClear();
        mockSetItem.mockClear();
    })

    test('should call localStorage getItem method when initializing data', () => {
        const state = []
        const date = '2023-09-12'
        const action = { type: 'initialize', date, availableTimes: ['10:00', '11:00']}
        availableTimesReducer(state, action)
        expect(mockGetItem).toHaveBeenCalledTimes(1)
        expect(mockGetItem).toHaveBeenCalledWith(LOCAL_STORAGE_KEY)
    })

    test('should call localStorage setItem method when initializing data', () => {
        const state = []
        const date = '2023-09-12'
        const availableTimes = ['10:00', '11:00']
        const action = { type: 'initialize', date, availableTimes}
        availableTimesReducer(state, action)
        expect(mockSetItem).toHaveBeenCalledTimes(1)
        expect(mockSetItem).toHaveBeenCalledWith(LOCAL_STORAGE_KEY, JSON.stringify({[date]: availableTimes}))
    })
})