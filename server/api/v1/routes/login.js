const router = require("express").Router()
const passport = require("../auth")
const { db } = require("../../../utils")

//----------------------------------------------------------------------------------------------------------
//Endpoints
//----------------------------------------------------------------------------------------------------------

/**
 * @swagger
 * api/v1/login/sign_up:
 *   post:
 *     tags:
 *       - name: sign_up
 *     description: sign_up
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: it works!
 */
router.post(
  "/sign_up",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    sign_up().then(result => {
      res.status(200).send(result)
    })
  }
)

/**
 * @swagger
 * api/v1/login/login:
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
 * api/v1/login/login:
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
 * sign_up():
 *
 */
sign_up = () => {
  return new Promise((resolve, reject) => {
    /* TODO - write sign_up function */
    resolve()

    /* TODO - handle sign_up error
                        reject({message: "error"})
                    */
  })
}

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
