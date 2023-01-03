
const dateYMDFormated = (date) => {
    const dt = new Date(date);
    const year = dt.getFullYear();
    const month = dt.getMonth() < 10 ? `0${dt.getMonth()}` : dt.getMonth();
    const day = dt.getDay() < 10 ? `0${dt.getDay()}` : dt.getDay();
    return `${year}-${month}-${day}`;
}

const dateTimeFormated = (date) => {
    const dt = new Date(date);
    const year = dt.getFullYear();
    const month = dt.getMonth() < 10 ? `0${dt.getMonth()}` : dt.getMonth();
    const day = dt.getDay() < 10 ? `0${dt.getDay()}` : dt.getDay();
    const hours = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours();
    const minutes = dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes();
    return `${year}-${month}-${day} @ ${hours}:${minutes}`;
}

export { dateYMDFormated, dateTimeFormated };