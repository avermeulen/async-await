"use strict";

import fetch from "node-fetch";

const username = "avermeulen"

function getProfile(){
    return fetch(`https://api.github.com/users/${username}/repos`);
};

async function go(){
    var profile = await getProfile();
    return await profile.json();
};

var f = async () => {
    var p = await go();
    console.log(p);
};

f();
