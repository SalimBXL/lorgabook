import React from "react";

const addBackSlash = (url = "http://") => url.trim().substring(-1) !== "/" ? url + "/" : url;

const addDir = (url = "http://", dirToAdd = "") => addBackSlash(url) + dirToAdd.trimStart("/");

export { addBackSlash, addDir };
