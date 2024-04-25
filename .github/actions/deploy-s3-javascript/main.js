const core = require("@actions/core");
const exec = require("@actions/exec");
const github = require("@actions/github");

function run() {

    const bucket = core.getInput("bucket", { required: true });
    const bucketRegion = core.getInput("bucket-region", { required: true });
    const sourceCode = core.getInput("source-code", { required: true });

    const s3Uri = `s3://${bucket}`
    exec.exec(`aws s3 sync ${sourceCode} ${s3Uri} --region ${bucketRegion}`)

    core.notice("Hello from my custom JavaScript action!");

    const websiteUrl = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl);
}

run();