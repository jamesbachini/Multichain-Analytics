# Multichain Analytics

This simple Node.js app uses Multichain.org (formerly Anyswap) explorer API to query the last 1000 transactions.

The app then counts the destination chains and the asset ID's (tickers) to see what is being transferred and where. 

## Usage

Download or clone the repo. Make sure you have NodeJS version 14+ installed.

From the command line run `npm install`

Then run the app with `node multichain.js`

Results will be printed to console in JSON format.

## Release Notes

Latest release: 1.0.0

### 1.0.0

Very simple first release with no persistent storage.
Queries the API for real-time transactions.

## Known Issues

Hit some API rate limits which caused queries to fail or get limited to 100 transactions.

### Links

* [James Bachini](https://jamesbachini.com)

* [Github](https://github.com/jamesbachini)

* [YouTube](https://youtube.com/jamesbachini)

*[Twitter](https://twitter.com/james_bachini)



