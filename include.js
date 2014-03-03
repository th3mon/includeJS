(function (g, d, $){
    'use strict';
    var
        templateDir = '../tmpl/',

        include = function($o) {
            var
                name = $o.attr('id'),
                url = templateDir + name + '.html',
                $html;

            $.ajax({
                url: url
            }).done(function(html) {
                var $tmpls;
                $html = $(html);
                $tmpls = $html.find('.tmpl');

                if ($tmpls.length) {
                    $tmpls.each(function() {
                        include($(this));
                    });
                }

                $o.replaceWith($html);
            });
        };
        
    $('.tmpl').each(function() {
        include($(this));
    });
}(window, document, jQuery));
    