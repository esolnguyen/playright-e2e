module.exports = {
    default: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        publishQuiet: true,
        dryRun: false,
        requireModule: [
            "ts-node/register"
        ],
        paths: [
            "./src/tests/**/features/"
        ],
        require: [
            "./src/tests/**/steps/*.ts"
        ]
    }
}