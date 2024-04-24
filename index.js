const express = require("express")
const app = express()
const basicAuth = require("express-basic-auth")

const port = process.env.PORT || 3000

const stripeDomain = process.env.STRIPE_API_DOMAIN
if (!stripeDomain) {
	throw new Error("Env STRIPE_API_DOMAIN is missing")
}

const stripeKey = process.env.STRIPE_API_KEY
if (!stripeKey) {
	throw new Error("Env STRIPE_API_KEY is missing")
}
// This is a demo app, please don't actually move any money around, even in “production”
if (!stripeKey.startsWith("sk_test_")) {
	throw new Error("ENV STRIPE_API_KEY must be a test key")
}

const stripeAccount = process.env.STRIPE_API_ACCOUNT
if (!stripeAccount) {
	throw new Error("Env STRIPE_API_ACCOUNT is missing")
}
if (!stripeAccount.startsWith("acct_")) {
	throw new Error("Env STRIPE_API_ACCOUNT must start with `acct_`")
}

const stripe = require("stripe")(stripeKey)

// Authentication middleware
app.use(
	basicAuth({
		users: { "me@example.com": "bicycle-whammy-snack-potato" },
	}),
)

app.get("/", (req, res) => {
	res.send("Hello world!")
})

app.get("/balance", async (req, res) => {
	const balance = await stripe.balance.retrieve()

	res.type("json")
	res.send(balance)
})

app.listen(port, () => {
	console.log("Demo app listening on port " + port)
})
