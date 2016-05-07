## Free Code Camp: Timestamp Microservice App

This application was created for the [Timestamp Microservice assignment](https://www.freecodecamp.com/challenges/timestamp-microservice) at [Free Code Camp](https://www.freecodecamp.com/).  

### Usage
If you pass a string as a parameter in the URL, the API will check to see whether that string contains either a Unix timestamp (e.g., `http://path/1450137600`) or a natural language date (e.g., `http://path/December 15, 2015`).

* If it contains a date in either of these formats, the API returns both the Unix timestamp and the natural language form of that date.
  (e.g., `{ "unix":1450137600, "natural": "December 15, 2015" }`)

* If it does not contain a valid date in either of these formats, the API returns null for those properties.
  (e.g., `{ "unix": null, "natural": null }`)

