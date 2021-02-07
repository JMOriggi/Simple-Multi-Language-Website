var language = "";
init();
function init(){
    var paramLanguage = window.location.href.split("#lang?")[1];
    var browserLanguage = navigator.language || navigator.userLanguage;
    if(paramLanguage != "" && paramLanguage != null && paramLanguage != undefined){
        language = paramLanguage;
    }else{
        language = browserLanguage.split("-")[0];
    }
    //jQuery("#current-lang").text(language.toUpperCase());
    changeLanguage();
} 

/*Dropdown Menu*/
jQuery('.dropdown').click(function () {
    jQuery(this).attr('tabindex', 1).focus();
    jQuery(this).toggleClass('active');
    jQuery(this).find('.dropdown-menu').slideToggle(300);
});
jQuery('.dropdown').focusout(function () {
    jQuery(this).removeClass('active');
    jQuery(this).find('.dropdown-menu').slideUp(300);
});
jQuery('.dropdown .dropdown-menu li').click(function () {
    jQuery(this).parents('.dropdown').find('span').text(jQuery(this).text());
    jQuery(this).parents('.dropdown').find('input').attr('value', jQuery(this).attr('id'));
    language = jQuery(this).attr('id');
    changeLanguage();
});
/*End Dropdown Menu*/
  
function changeLanguage(){ 
    console.log("Function changeLanguage to "+ language);
    switch(language) {
        case "it":
            labels = listLables.filter(obj => { return obj.key === "it" });
            break;
        default:
            language = "en";
            labels = listLables.filter(obj => { return obj.key === "en" });
    }
    jQuery("#current-lang").text(language.toUpperCase());

    //Change label for corresponding page
    //Header for all pages
    jQuery(".menu1Label").text(labels[0].header[0].menu1Label);
    jQuery(".menu2Label").text(labels[0].header[0].menu2Label);
    jQuery(".menu3Label").text(labels[0].header[0].menu3Label);
    jQuery(".menu4Label").text(labels[0].header[0].menu4Label);
    jQuery(".menu5Label").text(labels[0].header[0].menu5Label);
    
    if(window.location.href.includes("page-about")){
        //About
        console.log("About page labels");
        jQuery(".titleLabel").html(labels[0].about[0].titleLabel);
        jQuery(".descriptionLabel").html(labels[0].about[0].descriptionLabel);
        jQuery(".contactsFooterLabel").html(labels[0].home[0].contactsFooterLabel);

    }else if(window.location.href.includes("page-services")){
        //Services
        console.log("Services page labels");
        jQuery(".titleLabel").text(labels[0].services[0].titleLabel);
        jQuery(".box1Label").html(labels[0].services[0].box1Label);
        jQuery(".box2Label").html(labels[0].services[0].box2Label);
        jQuery(".box3Label").html(labels[0].services[0].box3Label);
        jQuery(".box4Label").html(labels[0].services[0].box4Label);
        jQuery(".box5Label").html(labels[0].services[0].box5Label);
        jQuery(".box6Label").html(labels[0].services[0].box6Label);
        jQuery(".box7Label").html(labels[0].services[0].box7Label);
        jQuery(".box8Label").html(labels[0].services[0].box8Label);
        jQuery(".box9Label").html(labels[0].services[0].box9Label);
        jQuery(".box10Label").html(labels[0].services[0].box10Label);
        jQuery(".box11Label").html(labels[0].services[0].box11Label);
        jQuery(".box12Label").html(labels[0].services[0].box12Label);
        jQuery(".contactsFooterLabel").html(labels[0].home[0].contactsFooterLabel);

    }else if(window.location.href.includes("page-partners")){
        //Partners
        console.log("Partners page labels");
        jQuery(".titleLabel").text(labels[0].partners[0].titleLabel);
        jQuery(".descriptionLabel").html(labels[0].partners[0].descriptionLabel);
        jQuery(".contactsFooterLabel").html(labels[0].home[0].contactsFooterLabel);

    }else if(window.location.href.includes("page-news")){
        //News
        console.log("News page labels");
        jQuery(".titleLabel").text(labels[0].news[0].titleLabel);
        jQuery(".news1TitleLabel").text(labels[0].news[0].news1TitleLabel);
        jQuery(".news1DescLabel").text(labels[0].news[0].news1DescLabel);
        jQuery(".news2TitleLabel").text(labels[0].news[0].news2TitleLabel);
        jQuery(".news2DescLabel").text(labels[0].news[0].news2DescLabel);
        jQuery(".downloadLabel").text(labels[0].news[0].downloadLabel);
        jQuery(".contactsFooterLabel").html(labels[0].home[0].contactsFooterLabel);

    }else if(window.location.href.includes("page-contacts")){
        //Contacts
        console.log("Contacts page labels");
        jQuery(".titleLabel").text(labels[0].contacts[0].titleLabel);
        jQuery(".descriptionLabel").html(labels[0].contacts[0].descriptionLabel);
        jQuery(".contactsFooterLabel").html(labels[0].home[0].contactsFooterLabel);

    }else {
        //Index
        console.log("Index page labels");
        jQuery(".titleLabel").html(labels[0].home[0].titleLabel);
        jQuery(".challengesLabel").html(labels[0].home[0].challengesLabel);
        jQuery(".boxSocialLabel").html(labels[0].home[0].boxSocialLabel);
        jQuery(".boxLegalLabel").html(labels[0].home[0].boxLegalLabel);
        jQuery(".boxTechLabel").html(labels[0].home[0].boxTechLabel);
        jQuery(".boxEcoLabel").html(labels[0].home[0].boxEcoLabel);
        
        jQuery(".whoDescLabel").text(labels[0].home[0].whoDescLabel);
        jQuery(".learnMoreLabel").text(labels[0].home[0].learnMoreLabel);

        jQuery(".servicesDescLabel").text(labels[0].home[0].servicesDescLabel);
        jQuery(".servicesButtonLabel").text(labels[0].home[0].servicesButtonLabel);

        jQuery(".partnersDescLabel").text(labels[0].home[0].partnersDescLabel);
        jQuery(".partnersButtonLabel").text(labels[0].home[0].partnersButtonLabel);

        jQuery(".newsTitleLabel").text(labels[0].home[0].newsTitleLabel);
        jQuery(".news1TitleLabel").text(labels[0].home[0].news1TitleLabel);
        jQuery(".news1DescLabel").text(labels[0].home[0].news1DescLabel);
        jQuery(".news2TitleLabel").text(labels[0].home[0].news2TitleLabel);
        jQuery(".news2DescLabel").text(labels[0].home[0].news2DescLabel);

        jQuery(".contactsFooterLabel").html(labels[0].home[0].contactsFooterLabel);
    }
}

