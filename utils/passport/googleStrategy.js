const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const User = require('../../models').User

const strategy = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: '/auth/google/callback'
	},
	function(accessToken, refreshToken, profile, done) {
		console.log(profile)
		const { id, name, photos } = profile
		User.findOne({ where: {'googleId': id }}, (err, userMatch) => {
			console.log("user")
			// handle errors here:
			if (err) {
				console.log(err)
				return done(null, false)
			}
			// if there is already someone with that googleId
			if (userMatch) {
				console.log(userMatch)
				return done(null, userMatch)
			} else {
				console.log("wheee")
				User.create({
					'google.googleId': id,
					firstName: name.givenName,
					lastName: name.familyName
				}, {}).then(err, savedUser => {
					if (err) {
						console.log(err)
						return done(null, false)
					} else {
						return done(null, savedUser)
					}
				});
			}
		})
	}
)

module.exports = strategy
