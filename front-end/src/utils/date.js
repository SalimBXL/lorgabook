import React from "react";

const dateYMDFormated = (date) => {
    const dt = new Date(date);
    const year = dt.getFullYear();
    const month = dt.getMonth() < 10 ? `0${dt.getMonth()}` : dt.getMonth();
    const day = dt.getDay() < 10 ? `0${dt.getDay()}` : dt.getDay();
    return `${year}-${month}-${day}`;
}

export { dateYMDFormated };