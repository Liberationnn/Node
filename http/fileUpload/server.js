let fs = require('fs'),
    http = require('http'),
    url = require('url'),
    formidable = require('formidable');

let count = 0;

http.createServer((req, res) => {
    let urlObj = url.parse(req.url);
    let {pathname} = urlObj;

    if (pathname === '/') {
        // fs.createReadStream('./index.html').pipe(res);
        fs.createReadStream('./zone.html').pipe(res);
    } else if (pathname === '/fileUpload') {
        let parser = new formidable();
        parser.parse(req, (err, fields, files) => {
            let {fileName, type, total, size, index} = fields,
                src = fs.createReadStream(files.data.path),
                tar = fs.createWriteStream(`${fileName}_${index}`);
            tar.on('close', () => {
                if (++count === parseInt(total)) {
                    let fd = fs.openSync(`${fileName}.${type}`, 'a'),
                        files = fs.readdirSync('./');
                    files = files.filter((file) => file.startsWith(`${fileName}_`));
                    files.sort((a, b) => a.split('_')[1] - b.split('_')[1]);
                    files.forEach((file) => {
                        let buffer = fs.readFileSync(file);
                        fs.writeSync(fd, buffer, 0, buffer.length);
                        fs.unlinkSync(file);
                    });
                    fs.closeSync(fd);
                    count = 0;
                }
            });
            src.pipe(tar);
            res.end('ok');
        });
    } else {
        res.end('404');
    }

}).listen(8080);