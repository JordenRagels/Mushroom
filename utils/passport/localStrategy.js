const User = require('../../models').User
const LocalStrategy = require('passport-local').Strategy
const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function (username, password, done) {
		User.findOne({ where: { 'username': username } })
			.then(match => {
				if (!match) {
					return done(null, false, { message: 'Incorrect username' })
				}
				if (!match.validPassword(password, match.password)) {
					return done(null, false, { message: 'Incorrect password' })
				}
				return done(null, match)
			})
	}
)
module.exports = strategy