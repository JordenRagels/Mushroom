const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const GoogleStratgey = require('./googleStrategy')
const User = require('../../models').User

passport.serializeUser((user, done) => {
	done(null, { id: user.id })
})

passport.deserializeUser((user, done) => {
	console.log(user)
	User.findOne({where: {id: user.id}}).then(res => {
		done(null, res)
	})
})

// ==== Register Strategies ====
passport.use(LocalStrategy)
passport.use(GoogleStratgey)

module.exports = passport
