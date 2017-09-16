
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

    describe('Initial Entries', function () {

        var container = $('.feed');

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('load function does its work', function (done) {

            var entryElements = container.find('.entry');
            expect(entryElements).toBeDefined();
            expect(entryElements.length).not.toBe(0);
            done();
        });


    });

    describe('New feed selection works', function () {

        var initialFirstEntry = '';
        var changedFirstEntry = '';

        beforeEach(function (done) {
            loadFeed(0, function () {
                
                initialFirstEntry = $('.entry').first().text();

            });

            loadFeed(1, function () {
                changedFirstEntry = $('.entry').first().text();
                done();
            });
        });



        it('loadfeed updates content works', function (done) {

            expect(initialFirstEntry).toBeDefined();
            expect(initialFirstEntry).not.toBe("");

            expect(changedFirstEntry).toBeDefined();
            expect(changedFirstEntry).not.toBe("");

            expect(initialFirstEntry === changedFirstEntry).toBe(false);

            done();
        });


    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());
