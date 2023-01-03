
const titleize = (str = "") => str
    .split(" ")
    .map(word => word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase())
    .join(" ");

const mergeNamesOfAuthor = (author) => {
    const first = author.firstname;
    const last = author.lastname;
    const name = `${first} ${last}`
    return titleize(name);
}

export { titleize, mergeNamesOfAuthor };
