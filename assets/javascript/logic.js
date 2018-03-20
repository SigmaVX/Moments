$(document).ready(function(){


function init(){
    $('#fullpage').fullpage({
       //Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'secondPage'],
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
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
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#ccc', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
}

function makeMoment(i){
    console.log("test");
    $.fn.fullpage.destroy('all');
	
	var newSection = $("<div>").attr("class", "section");
        newSection.attr("id", "section" + i);
        $("#fullpage").prepend(newSection);
	
	var newContainer = $("<div>").attr("class", "container");
        newSection.append(newContainer);
	
	// Row 1
	var newRowOne = $("<div>").attr("class", "row no-gutters text-center");
        newContainer.append(newRowOne);
		
		// Div 1
		var movieDivOne = $("<div>").attr("class", "col-2");
			newRowOne.append(movieDivOne);
			var moviePosterOne = $("<img>").attr({
					class: "img-fluid",
					alt: "movie-poster",
					src: "./assets/images/test-poster.jpg"
					});
					movieDivOne.append(moviePosterOne);
		
		// Div 2 
		var newsCardOne = $("<div>").attr("class", "card col-2 news-card");
			newRowOne.append(newsCardOne);
				var cardImgOne = $("<img>").attr({
					class: "card-img-top img-fluid",
					alt: "news-image",
					src: "./assets/images/test-news.jpg"
					});
					newsCardOne.append(cardImgOne);
				
				var cardBodyOne = $("<div>").attr("class", "card-body text-center");
					newsCardOne.append(cardBodyOne);

					var headlineOne = $("<h5>").html("Hawks Rally Late to Whittle Away at Knicks’ Lead");
						headlineOne.attr("class", "card-title headline-text" );
						cardBodyOne.append(headlineOne);

		// Div 3
		var tvDivOne = $("<div>").attr("class", "col-2");
			newRowOne.append(tvDivOne);
			var tvPosterOne = $("<img>").attr({
					class: "img-fluid",
					alt: "tv-poster",
					src: "./assets/images/test-tv.jpg"
					});
					tvDivOne.append(tvPosterOne);

		// Div 4
		var movieDivTwo = $("<div>").attr("class", "col-2");
			newRowOne.append(movieDivTwo);
			var moviePosterTwo = $("<img>").attr({
					class: "img-fluid",
					alt: "movie-poster",
					src: "./assets/images/test-poster.jpg"
					});
					movieDivTwo.append(moviePosterTwo);

		// Div 5
		var musicCardOne = $("<div>").attr("class", "card col-2 music-card");
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
						musicCardOne.append(musicHeadlineOne);


		// Div 6
		var tvDivTwo = $("<div>").attr("class", "col-2");
			newRowOne.append(tvDivTwo);
			var tvPosterTwo = $("<img>").attr({
					class: "img-fluid",
					alt: "tv-poster",
					src: "./assets/images/test-tv.jpg"
					});
					tvDivTwo.append(tvPosterTwo);
	
	// Row 2
	var newRowTwo = $("<div>").attr("class", "row no-gutters text-center");
	newContainer.append(newRowTwo);
		
		// Div 1
		var musicCardTwo = $("<div>").attr("class", "card col-2 music-card");
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
						musicCardTwo.append(musicHeadlineTwo);

		// Div 2
		var tvDivThree = $("<div>").attr("class", "col-2");
			newRowTwo.append(tvDivThree);
			var tvPosterThree = $("<img>").attr({
				class: "img-fluid",
				alt: "tv-poster",
				src: "./assets/images/test-tv.jpg"
				});
				tvDivThree.append(tvPosterThree);

		// Div 3
		var newsCardTwo = $("<div>").attr("class", "card col-2 news-card");
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
		var musicCardThree = $("<div>").attr("class", "card col-2 music-card");
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
						musicCardThree.append(musicHeadlineThree);
			
		// Div 5
		var movieDivThree = $("<div>").attr("class", "col-2");
			newRowTwo.append(movieDivThree);
			var moviePosterThree = $("<img>").attr({
					class: "img-fluid",
					alt: "movie-poster",
					src: "./assets/images/test-poster.jpg"
					});
					movieDivThree.append(moviePosterThree);

		
		// Div 6
		var newsCardThree = $("<div>").attr("class", "card col-2 news-card");
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
			
	init();

}

            

	// Runs the JQ to Display Images and Start Annimation 
	$("#start").on("click", function(event){
		event.preventDefault();
		console.log("click OK");
		makeMoment();
		$("#start-section").hide();
	});





//Keep This Closing Bracket For jQuery Load Function 
});