# Showing off 1Password Developer Tools with Postman

We are building this to demonstrate as many different 1Password developer tools as possible.

This is a little node.js server that talks to Stripe and returns your current balance. 
As a server, it needs a few environment variables set so that it can properly connect to Stripe.
Those are stored in a 1Password vault and accessed using the `op run` command. 
You can change whether the server runs in development or production mode, just by changing the vault.
(This is a demo app, so it's always actually running in development).


## Requirements

- Node 20+
- 1Password CLI installed and authenticated
- Access to the AgileBits/Postman Demo vault, which grants you
- Access to the Postman Demo account
- The Canary build of Postman

## Installation

1. `make install`

## Running the server

1. `make run`

## Configuring Postman

[I made a Zoom clip](https://zoom.us/clips/share/iopJ0Z1iUm43GSjGRMeXmpEeu03NmJgvrjzKs5HwfcIK3rTKMnSvM1lfe3sD7M7bcQtNdEpIEKjtX5XmOHLAZISY.DHLq8zeHYRRZmIy7) with instructions.
