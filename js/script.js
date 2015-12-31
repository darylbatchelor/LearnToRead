document.addEventListener('DOMContentLoaded',function(){
			console.log("DOM is loaded");


		});

    var santa = document.querySelector('a-image');
    document.querySelector('a-image').addEventListener('click', function() {

      this.setAttribute('visible', 'false');


    });

    var santa = document.querySelector('a-image');
    document.querySelector('a-image').addEventListener('click', function() {
    console.log("santa clicked");
      this.setAttribute('visible', 'false');


    });


      /*  var sky = document.querySelector('#pano');

        var disland = document.querySelector('#disland');
        var downtown = document.querySelector('#downtown');
        var washley = document.querySelector('#washley');

        document.querySelector('#downtown').addEventListener('click', function() {
          sky.setAttribute('src', 'vr-downtown-rect.jpg');
          this.setAttribute('visible', 'false');

          washley.setAttribute('visible', 'true');
          washley.setAttribute('position', '180 -20 -200');
          washley.setAttribute('rotation', '0 -40 0');

          disland.setAttribute('visible', 'true');
          disland.setAttribute('position', '-20 -20 200');
          disland.setAttribute('rotation', '0 180 0');
        });

        document.querySelector('#washley').addEventListener('click', function() {
          sky.setAttribute('src', 'vr-washley-rect.jpg');
          this.setAttribute('visible', 'false');

          downtown.setAttribute('visible', 'true');
          downtown.setAttribute('position', '-280 -20 40');
          downtown.setAttribute('rotation', '0 100 0');

          disland.setAttribute('visible', 'true');
          disland.setAttribute('position', '-20 -20 200');
          disland.setAttribute('rotation', '0 180 0');
        });

        document.querySelector('#disland').addEventListener('click', function() {
          sky.setAttribute('src', 'vr-disland-rect.jpg');
          this.setAttribute('visible', 'false');

          washley.setAttribute('visible', 'true');
          washley.setAttribute('position', '180 -20 -200');
          washley.setAttribute('rotation', '0 -40 0');

          downtown.setAttribute('visible', 'true');
          downtown.setAttribute('position', '-40 -20 -200');
          downtown.setAttribute('rotation', '0 10 0');
        });*/
