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

  $(".block-ltg div-goal-add-a").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("ltg_a_clicked");
  })

  $(".block-ltg div-goal-add-b").click(function(){
    //add your Woopra tracking code for version A's like button click event
    woopra.track("ltg_b_clicked")
  })

}