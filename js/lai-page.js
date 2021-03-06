function Page(opts) {
    this.opts = opts;

    this.init();
    this.bindEvents();
}

Page.prototype.init = function () {
    var opts = this.opts;

    this.width = $(window).width();
    this.height = $(window).height();
    this.$container = $('.pages');
    this.$pages = this.$container.find('.page');

    this.currentPageIndex = opts.currentPageIndex ? opts.currentPageIndex : 0;
    this.$currentPage = this.$pages.eq(this.currentPageIndex);

    this.$container.width(this.width);
    this.$container.height(this.height);

    this.$container.find('[data-animation]').each(function () {
        var animations = $(this).data('animation');
        $(this).addClass(animations);
    });
    this.to(0);
};

Page.prototype.to = function (pageIndex) {
    this.$currentPage.removeClass('active');
    var $animatedElements = this.$currentPage.find('[data-animation]');
    $animatedElements.removeClass('animated');

    this.$currentPage = this.$pages.eq(pageIndex);
    this.$currentPage.addClass('active');
    var $animatedElements = this.$currentPage.find('[data-animation]');
    $animatedElements.addClass('animated');
};

Page.prototype.next = function () {
    var nextPageIndex  = this.currentPageIndex + 1;
    if (nextPageIndex >= this.$pages.length) {
        nextPageIndex = 0;
    }
    this.to(nextPageIndex);
    this.currentPageIndex  = nextPageIndex;
};

Page.prototype.prev = function () {
    var prevPageIndex  = this.currentPageIndex - 1;
    if (prevPageIndex < 0) {
        prevPageIndex = this.$pages.length - 1;
    }
    this.to(prevPageIndex);
    this.currentPageIndex  = prevPageIndex;
};

Page.prototype.bindEvents = function () {
    var self = this;
    this.$container.on('touchmove', function (e) {
        // fix ios
        if ($.os.ios) {
            e.preventDefault();
        }
    });
    this.$container.on('swipeUp', function (e) {
        self.$pages.removeClass('up down left right');
        self.$pages.addClass('up');
        self.next();
    });
    this.$container.on('swipeDown', function (e) {
        self.$pages.removeClass('up down left right');

        self.$pages.addClass('down');
        self.prev();
    });
    this.$container.on('swipeLeft', function (e) {
        self.$pages.removeClass('up down left right');

        self.$pages.addClass('left');
        self.prev();
    });
    this.$container.on('swipeRight', function (e) {
        self.$pages.removeClass('up down left right');
        self.$pages.addClass('right');
        self.next();
    });
};