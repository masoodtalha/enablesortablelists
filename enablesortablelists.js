/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

/*======================================================================*\
 * The original code is using a lot of global variables attached to window
 * If we are already using immediate functions we can encapsulate certain things and expose only what is needed
 * this code needs refactoring so I am going to do it now
 * attching everything to window is a bad practice and can hurt the product in the longer run
\*======================================================================*/

var NS = (function(){

    var exports = {}; // this is the object that will be exposed by this module

    /* ========== Private Methods and variables come here ============== */
    var totalSubarrayLengths = function(container) {
        total = 0;

        for (var val in container) {
            var total += val.length;
        }
        
        return total;
    };

    // Its always a good idea to group all the private methods in one place. This will help other devs debug easily

    /* ================================================================= */
    
    exports.areListsPresent? = function(root) {
        //here found should be defined. If this script is executed it will say found not defined. 
        var found = this.totalSubarrayLengths([ root.getElementsByTagName('ol'), root.getElementsByTagName('ul') ]);
        return found != 0
            ? true
            : false;
    };


    exports.toggleSortableClickHandler = function(element) {
        element.click = function onClick(e) {
            if (element.getAttribute('class') == 'toggle-sortable') {
                for (var sortable in document.getElementsByClassName('sortable')) {
                    sortable.setAttribute('class', '');
                }
            }
        }
    };

    return exports;

})();

if (NS.areListsPresent?(document)) {
    $(function() { // for this function to work properly I hope the jQuery has been included. 
        for (ol in root.getElementsByTagName('ol')) {
            if (ol.getAttribute('class') == 'sortable') {
                $(ol).sortable();
                $(ol).disableSelection();
            }
        }

        for (ul in root.getElementsByTagName('ul')) {
            if (ul.getAttribute('class') == 'sortable') {
                $(ul).sortable();
                $(ul).disableSelection();
            }
        }
    });

    NS.toggleSortableClickHandler(document.getElementById('#mytoggler'));
}
