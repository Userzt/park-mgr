var jwt = require('jsonwebtoken');
var token = jwt.sign({
    account: 'xiaoming',
    id:'123456'
}, 'user1');

console.log(token);

/*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MTI2MDk4NjZ9.iQ1YNPMCZXfbjAOmSXny_JBaP-3rQueaJV33nUvbuRc
header
加密的算法 sha256
jwt

payload

signnature*/

//解密
jwt.verify(token,'user1',(err,payload) => {
    console.log(err,payload);
});
