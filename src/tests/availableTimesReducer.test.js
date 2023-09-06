import availableTimesReducer, { initialAvailableTimes } from './../availableTimesReducer'

test('should initialize available times', () => {
    const state = []
    expect(availableTimesReducer(state, { type: 'initialize', date: null })).toEqual(initialAvailableTimes)
})

test('should update available times on date change', () => {
    const state = []
    expect(availableTimesReducer(state, { type: 'update', date: '2023-09-07' })).toEqual(['20:00', '21:00',])
})