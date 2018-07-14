export default {
    compilerEnchancements: false,
    extensions: ["ts"],
    require: [
        "ts-node/register"
    ],
    files: [
        "test/**/*.ts"
    ],
    sources: [
        "src/**/*.ts"
    ]
}