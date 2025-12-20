const buildList = require('./buildList.cjs');

buildList().then(data => console.log(JSON.stringify(data, null, 2)));