module.exports = {
    registerChecker,
    loginChecker,
  };
  
  function registerChecker(req, res, next) {
    const { username, password, email } = req.body;
  
    if (!username || !password || !email) {
      res.status(400).json({
        message: 'username, password, and email required',
      });
    } else {
      next();
    }
  }
  
  function loginChecker(req, res, next) {
    const { username, password } = req.body;
  
    if (!username || !password) {
      res.status(400).json({
        message: 'username and password required',
      });
    } else {
      next();
    }
  }