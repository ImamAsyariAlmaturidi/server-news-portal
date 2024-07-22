const jwt = require('jsonwebtoken')
const secretKey = 'Encrypt'

const signToken = (payload) => {
    return jwt.sign(payload, secretKey)
}

module.exports = { signToken }