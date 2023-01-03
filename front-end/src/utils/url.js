
const addBackSlash = (url = "http://") => url.toString().trim().substring(-1) !== "/" ? url + "/" : url;

const addDir = (url = "http://", dirToAdd = "") => addBackSlash(url.toString()) + dirToAdd.toString().trimStart("/");

export { addBackSlash, addDir };
