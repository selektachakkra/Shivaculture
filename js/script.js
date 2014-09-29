$(document).ready(function() {
      
	  	$( "header h2" ).click(function() 
		{
		 document.getElementById("shiva").scrollIntoView();
		});
		
		
		   $(window).resize(function() {
			  if ($(window).width() >= 1025) {
				 $('.introduction').insertBefore('.secondaryNavigation');
			  }
			  else 
			  {
				$('.introduction').insertBefore('.navigation');
			  }
		   });
		   
		   if ($(window).width() >= 1025) {
				 $('.introduction').insertBefore('.secondaryNavigation');
			  }
			  else 
			  {
				$('.introduction').insertBefore('.navigation');
			  }
			  

			$(".soundCloud").hide();
			
			$(".insideLayer").hover(function(){
				
				$(".insideLayer").animate({"width": "+=600px"}, "slow");
				$(".soundCloud").delay(200).fadeIn('slow');
				}
				,function(){
				$(".insideLayer").delay(700).css("width","20px");
				$(".soundCloud").hide();
			  });
			  
			 				
			$('.social a').click(function() { //mouse in
				$(this).animate({ paddingTop: '5px' }, 400);
			}, function() { //mouse out
				$(this).animate({ paddingTop: 0 }, 400);
			});
			
			//hover on service 
			/*$('.service').on( 'mouseenter', function( event ) 
			{	
				$(this).addClass('hoverClass');
				$(this).siblings('.service').addClass('blur');
			});
			
			$('.service').on( 'mouseleave', function( event ) {
			
				$(this).removeClass('hoverClass');
				$(this).siblings('.service').removeClass('blur');
			});*/
			
			//onclick service
			$( ".service" ).not(this).click(function() {
				$(this).fadeIn(1000).css('height','500px');
				$(this).fadeIn(1000).css('width','98%');
			});
			
			//Service thingy
			/* $("#s1").click(function() {
			$(".s1").fadeIn();
			}); */
			
			$(".servicePicture").click(function(){
				var id = $(this).attr('id');
				id='.'+id;
				$(id).fadeIn();
				$(id).siblings().hide();
				
				if($(window).width() <= 766)
				{
				$('body').scrollTop( 2060 );
				}
				
			});
			
			//LIGHTBOX
			jQuery(function($) {
				$(".lightBox").swipebox();
			});
			//iframe
			function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
			
			
			
	   
});