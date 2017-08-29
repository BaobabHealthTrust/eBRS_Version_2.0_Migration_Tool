#!/usr/bin/env node

"use strict"

var client = require("node-rest-client").Client;
var fs = require("fs");

//fs.writeFileSync("./data/person.sql", "[\n");

if (fs.existsSync("./data/person.sql")) {

    fs.writeFileSync("./data/person.sql", "insert into person(");

}

(new client()).get("http://localhost:5984/ebrs_hq_old/_design/Person/_view/obs_encounters_only?keys=" +
    encodeURIComponent(JSON.stringify(knownEncounters)) + "&include_docs=true&reduce=false", function (data) {

}).on('error', function (err) {
    console.log(err.message, err.request.options);
});

fs.appendFileSync("./data/person.sql", ");");