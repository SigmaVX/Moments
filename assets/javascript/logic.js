$(document).ready(function(){

	// Keep Track Of Sections For Fullwidth JS
	var slideCount = 0;

	// Arrays
	var dates = ["10/22/1955"];
	var movieArtOne = ["./assets/images/test-poster.jpg"];
	var movieArtTwo = ["./assets/images/test-poster.jpg"];
	var movieArtThree = ["./assets/images/test-poster.jpg"];
	var tvArtOne = ["./assets/images/test-tv.jpg"];
	var tvArtTwo = ["./assets/images/test-tv.jpg"];
	var tvArtThree = ["./assets/images/test-tv.jpg"];
	var newsTextOne = ["Some Text For A News Headline"];
	var newsTextTwo = ["Some Text For A News Headline"];
	var newsTextThree = ["Some Text For A News Headline"];
	var newsArtOne = ["./assets/images/test-news.jpg"];
	var newsArtTwo = ["./assets/images/test-news.jpg"];
	var newsArtThree = ["./assets/images/test-news.jpg"];
	var musicArtOne=["./assets/images/test-music.jpg"];
	var musicArtTwo = ["./assets/images/test-music.jpg"];
	var musicArtThree = ["./assets/images/test-music.jpg"];
	var musicTextOne = ["Some Text For A Music Headline"];
	var musicTextTwo = ["Some Text For A Music Headline"];
	var musicTextThree = ["Some Text For A Music Headline"]; 


	// Initializes Fullwidth JS
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

	// Generates Moments Pages Based On Array Data Loop
	function makeMoments(){

		for(var i=0; i<dates.length; i++){

			slideCount++;
			console.log("Slide Count: " + slideCount);
			
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
							src: movieArtOne[i]
							});
							movieDivOne.append(moviePosterOne);
							console.log("movie art one test: " + movieArtOne[i]);
				
				// Div 2 
				var newsCardOne = $("<div>").attr("class", "card col-2 news-card animated flipInY");
					newsCardOne.attr("style", "animation-delay: 0.2s")		
					newRowOne.append(newsCardOne);
						var newsImgOne = $("<img>").attr({
							class: "card-img-top img-fluid",
							alt: "news-image",
							src: newsArtOne[i]
							});
							newsCardOne.append(newsImgOne);
						
						var newsBodyOne = $("<div>").attr("class", "card-body text-center");
							newsCardOne.append(newsBodyOne);

							var headlineOne = $("<h5>").html(newsTextOne[i]);
								headlineOne.attr("class", "card-title headline-text" );
								newsBodyOne.append(headlineOne);

				// Div 3
				var tvDivOne = $("<div>").attr("class", "card col-2 animated flipInX");
					tvDivOne.attr("style", "animation-delay: 0.6s")
					newRowOne.append(tvDivOne);
					var tvPosterOne = $("<img>").attr({
							class: "img-fluid",
							alt: "tv-poster",
							src: tvArtOne[i]
							});
							tvDivOne.append(tvPosterOne);

				// Div 4
				var movieDivTwo = $("<div>").attr("class", "card col-2 animated flipInY");
					movieDivTwo.attr("style", "animation-delay: 1.2s");
					newRowOne.append(movieDivTwo);
					var moviePosterTwo = $("<img>").attr({
							class: "img-fluid",
							alt: "movie-poster",
							src: movieArtTwo[i]
							});
							movieDivTwo.append(moviePosterTwo);

				// Div 5
				var musicCardOne = $("<div>").attr("class", "card col-2 music-card animated flipInX");
					musicCardOne.attr("style", "animation-delay: 0.4s")
					newRowOne.append(musicCardOne);
						var musicImgOne = $("<img>").attr({
							class: "card-img-top img-fluid",
							alt: "music-image",
							src: musicArtOne[i]
							});
							musicCardOne.append(musicImgOne);
						
						var musicBodyOne = $("<div>").attr("class", "card-body text-center");
							musicCardOne.append(musicBodyOne);

							var musicHeadlineOne = $("<h5>").html(musicTextOne[i]);
								musicHeadlineOne.attr("class", "card-title headline-text" );
								musicBodyOne.append(musicHeadlineOne);


				// Div 6
				var tvDivTwo = $("<div>").attr("class", "card col-2 animated flipInY");
					tvDivTwo.attr("style", "animation-delay: 0.8s")
					newRowOne.append(tvDivTwo);
					var tvPosterTwo = $("<img>").attr({
							class: "img-fluid",
							alt: "tv-poster",
							src: tvArtTwo[i]
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
							src: musicArtTwo[i]
							});
							musicCardTwo.append(musicImgTwo);
						
						var musicBodyTwo = $("<div>").attr("class", "card-body text-center");
							musicCardTwo.append(musicBodyTwo);

							var musicHeadlineTwo = $("<h5>").html(musicTextTwo[i]);
								musicHeadlineTwo.attr("class", "card-title headline-text" );
								musicBodyTwo.append(musicHeadlineTwo);

				// Div 2
				var tvDivThree = $("<div>").attr("class", "card col-2 animated flipInX");
					tvDivThree.attr("style", "animation-delay: 0.9s");
					newRowTwo.append(tvDivThree);
					var tvPosterThree = $("<img>").attr({
						class: "img-fluid",
						alt: "tv-poster",
						src: tvArtThree[i]
						});
						tvDivThree.append(tvPosterThree);

				// Div 3
				var newsCardTwo = $("<div>").attr("class", "card col-2 news-card animated flipInY");
					newsCardTwo.attr("style", "animation-delay: 0.3s")
					newRowTwo.append(newsCardTwo);
						var cardImgTwo = $("<img>").attr({
							class: "card-img-top img-fluid",
							alt: "news-image",
							src: newsArtTwo[i]
							});
							newsCardTwo.append(cardImgTwo);
						
						var newsBodyTwo = $("<div>").attr("class", "card-body text-center");
							newsCardTwo.append(newsBodyTwo);

							var headlineTwo = $("<h5>").html(newsTextTwo[i]);
								headlineTwo.attr("class", "card-title headline-text" );
								newsBodyTwo.append(headlineTwo);

				// Div 4
				var musicCardThree = $("<div>").attr("class", "card col-2 music-card animated flipInX");
					musicCardThree.attr("style", "animation-delay: 0.7s");
					newRowTwo.append(musicCardThree);
						var musicImgThree = $("<img>").attr({
							class: "card-img-top img-fluid",
							alt: "music-image",
							src: musicArtThree[i]
							});
							musicCardThree.append(musicImgThree);
						
						var musicBodyThree = $("<div>").attr("class", "card-body text-center");
							musicCardThree.append(musicBodyThree);

							var musicHeadlineThree = $("<h5>").html(musicTextThree[i]);
								musicHeadlineThree.attr("class", "card-title headline-text" );
								musicBodyThree.append(musicHeadlineThree);
					
				// Div 5
				var movieDivThree = $("<div>").attr("class", "card col-2 animated flipInY");
					movieDivThree.attr("style", "animation-delay: 0.5s")
					newRowTwo.append(movieDivThree);
					var moviePosterThree = $("<img>").attr({
							class: "img-fluid",
							alt: "movie-poster",
							src: movieArtThree[i]
							});
							movieDivThree.append(moviePosterThree);

				
				// Div 6
				var newsCardThree = $("<div>").attr("class", "card col-2 news-card animated flipInX");
					newsCardThree.attr("style", "animation-delay: 1.1s");	
					newRowTwo.append(newsCardThree);
						var cardImgThree = $("<img>").attr({
							class: "card-img-top img-fluid",
							alt: "news-image",
							src: newsArtThree[i]
							});
							newsCardThree.append(cardImgThree);
						
						var newsBodyThree = $("<div>").attr("class", "card-body text-center"); 
							newsCardThree.append(newsBodyThree);

							var headlineThree = $("<h5>").html(newsTextThree[i]);
								headlineThree.attr("class", "card-title headline-text" );
								newsBodyThree.append(headlineThree);
						
				// Date Overlay
				var dateOverlay = $("<h2>").html("10/22/1955");
					dateOverlay.attr("class", "col-12 date-overlay");
					newSection.append(dateOverlay);
			
			}
	}

	// Resets All Data In Arrays 
	function reset(){
		 dates = [];
		 movieArtOne = [];
		 movieArtTwo = [];
		 movieArtThree = [];
		 tvOne = [];
		 tvTwo = [];
		 tvThree = [];
		 newsTextOne = [];
		 newsTextTwo = [];
		 newsTextThree = [];
		 newsArtOne = [];
		 newsArtTwo = [];
		 newsArtThree = [];
		 musicArtOne=[];
		 musicArtTwo = [];
		 musicArtThree = [];
		 musicTextOne = [];
		 musicTextTwo = [];
		 musicTextThree = []; 
	}

	// Runs the JQ to Display Images and Start Annimation 
	$("#start").on("click", function(event){
		slideCount = 0;
		event.preventDefault();
		console.log("click OK");

		// add api function
		makeMoments();
		$("#start-section").hide();
		$("#videoHolder").hide();
		init();
	});





//Keep This Closing Bracket For jQuery Load Function 
});