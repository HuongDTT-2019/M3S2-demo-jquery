$(document).ready(function () {
    $( function() {
        $( "#draggable" ).draggable();
    } );

    $( function() {
        $( "#draggable1" ).draggable();
        $( "#droppable" ).droppable({
            drop: function( event, ui ) {
                $( this )
                    .addClass( "ui-state-highlight" )
                    .find( "p" )
                    .html( "Dropped!" );
            }
        });
    } );

    $( function() {
        $( "#resizable" ).resizable();
    } );

    $( function() {
        $( "#selectable" ).selectable();
    } );
});
