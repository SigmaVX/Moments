var slideCount = 0;


$(document).ready(function(){
	
// 	$('#fullpage').fullpage({
		
// 	});

function init(){
    $('#fullpage').fullpage({
       //Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage', 'thirdPage'],
		navigation: true,
		navigationPosition: 'center',
		showActiveTooltip: false,
		
		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: true,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: true,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,

		//Design
		controlArrows: false,
		verticalCentered: true,
		sectionsColor : ['red', 'blue', 'yellow', 'grey', 'black'],
		paddingTop: '1em',
		paddingBottom: '1em',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

    });
}

function makeMoment(i){

	slideCount++;
	console.log("Slide Count: " + slideCount);

	// Kills current running version so JQ can add content
	// This is not needed if fullpage is not running so it has been disabled for now
    // $.fn.fullpage.destroy('all');
	
	var newSection = $("<div>").attr("class", "section slide");
		newSection.attr("style", "padding-top: 0px;")
        newSection.attr("data-anchor", "slide" + slideCount);
        $("#fullpage").prepend(newSection);
	
	var newContainer = $("<div>").attr("class", "container wrapper");
        newSection.append(newContainer);
	
	// Row 1
	var newRowOne = $("<div>").attr("class", "row no-gutters text-center align-items-end");
        newContainer.append(newRowOne);
		
		// Div 1
		var movieDivOne = $("<div>").attr("class", "col-2 card animated flipInX");
			movieDivOne.attr("style", "animation-delay: 1s");
			newRowOne.append(movieDivOne);
			var moviePosterOne = $("<img>").attr({
					class: "img-fluid",
					alt: "movie-poster",
					src: "./assets/images/test-poster.jpg"
					});
					movieDivOne.append(moviePosterOne);
		
		// Div 2 
		var newsCardOne = $("<div>").attr("class", "card col-2 news-card animated flipInY");
			newsCardOne.attr("style", "animation-delay: 0.2s")		
			newRowOne.append(newsCardOne);
				var newsImgOne = $("<img>").attr({
					class: "card-img-top img-fluid",
					alt: "news-image",
					src: "./assets/images/test-news.jpg"
					});
					newsCardOne.append(newsImgOne);
				
				var newsBodyOne = $("<div>").attr("class", "card-body text-center");
					newsCardOne.append(newsBodyOne);

					var headlineOne = $("<h5>").html("Hawks Rally Late to Whittle Away at Knicks’ Lead");
						headlineOne.attr("class", "card-title headline-text" );
						newsBodyOne.append(headlineOne);

		// Div 3
		var tvDivOne = $("<div>").attr("class", "card col-2 animated flipInX");
			tvDivOne.attr("style", "animation-delay: 0.6s")
			newRowOne.append(tvDivOne);
			var tvPosterOne = $("<img>").attr({
					class: "img-fluid",
					alt: "tv-poster",
					src: "./assets/images/test-tv.jpg"
					});
					tvDivOne.append(tvPosterOne);

		// Div 4
		var movieDivTwo = $("<div>").attr("class", "card col-2 animated flipInY");
			movieDivTwo.attr("style", "animation-delay: 1.2s");
			newRowOne.append(movieDivTwo);
			var moviePosterTwo = $("<img>").attr({
					class: "img-fluid",
					alt: "movie-poster",
					src: "./assets/images/test-poster.jpg"
					});
					movieDivTwo.append(moviePosterTwo);

		// Div 5
		var musicCardOne = $("<div>").attr("class", "card col-2 music-card animated flipInX");
			musicCardOne.attr("style", "animation-delay: 0.4s")
			newRowOne.append(musicCardOne);
				var musicImgOne = $("<img>").attr({
					class: "card-img-top img-fluid",
					alt: "music-image",
					src: "./assets/images/test-music.jpg"
					});
					musicCardOne.append(musicImgOne);
				
				var musicBodyOne = $("<div>").attr("class", "card-body text-center");
					musicCardOne.append(musicBodyOne);

					var musicHeadlineOne = $("<h5>").html("Hawks Rally Late to Whittle Away at Knicks’ Lead");
						musicHeadlineOne.attr("class", "card-title headline-text" );
						musicBodyOne.append(musicHeadlineOne);


		// Div 6
		var tvDivTwo = $("<div>").attr("class", "card col-2 animated flipInY");
			tvDivTwo.attr("style", "animation-delay: 0.8s")
			newRowOne.append(tvDivTwo);
			var tvPosterTwo = $("<img>").attr({
					class: "img-fluid",
					alt: "tv-poster",
					src: "./assets/images/test-tv.jpg"
					});
					tvDivTwo.append(tvPosterTwo);
	
	// Row 2
	var newRowTwo = $("<div>").attr("class", "row no-gutters text-center align-items-start");
	newContainer.append(newRowTwo);
		
		// Div 1
		var musicCardTwo = $("<div>").attr("class", "card col-2 music-card animated flipInY");
			musicCardTwo.attr("style", "animation-delay: 0.1s");
			newRowTwo.append(musicCardTwo);
				var musicImgTwo = $("<img>").attr({
					class: "card-img-top img-fluid",
					alt: "music-image",
					src: "./assets/images/test-music.jpg"
					});
					musicCardTwo.append(musicImgTwo);
				
				var musicBodyTwo = $("<div>").attr("class", "card-body text-center");
					musicCardTwo.append(musicBodyTwo);

					var musicHeadlineTwo = $("<h5>").html("Hawks Rally Late to Whittle Away at Knicks’ Lead");
						musicHeadlineTwo.attr("class", "card-title headline-text" );
						musicBodyTwo.append(musicHeadlineTwo);

		// Div 2
		var tvDivThree = $("<div>").attr("class", "card col-2 animated flipInX");
			tvDivThree.attr("style", "animation-delay: 0.9s");
			newRowTwo.append(tvDivThree);
			var tvPosterThree = $("<img>").attr({
				class: "img-fluid",
				alt: "tv-poster",
				src: "./assets/images/test-tv.jpg"
				});
				tvDivThree.append(tvPosterThree);

		// Div 3
		var newsCardTwo = $("<div>").attr("class", "card col-2 news-card animated flipInY");
			newsCardTwo.attr("style", "animation-delay: 0.3s")
			newRowTwo.append(newsCardTwo);
				var cardImgTwo = $("<img>").attr({
					class: "card-img-top img-fluid",
					alt: "news-image",
					src: "./assets/images/test-news.jpg"
					});
					newsCardTwo.append(cardImgTwo);
				
				var newsBodyTwo = $("<div>").attr("class", "card-body text-center");
					newsCardTwo.append(newsBodyTwo);

					var headlineTwo = $("<h5>").html("Hawks Rally Late to Whittle Away at Knicks’ Lead");
						headlineTwo.attr("class", "card-title headline-text" );
						newsBodyTwo.append(headlineTwo);

		// Div 4
		var musicCardThree = $("<div>").attr("class", "card col-2 music-card animated flipInX");
			musicCardThree.attr("style", "animation-delay: 0.7s");
			newRowTwo.append(musicCardThree);
				var musicImgThree = $("<img>").attr({
					class: "card-img-top img-fluid",
					alt: "music-image",
					src: "./assets/images/test-music.jpg"
					});
					musicCardThree.append(musicImgThree);
				
				var musicBodyThree = $("<div>").attr("class", "card-body text-center");
					musicCardThree.append(musicBodyThree);

					var musicHeadlineThree = $("<h5>").html("Hawks Rally Late to Whittle Away at Knicks’ Lead");
						musicHeadlineThree.attr("class", "card-title headline-text" );
						musicBodyThree.append(musicHeadlineThree);
			
		// Div 5
		var movieDivThree = $("<div>").attr("class", "card col-2 animated flipInY");
			movieDivThree.attr("style", "animation-delay: 0.5s")
			newRowTwo.append(movieDivThree);
			var moviePosterThree = $("<img>").attr({
					class: "img-fluid",
					alt: "movie-poster",
					src: "./assets/images/test-poster.jpg"
					});
					movieDivThree.append(moviePosterThree);

		
		// Div 6
		var newsCardThree = $("<div>").attr("class", "card col-2 news-card animated flipInX");
			newsCardThree.attr("style", "animation-delay: 1.1s");	
			newRowTwo.append(newsCardThree);
				var cardImgThree = $("<img>").attr({
					class: "card-img-top img-fluid",
					alt: "news-image",
					src: "./assets/images/test-news.jpg"
					});
					newsCardThree.append(cardImgThree);
				
				var newsBodyThree = $("<div>").attr("class", "card-body text-center"); 
					newsCardThree.append(newsBodyThree);

					var headlineThree = $("<h5>").html("Hawks Rally Late to Whittle Away at Knicks’ Lead");
						headlineThree.attr("class", "card-title headline-text" );
						newsBodyThree.append(headlineThree);
				
		// Date Overlay
		var dateOverlay = $("<h2>").html("10/22/1955");
			dateOverlay.attr("class", "col-12 date-overlay");
			newSection.append(dateOverlay);

}

	// Runs the JQ to Display Images and Start Annimation 
	$("#start").on("click", function(event){
		slideCount = 0;
		event.preventDefault();
		console.log("click OK");
		makeMoment();
		makeMoment();
		makeMoment();
		$("#start-section").hide();
		$("#videoHolder").hide();
		// $.fn.fullpage.reBuild();
		init();
	});





//Keep This Closing Bracket For jQuery Load Function 
});