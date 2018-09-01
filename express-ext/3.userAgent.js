/**
 * User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36
 */
let express = require('express'),
    path = require('path'),
    userAgentParser = require('user-agent-parser');
let app = express();

let visit = {
    mobile: 0,
    other: 0
};

app.use((req, res, next) => {
    req.agent = userAgentParser(req.headers['user-agent']);
    next();
});

app.get('/', (req, res) => {
    console.log(req.agent);
    if (req.agent.device.type === 'mobile') {
        visit.mobile += 1;
    } else {
        visit.other += 1;
    }
    console.log(`mobile:${visit.mobile}, other:${visit.other}`);
    res.send(req.agent);
});

app.listen(8080);