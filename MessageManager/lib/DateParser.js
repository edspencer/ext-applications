Ext.ux.App.MessageManager.DateParser = {
  
  timeAgoInWords: function(datetime) {
    if (typeof(datetime) == 'string') {datetime = this.parseRailsDateTime(datetime);}
    
    
  },
  
  /**
   * Formats a given datetime string or object according to a given format
   * @param {Mixed} datetime Either a Rails-style string or an object with properties for year, month, day, hour, minute and second
   * @returns {String} The formatted date string
   */
  strftime: function(datetime, format) {
    var format = format || "%d/%m/%Y";
    if (typeof(datetime) == 'string') {datetime = this.parseRailsDateTime(datetime);}
    
    var matches = {
      "%d": datetime.day,
      "%m": datetime.month,
      "%Y": datetime.year,
      "%y": datetime.year,
      "%H": datetime.hour,
      "%M": datetime.minute,
      "%S": datetime.second
    };
    
    for (matcher in matches) { format = format.replace(matcher, matches[matcher]); }
    
    return format;
  },
  
  shortDate: function(datetime) {
    return this.strftime(datetime, "%d/%m/%Y");
  },
  
  shortDateTime: function(datetime) {
    return this.strftime(datetime, "%d/%m/%Y at %H:%M");
  },  
  
  /**
   * Parses a datetime in the form "2008-09-17T15:57:57Z"
   * @param {String} datetime The datetime string to parse
   * @return {Object} An anonymous object with the parsed date and time fields
   */
  parseRailsDateTime: function(datetime) {
    var date = datetime.split("T")[0];
    var time = datetime.split("T")[1];
    
    return {
      year:   date.split("-")[0],
      month:  date.split("-")[1],
      day:    date.split("-")[2],
      hour:   time.split(":")[0],
      minute: time.split(":")[1],
      second: time.split(":")[2].replace("Z", "")
    };
  }
};