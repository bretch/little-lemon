// mock API since meta provided link doesn't work https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js

const timeSlots = [
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
]

const getRandomTimes = () => {
    const availableSlots = Math.ceil(Math.random() *timeSlots.length)
    const slots = []

    if (availableSlots ===  timeSlots.length) return timeSlots

    for (let i = 0; i < availableSlots; i++) {
        const slotIndex = Math.floor(Math.random() *timeSlots.length)
        if (!slots.includes(timeSlots[slotIndex])) {
            slots.push(timeSlots[slotIndex])
        }
    }
    return slots.sort()
}

export const fetchAPI = date => new Promise((resolve, reject) => {
    resolve(getRandomTimes())
})

export const submitAPI = formData => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (formData) resolve(true)
        else reject(new Error('Error saving request.'))
    }, 1000)
})