$(document).ready(function(){
    if( $('#defaultCountdown').length > 0 ){

        $('#defaultCountdown').countdown({
         until: new Date(2012, 3 - 1, 18, 08, 00, 00), 
         format: 'YDHMS',
         layout: '<div id="t7_timer">'+
                     '<div id="t7_vals">'+
                         '<div id="t7_d" class="t7_numbs">{dnn}</div>'+
                         '<div id="t7_h" class="t7_numbs">{hnn}</div>'+
                         '<div id="t7_m" class="t7_numbs">{mnn}</div>'+
                         '<div id="t7_s" class="t7_numbs">{snn}</div>'+
                     '</div>'+
                     '<div id="t7_labels">'+
                         '<div id="t7_dl" class="t7_labs">gün</div>'+
                         '<div id="t7_hl" class="t7_labs">saat</div>'+
                         '<div id="t7_ml" class="t7_labs">dakika</div>'+
                         '<div id="t7_sl" class="t7_labs">saniye</div>'+
                     '</div>'+
                     '<div id="t7_timer_over"></div>'+
                 '</div>'
        });	
    };
    
    if($('#photos').length > 0) {
        $('#photos').css("display","block");
        $('#photos').galleryView({
            panel_width: 580,
            panel_height: 310,
            //panel_height: 320,
            frame_width: 90,
            frame_height: 48
        });
    };
    
    // $('#myModal').on('hidden', function () {
    //         
    //     })
});