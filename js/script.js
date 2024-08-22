$(function () {
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['Intro', 'AboutMe', 'Skill', 'Web', 'Design', 'Contact'],
        sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'AboutMe', 'Skill', 'Web Design', 'Graphic Design', 'Contact'],
        responsiveWidth: 900,
        afterResponsive: function (isResponsive) {

        }

    });


})