import replace from "rollup-plugin-replace";
import rimraf from "rimraf";

rimraf.sync("dist");

const pkg = require("./package.json");
const { version } = pkg;

const plugins = {
    plugins: [
        replace({
            delimiters: ["version{{", "}}"],
            version
        })
    ]
};

export default [
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.iife.js",
            format: "iife"
        },
        ...plugins
    },
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.system.js",
            format: "system"
        },
        ...plugins
    },
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.cjs.js",
            format: "cjs"
        },
        ...plugins
    },
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.umd.js",
            format: "umd"
        },
        ...plugins
    },
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.esm.js",
            format: "esm"
        },
        ...plugins
    }
];
