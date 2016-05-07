'use strict';

function dateConverter () {
  
  this.convertDate = function (req, res) {
    // If user enters: /1450137600, then req.params = { date: '1450137600' }
    //
    // If user enters: /December 15, 2015,
    // then the BROWSER??? converts that to /December%2015,%202015
    // but req.params = { date: 'December 15, 2015' }
    //console.log("Date from URL:", req.params.date);
    
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dateObj = { "unix": null, "natural": null };
    var dateStr = req.params.date;
    var dateValue = Number(dateStr);
    var date;
    
    if (isNaN(dateValue)) {
      // User sent a date in TEXT format.
      // Hopefully as a natural date: 'December 15, 2015'
      // Attempt to convert to a Date object
      var date = new Date(dateStr);
      var dateValue = date.valueOf();
    } else {
      // User sent a date in NUMBER format.
      // Hopefully as a timestamp (nbr of ms since 1/1/1970): '1450137600'
      // Attempt to convert to a Date object
      var date = new Date(dateValue);
    }
    //console.log(date);
    //console.log(dateValue);
    // Check that we have converted to an actual valid date:
    if (!isNaN(date.valueOf())) {
      // it's a valid date
      dateObj.unix = dateValue;
      dateObj.natural = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
    }
    res.json(dateObj);
  };
}

module.exports = dateConverter;