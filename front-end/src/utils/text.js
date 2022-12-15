import React from "react";

const titleize = (str = "") => str
    .split(" ")
    .map(word => word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");

export { titleize };
