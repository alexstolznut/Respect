<<<<<<< HEAD
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
    woopra.track("ltg_a_clicked");
=======
function initializePage() {
    // add any functionality and listeners you want here

  $(".ltg-version-a").click(function(){
    //add your Woopra tracking code for version A's like button click event
   woopra.call("trackForm", "ltg-version-a", "form-ltg-orig");
>>>>>>> 019ce2dff267f21678242af27fb29f462ab06ed0
  })

  $(".ltg-version-b").click(function(){
    //add your Woopra tracking code for version A's like button click event
<<<<<<< HEAD
    woopra.track("ltg_b_clicked")
  })

}

function addProjectDetails(e){
  e.preventDefault();

  //Get the div ID, e.g., "project3"

  var projectID = $(this).closest('.project').attr('id');

  //get rid of 'project' from the front of the id 'project3'

  var idNumber = projectID.substr('project'.length);

  console.log("Uer clicked on ")

}
=======
     woopra.call("trackForm", "ltg-version-b", "form-ltg-alt");
  })
}
>>>>>>> 019ce2dff267f21678242af27fb29f462ab06ed0
