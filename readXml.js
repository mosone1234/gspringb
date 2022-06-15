const fs = require('fs')

const data = () => fs.readFileSync('./pom.xml', { endoding: 'utf8'})

var xml2json = require('xml-to-json')
 
let data1 = xml2json({input: './pom.xml', output: '' }, (err, result) => {
    if(err) {
        console.error(err);
        return err
    } else {
        // console.log(result);
        // console.log(result.project.groupId)
        return result
    }
});

// console.log(data1)

var convert = require('xml-js');
var xml = data();
var result1 = convert.xml2json(xml, {compact: true, spaces: 2});
var json = JSON.parse(result1)
console.log(json.project.groupId._text)