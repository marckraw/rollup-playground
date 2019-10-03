import replace from "rollup-plugin-replace";
import rimraf from "rimraf";

rimraf.sync("dist");

const pkg = require("./package.json");
const { version } = pkg;

export default [
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.iife.js",
            format: "iife"
        },
        plugins: [
            replace({
                delimiters: ["version{{", "}}"],
                version
            })
        ]
    },
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.system.js",
            format: "system"
        },
        plugins: [
            replace({
                delimiters: ["version{{", "}}"],
                version
            })
        ]
    },
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.cjs.js",
            format: "cjs"
        },
        plugins: [
            replace({
                delimiters: ["version{{", "}}"],
                version
            })
        ]
    },
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.umd.js",
            format: "umd"
        },
        plugins: [
            replace({
                delimiters: ["version{{", "}}"],
                version
            })
        ]
    },
    {
        input: "src/scripts/app.js",
        output: {
            file: "dist/scripts/app.esm.js",
            format: "esm"
        },
        plugins: [
            replace({
                delimiters: ["version{{", "}}"],
                version
            })
        ]
    }
];
