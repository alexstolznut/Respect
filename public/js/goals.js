'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here

  $(".ltg-version-a").click(function(){
    //add your Woopra tracking code for version A's like button click event
   woopra.call("trackForm", "ltg-version-a", "form-ltg-orig");
  })

  $(".ltg-version-b").click(function(){
    //add your Woopra tracking code for version A's like button click event
     woopra.call("trackForm", "ltg-version-b", "form-ltg-alt");
  })
}