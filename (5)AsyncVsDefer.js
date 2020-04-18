// Case 1: None:
// The HTML parsing would be stopped, and resumes only after the script fetching and
// execution are done.

// Case 2: Async:
// Script gets fetched parallelly while HTML's being parsed. Once the fetch is complete,
// parsing stops and execution is done. Parsing then continues again.

// Case 3: Defer:
// Same as above, script gets fetched parallelly, but is executed only when the entire 
// parsing is done.



/**
 * Also, Lydia's talk on this, from React Conf(2k19), is gold❤
 **/