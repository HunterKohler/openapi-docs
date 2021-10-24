/**
 * Copyright (C) 2021 Hunter Kohler <jhunterkohler@gmail.com>
 *
 * Development server.
 */
import fs from "fs";
import express from "express";
import handlebars from "handlebars";
import helpers from "./helpers.js";

const app = express();

app.get("/", function (req, res, next) {
    const hbs = handlebars.create();
    hbs.registerHelper(helpers);

    const template = hbs.compile(
        fs.readFileSync(
            new URL("./templates/index.hbs", import.meta.url),
            "utf-8"
        )
    );
    const data = JSON.parse(
        fs.readFileSync(
            new URL("../resources/example-openapi.json", import.meta.url),
            "utf-8"
        )
    );

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(template(data));
    next();
});

app.use(express.static(new URL(".", import.meta.url).pathname));

app.listen(3000);
