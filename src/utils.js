export const formatDate = date => {
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });

    return `${year}-${month}-${day}`
}

export const getToday = () => {
    const today = new Date()
    return formatDate(today)
}