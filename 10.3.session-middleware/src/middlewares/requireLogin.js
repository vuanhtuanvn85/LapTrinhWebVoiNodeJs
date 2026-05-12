const requireLogin = (req, res, next) => {
    console.log('==== requireLogin middleware ====');
    console.log('SessionID: ', req.sessionID);
    console.log('User: ', req.session.user ?? 'Chưa đăng nhập');
    
    if (!req.session.user) {
        return res.status(401).json({error: "Chưa đăng nhập"})
    }
    req.user = req.session.user;
    next();
}

export default requireLogin