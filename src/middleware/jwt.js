const jwt = require('jsonwebtoken');
 
 
const secretKey = 'YOUR SECRET KEY';
const options = {
    expiresIn:'1h'
}
const payload = {
    id:1,
    username:"tom",
    role:"AUTHOR"
};
 
const token = jwt.sign(payload, secretKey, options);
 
console.log(token);