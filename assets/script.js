/**
 * @name      jQuery Countdown
 * @author    mikong
 * @version   0.1
 * @license   MIT License
 *
 * Acknowledgement:
 *   Started from Martin Angelov's jQuery-Countdown code,
 *   but greatly modified.
 *
 * Example:
 *
 *   $('.expiry').countdown({ until: myDate });
 *
 * Options:
 *
 * All options except `until` are optional.
 *
 *   - until: (Date) The date to countdown to. Required.
 *   - selectors: (Dictionary object) Selectors to query.
 *   - update: (Function) Custom function to update text.
 *
 *   until: (Date)
 *   selectors: {
 *     seconds: '.seconds',
 *     minutes: '.minutes',
 *     hours: '.hours',
 *     days: '.days'
 *   }
 *   update: function()
 */
(function(a) {
    function e(a) {
        var e = Math.floor(a / d);
        a -= e * d;
        var f = Math.floor(a / c);
        a -= f * c;
        var g = Math.floor(a / b);
        return a -= g * b, {
            days: e,
            hours: f,
            minutes: g,
            seconds: a
        };
    }
    function f(a) {
        var b = a + "";
        while (b.length < 2) b = "0" + b;
        return b;
    }
    var b = 60, c = 60 * b, d = 24 * c;
    a.fn.countdown = function(b) {
        function j(a, b) {
            function d(d) {
                (!a || a[d] != b[d]) && c.update(d, f(b[d]));
            }
            d("days"), d("hours"), d("minutes"), d("seconds");
        }
        function k(a, b) {
            d.find(g[a]).text(b);
        }
        var c = a.extend({}, {
            until: new Date(),
            selectors: {
                seconds: ".seconds",
                minutes: ".minutes",
                hours: ".hours",
                days: ".days"
            },
            update: k
        }, b), d = a(this), g = c.selectors, h, i;
        return d.data("countdown_options", c), function l() {
            h = Math.floor((c.until - new Date()) / 1e3), h < 0 && (h = 0);
            var a = e(h);
            j(i, a), setTimeout(l, 1e3), i = a;
        }(), this;
    };
})(jQuery);

$('[role="countdown"]').countdown({
  until: new Date(2016, 0, 30),
  update: function (type, num) {
    $('[role="' + type + '"]').text(num)
  }
})