function link(destination){
    console.log(destination + '#lang?' + language);
    window.location.href = destination + '#lang?' + language;
}








//OPEN NAV PANEL MOBILE
$(function() {
    var $mobileButton = $(".navButtonToggle");
    $mobileButton.on("click", function(e) {
        $mobileButton.toggleClass("is-active");
        $("#navPanel").toggleClass("mobile-menu-hide");
        $("#navPanel").toggleClass("mobile-menu-show");
    });
});




//SMOOTH SCROLLING TO ANCHOR
function filterPath(string) {
    return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
}
var locationPath = filterPath(location.pathname);
var scrollElem = scrollableElement('html', 'body');
$('a[href*=#]').each(function() {
    // Any links with hash tags in them (can't do ^= because of fully qualified URL potential)
    // Ensure it's a same-page link
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
        && (location.hostname == this.hostname || !this.hostname)
        && this.hash.replace(/#/,'') ) {
            // Ensure target exists
            var $target = $(this.hash), target = this.hash;
            if (target) {
                // Find location of target
                var targetOffset = $target.offset().top - 80;
                $(this).click(function(event) {
                    // Prevent jump-down
                    event.preventDefault();
                    // Animate to target
                    $(scrollElem).animate({scrollTop: targetOffset}, 1000, function() {
                        // Set hash in URL after animation successful
                        location.hash = target;
                    });
                });
            }
    }
});
function scrollableElement(els) { // Use the first element that is "scrollable"  (cross-browser fix?)
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
        var el = arguments[i],
        $scrollElement = $(el);
        if ($scrollElement.scrollTop()> 0) {
            return el;
        } else {
            $scrollElement.scrollTop(1);
            var isScrollable = $scrollElement.scrollTop()> 0;
            $scrollElement.scrollTop(0);
            if (isScrollable) {
                return el;
            }
        }
    }
    return [];
}





//BANNER SLIDER
imgList = ['../assets/images/banner1.jpg','../assets/images/banner4.jpg','../assets/images/banner3.jpg']
i = 1;
window.setInterval(function() {
    if(i==imgList.length){
        i = 0;
    }
    curImg = imgList[i] 
    $('#banner').fadeTo(350, 0.3, function(){
        $(this).css('background-image', 'url(' + curImg + ')');
    }).fadeTo(350, 1);
    i = i+1;
}, 5000);