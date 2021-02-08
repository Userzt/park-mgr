const auth = require('./auth/index');
const inviteCode = require('./invite-code/index');

module.exports = (app) =>{
    app.use(auth.routes());
    app.use(inviteCode.routes());
};
