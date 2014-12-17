/*$(document).ready(function() {
    $('#collegeList').dataTable( {
        "scrollY":        "400px",
        "scrollCollapse": true,
        "paging":         false
    } );
} );
*/

/*$(document).ready(function() {
    $('#collegeList').DataTable( {
    	"scrollY":        "400px",
    	"paging":         false,
        initComplete: function () {
            var api = this.api();

            api.columns().indexes().flatten().each( function ( i ) {
                var column = api.column( i );
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );
 
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    } );
} );*/

$(document).ready(function() {
    // Setup - add a text input to each footer cell
    $('#collegeList tfoot th:not(:eq(0))').each( function () {
        var title = $('#collegeList thead th').eq( $(this).index() ).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );
 
    // DataTable
    var table = $('#collegeList').DataTable({
		"scrollY": "400px",
    	"paging": false
    });
 
    // Apply the search
    table.columns().eq( 0 ).each( function ( colIdx ) {
        $( 'input', table.column( colIdx ).footer() ).on( 'keyup change', function () {
            table
                .column( colIdx )
                .search( this.value )
                .draw();
        } );
    } );
} );