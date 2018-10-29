const router = require("express").Router()

/* 
 * 
 * postLogin 
 * network operation postLogin
 * accepts params req,res,next
 * postLogin checks Email is not valid
 * postLogin checks Password cannot be blank
 * if errors then
 * redirect /login
 * it uses vars errors 
 */
router.post("/postLogin", (req, res, next) => {
  req.assert("email", "Email is not valid").isEmail()

  req.assert("password", "Password cannot be blank").notEmpty()

  req.sanitize("email").normalizeEmail()

  if (errors) {
    return res.redirect("/login")
  }
})
module.exports = router
