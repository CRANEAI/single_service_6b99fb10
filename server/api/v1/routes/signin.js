const router = require("express").Router()
const passport = require("../auth")
const { db } = require("../../../utils")

//----------------------------------------------------------------------------------------------------------
//Endpoints
//----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * api/v1/signin/login:
 *   post:
 *     tags:
 *       - name: login
 *     description: login
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/login",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    login().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * login():
 *
 */
login = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write login function */
    resolve()

    /* TODO - handle login error
                        reject({message: "error"})
                    */
  })
}
