/// @author: Peter McArthur
/// @date: 01-04-2015
/// @description: Scans a page for iframes and makes them responsive, in order for this script to work properly iframes MUST have a defined width and height.

 $(document).ready(function () {       
  $(function () {
   // var iframeNumber = $("iframe").length;
    $( "iframe").each(function( index ) {
      var iframeHeight = ($(this).attr( "height"));
      var iframeWidth = ($(this).attr( "width"))
      if (isNaN(iframeHeight) || isNaN(iframeWidth)) {
      } else {
        var responsiveHeight = Math.ceil(( iframeHeight / iframeWidth ) * 100); //find the iframe aspect ratio as a %
        $( this ).wrap( "<div class='iframeWrapping' style=\"padding-bottom: " + responsiveHeight + "%;\"></div>" );
      }
    })
  })
});