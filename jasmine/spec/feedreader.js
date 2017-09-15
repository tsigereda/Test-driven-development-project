
$(function () {

    describe('RSS Feeds', function () {


        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test for checking the url property         */
        it('urls are defined', function () {
            allFeeds.forEach(function (element) {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toEqual(0);
            }, this);

        });

        /* test for checking the name property         */
        it('names are defined', function () {
            allFeeds.forEach(function (element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toEqual(0);
            }, this);

        });

    });

    describe('The menu', function () {

        var body = $('body');

        //check the menue is hiden by default 
        it('menu is hiden', function () {

            expect(body.hasClass('menu-hidden')).toBe(true);
        });


        //check if shows up when clicked
        it('menu showes/hides when clicked', function () {
            
           $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(false);

            $('.menu-icon-link').click();
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

    });

  
    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());
