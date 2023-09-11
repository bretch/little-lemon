/*
 Available Booking Times by Date

const availableTimes  = {
    'YYYY-MM-DD': ['10:00', '13:00']
}
*/

export const LOCAL_STORAGE_KEY = 'availableTimes'

const loadLocalData = () => {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (data !== null) return JSON.parse(data)
        return {}
    } catch (error) {
        return {}
    }
}

const saveLocalData = (data) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
}

const availableTimesReducer = (availableTimes, action) => {
    let localData = loadLocalData()
    const bookingDate = localData[action.date] ?? []

    switch (action.type) {
        case 'initialize': {
            // If locally saved data is empty save new availableItems
            if (!bookingDate.length) {
                localData = {...localData, [action.date]: action.availableTimes}
            }
            saveLocalData(localData)
            return localData
        }
        case 'update': {
            if (!localData.hasOwnProperty(action.date)) {
                localData = {...localData, [action.date]: action.availableTimes}
                saveLocalData(localData)
            }
            return localData
        }
        case 'updateBookingTime' : {
            const bookingDate = localData[action.date]
            localData = {
                ...localData,
                [action.date]: bookingDate.filter(time => time!== action.time)
            }
            saveLocalData(localData)
            return localData
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default availableTimesReducer