/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "clock",
			position: "top_left",
			config: {
				timezone: "America/New_York",
				showPeriod: "true",
				dateFormat: "LL"
			}
		},
		{
			module: "MMM-WeatherOrNot",
			disabled: false,
			position: "top_left",
			config: {
				location: "eaton",            			// See instructions
				locationCode: "39d74n84d64",            // See instructions
				languages: "en",                        // See Languages list
				tempUnits: "F",                         // F or C
				font: "Play",                           // See Font list
				textColor: "#ffffff",                   // Hex color codes.
				htColor: "#ffffff",                     // high temp color. Hex color codes.
				ltColor: "#00dfff",                     // low temp color. Hex color codes.
				sunColor: "#febc2f",                    // Hex color codes.
				moonColor: "#dfdede",                   // Hex color codes.
				cloudColor: "#dfdede",                  // Hex color codes.
				cloudFill: "#1f567c",                   // Hex color codes.
				rainColor: "#93bffe",                   // Hex color codes.
				snowColor: "#dfdede",                   // Hex color codes.
				height: "600px",                        // module is responsive to changes
				width: "300px",					        // module is responsive to changes
				label: "Eaton",                         // Location seems logical . .
				label2: "Ohio",                    		// . . . or anything you like
				days: "5",                              // 3, 5 or 7
				theme: "dark",                          // See Themes list *** theme overrides bgColor. ***
				bgColor: "#000000",                     // theme overrides bgColor.
				icons: "Climacons Animated",            // Iconvault, Climacons or Climacons Animated
				animationSpeed: 3000,
				updateInterval: 180 * 60 * 1000,        // 10*60*1000 --> Update every 10 minutes - 
				//60 * 60 * 1000 --> Update every hour
				//180 * 60 * 1000 --> Update every 3 hours
			}
		},
		{
			module: "calendar",
  			config: {
				broadcastPastEvents: true, // <= IMPORTANT to see past events
    			calendars: [
					{
						url: "https://rest.cozi.com/api/ext/1103/0ed7049c-0280-441a-9ce4-3c0f1fd0ccdb/icalendar/feed/feed.ics",
					},
					{
						url: 'https://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics',
					},
				]
			},
		},
		{
			module: 'MMM-MonthlyCalendar',
			position: 'fullscreen_below',
			config: {
				mode: 'fourweeks',
				displaySymbol: true,
				firstDayOfWeek: 'sunday',
				broadcastPastEvents: true,
				fetchInterval: 7200000,
				wrapTitles: true,
				wrapEvents: true,
				wrapLocationEvents: true,
				showTimeToday: true,
				showEnd: true,
				coloredText: false,
				coloredBorder: false,
				coloredSymbol: false,
				coloredBackground: false,
				calendars: [
					{
						url: 'https://rest.cozi.com/api/ext/1103/0ed7049c-0280-441a-9ce4-3c0f1fd0ccdb/icalendar/feed/feed.ics',
						name: 'family',
						priority: 1
					},
					{
						url: 'https://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics',				
						priority: 2,
						name: 'us-holiday',
						symbol: 'calendar',
						color: 'red'
					}
				]
			}
		},
		{
			module: "MMM-MyScoreboard",
			position: "top_left",
			classes: "default everyone",
			header: "My Scoreboard",
			config: {
				showLeagueSeparators: true,
				colored: true,
				viewStyle: "mediumLogos",
				sports: [
					{
						league: "MLB",
						teams: ["CIN"]						
					},
					{
						league: "NFL",
						teams: ["CIN", "NE"]
					},
					{
						league: "USA_MLS",
						teams: ["CIN", "DCU"]
					},
					{
						league: "NCAAF",
						teams: ["MICH", "ORE"]
					}
				]
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
