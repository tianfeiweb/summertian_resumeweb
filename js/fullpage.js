$(document).ready(function() {

    /*fullpage js*/
		$('#fullpage').fullpage({

			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
			menu: '#menu',
			css3: true,
      scrollOverflow:true
		});
   

    /*contact card js*/
          $('.contact').click(function (e) 
    {
        $('.card').toggleClass('active');
        $('.banner').toggleClass('active');
        $('.photo').toggleClass('active');
        $('.social-media-banner').toggleClass('active');
        $('.email-form').toggleClass('active');  
        var buttonText = $('button.contact#main-button').text();
        if (buttonText === 'back')
        {
            buttonText = 'click to get in touch';
            $('button.contact#main-button').text(buttonText);
        }
        else
        {
            buttonText = 'back';
            $('button.contact#main-button').text(buttonText);
        }
    });
          
    /*skill js*/


      $('.chart').easyPieChart({
        scaleColor: "#ecf0f1",
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#1abc9c',
        trackColor: "#ecf0f1",
        size: 160,
        animate: 500
      });

     
     $(".chart").hover(function(){
           $(this).parent().find(".skill_int").toggle();
      });
     
    

    
          



  
	





		});