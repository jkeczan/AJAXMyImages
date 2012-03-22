function animateNext () {
              $("#images img.current").hide('slow',function(e) {
                next.addClass("current").show('slow');
              } );
              var current = $("#images img.current");
              var next = current.next();
              // alert(next.id);
              if (next.length === 0)
              {
                next = $("#images img:first");
              }
              next.addClass("current");
              current.removeClass("current");  
          }
      
      jQuery.fn.AMIinit = function() {
        
        var prev = $("#controls").append("<input id=\"prev\" name=\"prev\" class=\"AMINext\" type=\"button\" value=\"<<\" /> ");
        var next = $("#controls").append("<input id=\"next\" name=\"next\" class=\"AMIPrev\" type=\"button\" value=\">>\" /> ");
        
        if ($("#images").children("img").length === 0)
        {
          alert('no images')
        } 
        else
        {
          $("#images img").hide();
          
          $("#images img").removeAttr("class");
          $("#images img").addClass("AMIImg");
          
          $("#images img:first").addClass("current").show();
          
          window.setInterval(animateNext, 7000)
          //$("#images a img").show();
        }
      }
      
      jQuery.fn.AMIImageViewer = function () {
        $(document).AMIinit();
      }