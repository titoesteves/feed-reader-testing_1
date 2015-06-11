Project 6
===============================

Welcome to the feed reader testing project. Double click index.html to run the app. 

1. This project includes numerous tests against the Google feed reader API. 
2. Jasmine suites and specs were used for the test
3. Created 4 test suites
	- Suite 1 tests to make sure that the allFeeds variable has been defined and that it is not empty.
	- Suite 2 ensures the menu element is hidden by default
	- Suite 3 ensures when the loadFeed function is called and completes its work, there is at least
      a single .entry element within the .feed container.
    - Suite 4 ensures when a new feed is loaded by the loadFeed function that the content actually changes