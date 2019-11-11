/*
 * File:        config.js
 * Type:        application/javascript
 * Description: NĖURO Configuration File (stub)
 * NOTE:        The 'config.js' file is required by NĖURO and must be in same directory as file 'index.html'
 */

/**
 * Section name: sys_properties
 * Contains common settings
 */
sys_properties = {

    /*
     * Zoom percentage
     * Default: 100
     */
    "zoom_pct" : 100,

    /**
     * URL of help file
     */
    "help_url" : "https://neuro-lab.github.io",

    /**
     * Ordered list of available languages
     */
    "langs" : [ 'en' ],

    /**
     * Placeholder for search field
     */
    "search_placeholder" : {
	    en : 'Search'
    },

    /**
     * Used as:
     * Application name
     */
    "name" : {
	    en : "Event Sources Example"
    },

    /**
     * Used as:
     * 1. Browser window title;
     * 2. Dashboard Header text
     */
    "title" : {
	    en : "Event Sources"
    },

    /**
     * Used as:
     * Status text online
     */
    "status_text_online" : {
	    en : "Online"
    },

    /**
     * Used as:
     * Status text online
     */
    "status_text_offline" : {
	    en : "Offline"
    },

    /**
     * Grayscale filter
     * Default: false
     */
    "grayscale" : false,

    /**
     * Display header
     * Default: true
     */
    "header" : true,

    /**
     * Display footer
     * Default: true
     */
    "footer" : true,

    /**
     * Display group_headers
     * Default: true
     */
    "group_headers" : true,

    /**
     * Display card_headers
     * Default: true
     */
    "card_headers" : true,

    /**
     * Check config changed interval in seconds
     * Default value: 0 (no check)
     */
    "check_config_changed_interval_sec" : 2,

    /**
     * Stand-by timeout in seconds
     * Default value: 300 (5 minutes)
     */
    "stand_by_timeout_sec" : 300, // 5 minutes

    /**
     * Default card height in pixels
     */
    "default_card_height_px" : 350,

    /**
     * Default group width in pixels
     */
    "default_group_width_px" : 477,
};

/**
 * Section name: sys_resources
 * List of third party CSS and/or JavaScript files (Put all your libraries here!)
 */

sys_resources = [ "plugins/HelloWorldPlugin.js", //
];

/**
 * Section name: sys_eventHandler
 */

sys_eventHandler = function(eventName, data) {
};

/**
 * Section name: sys_eventProviders
 * List of Event Sources URL(s)
 */

sys_eventProviders = [ {
    "type" : "WSS",
    "events" : [ 'temperature_wss' ],
    "url" : "ws://localhost:8082",
}, {
    "type" : "SSE",
    "events" : [ 'temperature_sse' ],
    "url" : "http://localhost:8081",
}, {
    "type" : "FETCH",
    "events" : [ 'temperature_fetch' ],
    "url" : "http://localhost:8080",
    "interval" : 3000,
}, {
    "type" : "FILE",
    "events" : [ 'temperature_file' ],
    "url" : "/tmp/data.tmp",
    "interval" : 3000,
}, ];

/**
 * Section name: sys_groups
 */

sys_groups = [ {
	"cards" : [ {
	    "class" : "HelloWorldPlugin",
	    "events" : [ 'temperature_wss' ],
	} ]
}, {
	"cards" : [ {
	    "class" : "HelloWorldPlugin",
	    "events" : [ 'temperature_sse' ],
	} ]
}, {
	"cards" : [ {
	    "class" : "HelloWorldPlugin",
	    "events" : [ 'temperature_fetch' ],
	} ]
}, {
	"cards" : [ {
	    "class" : "HelloWorldPlugin",
	    "events" : [ 'temperature_file' ],
	} ]
}, ];

/* EOF */
