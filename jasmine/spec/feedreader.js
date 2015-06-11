/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('has URL defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });


        it('has name defined', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    describe('The menu', function() {
        var menuIcon = $('.menu-icon-link');
        
         it('has menu element hidden by default', function(){
            expect($('.feed-list').parent().hasClass('menu')).toBe(true);
         });
         
          it('menu changes when icon clicked', function(){
            menuIcon.on('click', function(event, expect){
                
                expect;
                
            }).trigger('toggle', [expect($(this).closest('body').hasClass('menu-hidden')).toBe(false)]);
            
          });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        
         beforeEach(function(done){
            loadFeed(1, done);
         });

         it('loadFeed adds element to feed container', function(done){
            expect($('.feed').find('a').length).not.toBe(0);
            done();
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        
         // needed for comparison since loadFeed is async
         beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
         });

        // Used done for async
        it('loadFeed changes content', function(done){
            var feeds = $('.feed').find($('.entry'));
            var firstFeedEntry = feeds[0].innerText;
            loadFeed(1, function(){
                var feeds = $('.feed').find($('.entry'));
                secondFeedEntry = feeds[0].innerText;
                expect(firstFeedEntry).not.toBe(secondFeedEntry);
                done();
            });
        }); 
    });
}());
