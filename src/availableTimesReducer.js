/*
 Available Booking Times by Date
const availableTimes  = {
    'YYYY-MM-DD': ['10:00', '13:00']
}
*/

const availableTimesReducer = (availableTimes, action) => {
    switch (action.type) {
        case 'initialize': {
            return {
                [action.date]: action.availableTimes
            }
        }
        case 'update': {
            return {...availableTimes, [action.date]: action.availableTimes}
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default availableTimesReducer