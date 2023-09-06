const updateTimes = (date) => ['20:00', '21:00']
const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
]

export default function availableTimesReducer(availableTimes, action) {
    switch (action.type) {
        case 'update': {
            return updateTimes(action.date);
        }
        case 'initialize': {
            return initializeTimes()
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
