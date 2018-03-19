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
    var newRow = $("<div>").attr("class", "row no-gutters text-center");
        newContainer.append(newRow);
    var newDivOne = $("<div>").attr("class", "offset-3 col-2");
        newRow.append(newDivOne);
    var posterOne = $("<img>").attr({
            class: "img-fluid",
            alt: "movie-poster",
            src: "./assets/images/test-poster.jpg"
            });
        newDivOne.append(posterOne);
    var newDivTwo = $("<div>").attr("class", "col-3 d-flex headline align-items-center");
        newRow.append(newDivTwo);
    var headlineOne = $("<h5>").html("Lorem ipsum dolor amet chambray tattooed truffaut");
        headlineOne.attr("class", "headline-text" );
        newDivTwo.append(headlineOne);
    init();

}

$("#start").on("click", function(event){
    event.preventDefault();
    console.log("click OK");
    makeMoment();
    $("#start-section").hide();
});



});