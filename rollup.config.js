import replace from "rollup-plugin-replace";

const pkg = require("./package.json");
const { version } = pkg;

export default {
    input: "src/scripts/app.js",
    output: {
        file: "dist/scripts/app.js",
        format: "iife"
    },
    plugins: [
        replace({
            delimiters: ["{{", "}}"],
            version
        })
    ]
};
