/*!
 * Koluhms
 * An automated column [kol-uh m] solution with support for height balancing, responsive styles and more. Configurable right in your HTML and CSS.
 * Version: 1.1 (October 6th, 2015)
 * requires jQuery
 */

var koluhms;

$(function () {

    var Koluhms = function () {

        this.makeColumns = function() {

            $('[data-columns]').each(function () {

                var columns = $(this).data('columns');
                if (columns) {
                    columns = columns.toString().split(',');
                }
                var columnSelection = 0;
                var breaks = $(this).data('breaks');
                if (breaks) {
                    breaks = breaks.toString().split(',');
                    // Find out which breakpoint we are making this pass
                    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    for(var i = 0; i < breaks.length; i++) {
                        if (width >= parseInt(breaks[i], 10)) {
                            columnSelection = parseInt(columns[i], 10);
                        }
                    }
                } else {
                    columnSelection = parseInt(columns[0]);
                }

                columns = columnSelection;

                var selector = $(this).data('selector');
                var columnElement = $(this).data('column-element');
                var balance = $(this).data('balance');
                var columnItems = $(this).children(selector);
                var container = $(this).parent();
                var identifier = $(this).data('identifier');
                // Check if the columns were already created
                if (container.find('.' + identifier).length == columns) {
                    return;
                }

                // Remove older ones that have been created
                container.find('.' + identifier).remove();

                // If there's 0 columns set at any point, revert everything
                if (columns === 0) {
                    $(this).show();
                    return;
                }

                for (var i = 0; i < columns; i++) {
                    var identifierClass = " " + identifier + '-' + (i + 1);
                    if (i === 0) {
                        identifierClass += " " + identifier + "-first";
                    } else if (i === columns - 1) {
                        identifierClass += " " + identifier + "-last";
                    }
                    container.append('<' + columnElement + ' class="' + identifier + identifierClass + '"></' + columnElement + '>');
                }

                var columnCount = 0;
                columnItems.each(function () {
                    var newHTML = $($(this)[0].outerHTML);
                    container.find('.' + identifier + ':eq(' + columnCount + ')').append(newHTML);
                    columnCount++;
                    if (columnCount >= columns) {
                        columnCount = 0;
                    }
                });

                var getAndSortHeights = function () {
                    var columnHeights = [];
                    for (var i = 0; i < columns; i++) {
                        columnHeights[i] = {
                            eq: i,
                            height: container.find('.' + identifier + ':eq(' + i + ')').outerHeight()
                        };
                    }

                    // Sort the columns from smallest to biggest
                    columnHeights.sort(function (a, b) {
                        return a.height - b.height;
                    });

                    return columnHeights;
                };

                var sortColumns = function () {
                    var newSmallestColumn = container.find('.' + identifier + ':eq(' + columnHeights[0].eq + ')');
                    $(this).detach().appendTo(newSmallestColumn);
                    if (newSmallestColumn.outerHeight() >= newBiggestColumn.outerHeight()) {
                        // Move it back if it's too big
                        newSmallestColumn.children(selector + ":last").detach().appendTo(newBiggestColumn);
                    } else {
                        // Successful move, recalculate the heights and start over
                        columnHeights = getAndSortHeights();
                        tries = columnHeights.length;
                        return false;
                    }
                };

                // Are we trying to balance the height of the columns?
                if (balance) {

                    var columnHeights = getAndSortHeights();

                    // Attempt to balance
                    for (var tries = columnHeights.length - 1; tries > 0; tries--) {
                        var newBiggestColumn = container.find('.' + identifier + ':eq(' + (columnHeights[columns - tries].eq) + ')');
                        newBiggestColumn.children(selector).each(sortColumns);
                    }

                }

                $(this).hide();
            });
        };

    };

    // Init
    koluhms = new Koluhms();
    $(window).on('resize', koluhms.makeColumns);
    koluhms.makeColumns();

});
