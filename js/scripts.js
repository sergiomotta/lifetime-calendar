/*!
 * lifetime-calendar
 * 
 * 
 * @author 
 * @version 1.0.0
 * Copyright 2017. ISC licensed.
 */
/*!
 * lifetime-calendar
 * 
 * 
 * @author 
 * @version 1.0.0
 * Copyright 2017. ISC licensed.
 */

$(document).ready(function(){
   $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    $('#see').click(function(e){
        e.preventDefault();
        $('#lifetime').fadeIn(500);
    }); 
});
