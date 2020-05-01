let RootController = {};
RootController.signIn = (req, res)=>{
    return res.render('sign_in');
}
module.exports = RootController;