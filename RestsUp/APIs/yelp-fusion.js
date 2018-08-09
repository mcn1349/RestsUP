const yelp = require('yelp-fusion');

const client = yelp.client('142DqacZqgO2ZMZ0IpwzpSMfhA43UlHY8RVCO1a3fpAtie7Ilah1-EyyJxWOr5GvTb84AGQciYVHts0x9sqNNSQWLPMJs139d8WbqppGgeFclRXjVZel4npptaJmW3Yx');

client.search({
    term:'Four Barrel Coffee',
    location: 'san francisco, ca'
}).then(response =>{
    console.log(response.jsonBody);
}).catch(e=>{
    console.log(e);
});