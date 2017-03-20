$('#app').html(`

<div class="cssload-container">
	<div class="cssload-shaft1"></div>
	<div class="cssload-shaft2"></div>
	<div class="cssload-shaft3"></div>
	<div class="cssload-shaft4"></div>
	<div class="cssload-shaft5"></div>
	<div class="cssload-shaft6"></div>
	<div class="cssload-shaft7"></div>
	<div class="cssload-shaft8"></div>
	<div class="cssload-shaft9"></div>
	<div class="cssload-shaft10"></div>
</div>

	`);


setTimeout(function(){
	x();
},3000);



function x(){
$.ajax({
	url: "https://www.omdbapi.com/?t=Detective Conan"


}).done(function(res){
	console.log(res);
	let html = `
	
	<div>
	<center><img src="img/bannerb.jpg" style="width:1348px;height:330px;"></center>
	</div>


    <h1><center><img src="img/2b.png" style="width:45px;height:75px;">${res.Title}<img src="img/2b.png" style="width:45px;height:75px;"></center></h>


    <h9><center>Manga cover</center></h9>
    <div class="carousel">
    <a class="carousel-item" href="#one!"><img src="manga volume/volume_1.jpg"></a>
    <a class="carousel-item" href="#two!"><img src="manga volume/volume_2.jpg"></a>
    <a class="carousel-item" href="#three!"><img src="manga volume/volume_3.jpg"></a>
    <a class="carousel-item" href="#four!"><img src="manga volume/volume_4.jpg"></a>
    <a class="carousel-item" href="#five!"><img src="manga volume/volume_5.jpg"></a>
    <a class="carousel-item" href="#six!"><img src="manga volume/volume_6.jpg"></a>
    <a class="carousel-item" href="#seven!"><img src="manga volume/volume_7.jpg"></a>
    <a class="carousel-item" href="#eight!"><img src="manga volume/volume_8.jpg"></a>
    <a class="carousel-item" href="#nine!"><img src="manga volume/volume_9.jpg"></a>
    <a class="carousel-item" href="#ten!"><img src="manga volume/volume_10.jpg"></a>
    <a class="carousel-item" href="#eleven!"><img src="manga volume/volume_11.jpg"></a>
    <a class="carousel-item" href="#twelve!"><img src="manga volume/volume_12.jpg"></a>
    <a class="carousel-item" href="#thirteen!"><img src="manga volume/volume_13.jpg"></a>
    <a class="carousel-item" href="#fourteen!"><img src="manga volume/volume_14.jpg"></a>
    <a class="carousel-item" href="#fifteen!"><img src="manga volume/volume_15.jpg"></a>
    <a class="carousel-item" href="#sixteen!"><img src="manga volume/volume_16.jpg"></a>
    <a class="carousel-item" href="#seventeen!"><img src="manga volume/volume_17.jpg"></a>
    <a class="carousel-item" href="#eighteen!"><img src="manga volume/volume_18.jpg"></a>
    <a class="carousel-item" href="#ninetenn!"><img src="manga volume/volume_19.jpg"></a>
    <a class="carousel-item" href="#twenty!"><img src="manga volume/volume_20.jpg"></a>
    <a class="carousel-item" href="#twenty-one!"><img src="manga volume/volume_21.jpg"></a>
    <a class="carousel-item" href="#twenty-two!"><img src="manga volume/volume_22.jpg"></a>
    <a class="carousel-item" href="#twenty-three!"><img src="manga volume/volume_23.jpg"></a>
    <a class="carousel-item" href="#twenty-four!"><img src="manga volume/volume_24.jpg"></a>
    <a class="carousel-item" href="#twenty-five!"><img src="manga volume/volume_25.jpg"></a>
    <a class="carousel-item" href="#twenty-six!"><img src="manga volume/volume_26.jpg"></a>
    <a class="carousel-item" href="#twenty-seven!"><img src="manga volume/volume_27.jpg"></a>
    <a class="carousel-item" href="#twenty-eight!"><img src="manga volume/volume_28.jpg"></a>
    <a class="carousel-item" href="#twenty-nine!"><img src="manga volume/volume_29.jpg"></a>
    <a class="carousel-item" href="#thirty!"><img src="manga volume/volume_30.jpg"></a>
    <a class="carousel-item" href="#thirty-one!"><img src="manga volume/volume_31.jpg"></a>
    <a class="carousel-item" href="#thirty-two!"><img src="manga volume/volume_32.jpg"></a>
    <a class="carousel-item" href="#thirty-three!"><img src="manga volume/volume_33.jpg"></a>
    <a class="carousel-item" href="#thirty-four!"><img src="manga volume/volume_34.jpg"></a>
    <a class="carousel-item" href="#thirty-five!"><img src="manga volume/volume_35.jpg"></a>
    <a class="carousel-item" href="#thirty-six!"><img src="manga volume/volume_36.jpg"></a>
    <a class="carousel-item" href="#thirty-seven!"><img src="manga volume/volume_37.jpg"></a>
    <a class="carousel-item" href="#thirty-eight!"><img src="manga volume/volume_38.jpg"></a>
    <a class="carousel-item" href="#thirty-nine!"><img src="manga volume/volume_39.jpg"></a>
    <a class="carousel-item" href="#forty!"><img src="manga volume/volume_40.jpg"></a>    
    <a class="carousel-item" href="#forty-one!"><img src="manga volume/volume_41.jpg"></a>
    <a class="carousel-item" href="#forty-two!"><img src="manga volume/volume_42.jpg"></a>
    <a class="carousel-item" href="#forty-three!"><img src="manga volume/volume_43.jpg"></a>
    <a class="carousel-item" href="#forty-four!"><img src="manga volume/volume_44.jpg"></a>
    <a class="carousel-item" href="#forty-five!"><img src="manga volume/volume_45.jpg"></a>
    <a class="carousel-item" href="#forty-six!"><img src="manga volume/volume_46.jpg"></a>
    <a class="carousel-item" href="#forty-seven!"><img src="manga volume/volume_47.jpg"></a>
    <a class="carousel-item" href="#forty-eight!"><img src="manga volume/volume_48.jpg"></a>
    <a class="carousel-item" href="#forty-nine!"><img src="manga volume/volume_49.jpg"></a>
    <a class="carousel-item" href="#fifty!"><img src="manga volume/volume_50.jpg"></a>
    <a class="carousel-item" href="#fifty-one!"><img src="manga volume/volume_51.jpg"></a>
    <a class="carousel-item" href="#fifty-two!"><img src="manga volume/volume_52.jpg"></a>
    <a class="carousel-item" href="#fifty-three!"><img src="manga volume/volume_53.jpg"></a>
    <a class="carousel-item" href="#fifty-four!"><img src="manga volume/volume_54.jpg"></a>
    <a class="carousel-item" href="#fifty-five!"><img src="manga volume/volume_55.jpg"></a>
    <a class="carousel-item" href="#fifty-six!"><img src="manga volume/volume_56.jpg"></a>
    <a class="carousel-item" href="#fifty-seven!"><img src="manga volume/volume_57.jpg"></a>
    <a class="carousel-item" href="#fifty-eight!"><img src="manga volume/volume_58.jpg"></a>
    <a class="carousel-item" href="#fifty-nine!"><img src="manga volume/volume_59.jpg"></a>
    <a class="carousel-item" href="#sixty!"><img src="manga volume/volume_60.jpg"></a>
    <a class="carousel-item" href="#sixty-one!"><img src="manga volume/volume_61.jpg"></a>
    <a class="carousel-item" href="#sixty-two!"><img src="manga volume/volume_62.jpg"></a>
    <a class="carousel-item" href="#sixty-three!"><img src="manga volume/volume_63.jpg"></a>
    <a class="carousel-item" href="#sixty-four!"><img src="manga volume/volume_64.jpg"></a>
    <a class="carousel-item" href="#sixty-five!"><img src="manga volume/volume_65.jpg"></a>
    <a class="carousel-item" href="#sixty-six!"><img src="manga volume/volume_66.jpg"></a>
    <a class="carousel-item" href="#sixty-seven!"><img src="manga volume/volume_67.jpg"></a>
    <a class="carousel-item" href="#sixty-eight!"><img src="manga volume/volume_68.jpg"></a>
    <a class="carousel-item" href="#sixty-nine!"><img src="manga volume/volume_69.jpg"></a>
    <a class="carousel-item" href="#seventy!"><img src="manga volume/volume_70.jpg"></a>
    <a class="carousel-item" href="#seventy-one!"><img src="manga volume/volume_71.jpg"></a>
    <a class="carousel-item" href="#seventy-two!"><img src="manga volume/volume_72.jpg"></a>
    <a class="carousel-item" href="#seventy-three!"><img src="manga volume/volume_73.png"></a>
    <a class="carousel-item" href="#seventy-four!"><img src="manga volume/volume_74.jpg"></a>
    <a class="carousel-item" href="#seventy-five!"><img src="manga volume/volume_75.jpg"></a>
    <a class="carousel-item" href="#seventy-six!"><img src="manga volume/volume_76.jpg"></a>
    <a class="carousel-item" href="#seventy-seven!"><img src="manga volume/volume_77.jpg"></a>
    <a class="carousel-item" href="#seventy-eight!"><img src="manga volume/volume_78.jpg"></a>
    <a class="carousel-item" href="#seventy-nine!"><img src="manga volume/volume_79.jpg"></a>
    <a class="carousel-item" href="#eighty!"><img src="manga volume/volume_80.jpg"></a>
    <a class="carousel-item" href="#eighty-one!"><img src="manga volume/volume_81.jpg"></a>
    <a class="carousel-item" href="#eighty-two!"><img src="manga volume/volume_82.jpg"></a>
    <a class="carousel-item" href="#eighty-three!"><img src="manga volume/volume_83.jpg"></a>
    <a class="carousel-item" href="#eighty-four!"><img src="manga volume/volume_84.jpg"></a>
    <a class="carousel-item" href="#eighty-five!"><img src="manga volume/volume_85.jpg"></a>
    <a class="carousel-item" href="#eighty-six!"><img src="manga volume/volume_86.jpg"></a>
    <a class="carousel-item" href="#eighty-seven!"><img src="manga volume/volume_87.jpg"></a>
    <a class="carousel-item" href="#eighty-eight!"><img src="manga volume/volume_88.jpg"></a>
    <a class="carousel-item" href="#eighty-nine!"><img src="manga volume/volume_89.jpg"></a>
    <a class="carousel-item" href="#ninety!"><img src="manga volume/volume_90.jpg"></a>
    <a class="carousel-item" href="#ninety-one!"><img src="manga volume/volume_91.jpg"></a>
    </div>

    <div>
    <h8><center>Detective Conan is a Japanese detective manga series, anime series and movies. 
    You can read it's manga on this link <a href="http://www.mangatown.com/manga/detective_conan">
    "manga/detective_conan"</a>.
    And watch it's anime series and movies on this link <a href="https://ww1.gogoanime.io//search.html?keyword=detective%20conan">
    "gogoanime.io/detective_conan"</a></center></h8>
    </div>



    <div>
    <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">More Information</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/Characters">Characters</a></li>
        <li><a href="/Anime">Anime</a></li>
        <li><a href="/Manga">Manga</a></li>
      </ul>
    </div>
  </nav>
   </div>

  	<div>
	<center><img src="img/downhead.jpg" style="width:1348px;height:48px;"></center>
	</div>
	`;



$('#app').html(html);
$(".button-collapse").sideNav();
$('.carousel.carousel-slider').carousel({fullWidth: true});
$('.carousel').carousel()
$(document).ready(function(){
$('.carousel').carousel();
    });

});
}

