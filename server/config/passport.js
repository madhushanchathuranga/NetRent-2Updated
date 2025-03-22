const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

// Google OAuth Strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Check if the user already exists in the database
                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    // If the user doesn't exist, create a new user
                    user = new User({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value,
                        profilePicture: profile.photos[0].value
                    });

                    // Save the new user to the database
                    await user.save();
                }

                // Pass the user object to the next middleware
                done(null, user);
            } catch (error) {
                console.error('Error during Google authentication:', error);
                done(error, null);
            }
        }
    )
);

// Serialize user to store in the session
passport.serializeUser((user, done) => {
    done(null, user.id); // Store only the user ID in the session
});

// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user); // Attach the user object to req.user
    } catch (error) {
        console.error('Error during deserialization:', error);
        done(error, null);
    }
});

module.exports = passport;