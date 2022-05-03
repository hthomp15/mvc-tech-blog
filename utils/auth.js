const authCheck = (req,res, next) => {
    if(!req.session.user_id || req.session.loggedIn === false){
        res.redirect('/login');
    }else{next()};
}

module.exports = authCheck;

