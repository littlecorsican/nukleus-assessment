const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ success: 0, message: "no bearer token" });
  }

  try {
    const access_token = req.headers.authorization.split(' ')[1];
    console.log("access_token", req.headers.authorization, access_token)
    const decoded = jwt.verify(access_token, process.env.JWTSECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("error", error)
    return res.status(400).send({ success: 0, message: "authentication failed" });
  }
};


module.exports = authenticate

// router.use((req, res, next) => {
//   //console.log("req", req)
//   if (!req.headers.authorization) {
//       return res.status(401).send({ success: 0, message: "authentication failed" });
//   }
//   const access_token = req.headers.authentication.split(' ')[1];
//   console.log("access_token", access_token, process.env.JWTSECRET)
//   jwt.verify(access_token, process.env.JWTSECRET, (err, user) => {
     
//      console.log("err", err)
//      if (err) return res.status(401).send({ success: 0, message: "authentication failed" });
//      console.log("user", user)
 
//      next()
//   })

// })