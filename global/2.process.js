process.argv.forEach((val, index, array) => {
    console.log(val, index, array);
});

process.kill(14448);