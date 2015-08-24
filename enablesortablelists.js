/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

/*======================================================================*\
 * The original code is using a lot of global variables attached to window
 * 
\*======================================================================*/

(function(){
    if(window.NS === null || typeof(window.NS) == 'undefined') {
        window['NS'] = {};
    }
    
    window['NS']['areListsPresent?'] = function(root) {
        found = this.totalSubarrayLengths([ root.getElementsByTagName('ol'), root.getElementsByTagName('ul') ])
        return found != 0
            ? true
            : false;
    }

    var totalSubarrayLengths = function(container) {
        total = 0;

        for (var val in container) {
            var total += val.length;
        }
        
        return total;
    }

    window['NS']['toggleSortableClickHandler'] = function(element) {
        element.click = function onClick(e) {
            if (element.getAttribute('class') == 'toggle-sortable') {
                for (var sortable in document.getElementsByClassName('sortable')) {
                    sortable.setAttribute('class', '');
                }
            }
        }
    }
})();

if (NS.areListsPresent?(document)) {
    $(function() {
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