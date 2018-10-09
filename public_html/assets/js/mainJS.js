var app = angular.module("mainApp", ['ngRoute']);
app.value('language', {"lang": "en"});
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'casalopa/landing.html',
                    controller: 'landingCtrl',
                })
                .when('/home', {
                    templateUrl: 'casalopa/landing.html',
                    controller: 'landingCtrl'
                })
                .when("/house", {
                    templateUrl: 'casalopa/house.html',
                    controller: 'houseCtrl'
                })
                .when("/booking", {
                    templateUrl: 'casalopa/booking.html',
                    controller: 'bookingCtrl'
                })
                .when("/activities", {
                    templateUrl: 'casalopa/activities.html',
                    controller: 'activitiesCtrl'
                })
                .when("/contact", {
                    templateUrl: 'casalopa/contact.html',
                    controller: 'contactCtrl'
                })
                .when("/familienrecht", {
                    templateUrl: 'casalopa/taetigkeitsschwerpunkte_familienrecht.html',
                    controller: 'familienrechtCtrl'
                })
                .when("/verkehrsrecht", {
                    templateUrl: 'casalopa/taetigkeitsschwerpunkte_verkehrsrecht.html',
                    controller: 'verkehrsrechtCtrl'
                })/**/
                .when("/taetigkeitsschwerpunkte_weitere", {
                    templateUrl: 'casalopa/taetigkeitsschwerpunkte_weitere.html',
                    controller: 'weitereCtrl'
                })
                .when("/team", {
                    templateUrl: 'casalopa/team.html',
                    controller: 'teamCtrl'
                })
                .when("/rooms", {
                    templateUrl: 'casalopa/rooms.html',
                    controller: 'roomsCtrl'
                })
                .when("/email", {
                    templateUrl: 'casalopa/email.html',
                    controller: 'emailCtrl'
                })
                .when("/contact", {
                    templateUrl: 'casalopa/email.html',
                    controller: 'emailCtrl'
                })
                .otherwise({
                    redirectTo: 'casalopa/landing.html'
                });
    }]);
app.controller('indexCtrl', function () {
    $('.linkHome').click(function () {
        $('.image-13').css({
            display: 'none'
        });
    });
});
app.controller('headerCtrl', function ($scope) {
    $('header').click(function () {
        $('.naviUpper').slideDown('sloe');
    });
});
app.controller('naviUpperCtrl', function ($scope, $rootScope) {
    $rootScope.language = "en";


});
app.controller('naviToggleCtrl', function () {
    $('.vertical').click(function () {
        $(this).slideToggle('slow');
    });
});
app.controller('landingCtrl', function ($scope) {
    $('.buttonlink_en, .buttonlink_de').click(function () {
        $('.naviUpper').slideUp('slow');
    });
});
app.controller('houseCtrl', function ($scope, $rootScope) {
    $rootScope.language = "";
    $rootScope.flagSite = 1;
    function changeLanguage(language, number) {
        $rootScope.flagSite = number;
        if (language == "de") {
            text_switch = text_de;
        } else {
            text_switch = text_en;
        }
    }
    function changeText_house() {
        if ($rootScope.flagSite == 1) {
            $('#btnHouse').html(text_switch[0].btnHouse);
            $('#btnRooms').html(text_switch[0].btnRooms);
            $('#btnTerrace').html(text_switch[0].btnTerrace);
            $('.aHouse').text(text_switch[0].aHouse);
            $('.aBooking').text(text_switch[0].aBooking);
            $('.aActivities').text(text_switch[0].aActivities);
            $('.aContact').text(text_switch[0].aContact);
            $('.headlineSite').text(text_switch[0].headlineSite);
            $('#pic1Subline').text(text_switch[0].pic1Subline);
            $('#pic2Subline').css({display: 'block'}).text(text_switch[0].pic2Subline);
            $('#pic3Subline').text(text_switch[0].pic3Subline);
            $('#pic4Subline').text(text_switch[0].pic4Subline);
            $('#pic5Subline').text(text_switch[0].pic5Subline);
            $('.imgHouse1').css({backgroundImage: text_switch[0].bgpic1});
            $('.picsHouseUpper .columns:nth-of-type(3)').css({display: 'block'});
            $('.imgHouse2').css({display: 'block', backgroundImage: text_switch[0].bgpic2});
            $('.imgHouse3').css({backgroundImage: text_switch[0].bgpic3});
            $('.imgHouse4').css({backgroundImage: text_switch[0].bgpic4});
            $('.imgHouse5').css({backgroundImage: text_switch[0].bgpic5});
            $('#headlineSub1').css({display: 'block'}).text(text_switch[0].headlineSub1);
            $('#headlineSub2').css({display: 'block'}).text(text_switch[0].headlineSub2);
            $('#headlineSub3').css({display: 'block'}).text(text_switch[0].headlineSub3);
            $('#infoSpecial').css({display: 'block'});
            $('#info0').html(text_switch[0].info0);
            $('#info1').html(text_switch[0].info1);
            $('#info2').css({display: 'block'}).html(text_switch[0].info2);
            $('#spacer2').css({display: 'block'});
            $('#info3').html(text_switch[0].info3);
        }
        if ($rootScope.flagSite == 2) {
            $('#btnHouse').html(text_switch[0].btnHouse);
            $('#btnRooms').html(text_switch[0].btnRooms);
            $('#btnTerrace').html(text_switch[0].btnTerrace);
            $('.aHouse').text(text_switch[0].aHouse);
            $('.aBooking').text(text_switch[0].aBooking);
            $('.aActivities').text(text_switch[0].aActivities);
            $('.aContact').text(text_switch[0].aContact);
            $('.headlineSite').text(text_switch[1].headlineSite);
            $('#pic1Subline').text(text_switch[1].pic1Subline);
            $('#pic2Subline').css({display: 'none'});
            $('#pic3Subline').text(text_switch[1].pic3Subline);
            $('#pic4Subline').text(text_switch[1].pic4Subline);
            $('#pic5Subline').text(text_switch[1].pic5Subline);
            $('#infoSpecial').css({display: 'none'});
            $('.imgHouse1').css({backgroundImage: text_switch[1].bgpic1});
            $('.picsHouseUpper .columns:nth-of-type(3)').css({display: 'block'});
            $('.imgHouse2').css({display: 'block', backgroundImage: text_switch[1].bgpic2});
            $('.imgHouse3').css({backgroundImage: text_switch[1].bgpic3});
            $('.imgHouse4').css({backgroundImage: text_switch[1].bgpic4});
            $('.imgHouse5').css({backgroundImage: text_switch[1].bgpic5});
            $('#headlineSub1').css({display: 'none'});
            $('#headlineSub2').text(text_switch[1].headlineSub2);
            $('#headlineSub3').css({display: 'none'});
            $('#info0').html(text_switch[1].info0);
            $('#info1').html(text_switch[1].info1);
            $('#info2').css({display: 'none'})
            $('#spacer2').css({display: 'none'});
            $('#info3').html(text_switch[1].info3);
        }
        if ($rootScope.flagSite == 3) {
            $('#btnHouse').html(text_switch[0].btnHouse);
            $('#btnRooms').html(text_switch[0].btnRooms);
            $('#btnTerrace').html(text_switch[0].btnTerrace);
            $('.aHouse').text(text_switch[0].aHouse);
            $('.aBooking').text(text_switch[0].aBooking);
            $('.aActivities').text(text_switch[0].aActivities);
            $('.aContact').text(text_switch[0].aContact);
            $('.headlineSite').text(text_switch[2].headlineSite);
            $('#info0').html(text_switch[2].info0);
            $('#pic1Subline').text(text_switch[2].pic1Subline);
            $('#pic2Subline').text(text_switch[2].pic2Subline);
            $('#pic3Subline').text(text_switch[2].pic3Subline);
            $('#pic4Subline').text(text_switch[2].pic4Subline);
            $('#pic5Subline').text(text_switch[2].pic5Subline);
            $('#infoSpecial').css({display: 'none'});
            $('#info1').html(text_switch[2].info1);
            $('#info2').css({display: 'none'});
            $('#spacer2').css({display: 'none'});
            $('.imgHouse1').css({backgroundImage: text_switch[2].bgpic1});
            $('.picsHouseUpper .columns:nth-of-type(3), .imgHouse2').css({display: 'none'});
            $('.imgHouse3').css({backgroundImage: text_switch[2].bgpic3});
            $('.imgHouse4').css({backgroundImage: text_switch[2].bgpic4});
            $('.imgHouse5').css({backgroundImage: text_switch[2].bgpic5});
            $('#headlineSub1').css({display: 'none'});
            $('#headlineSub2').text(text_switch[2].headlineSub2);
            $('#headlineSub3').css({display: 'none'});
            $('#info0').html(text_switch[2].info0);
            $('#info1').html(text_switch[2].info1);
            $('#info2').css({display: 'none'})
            $('#info3').html(text_switch[2].info3);
        }
    }
    $('.hamburger').click(function () {
        $('.vertical').slideDown('slow');
    });
    var text_en = [
        {
            aHouse: "The house",
            aBooking: "Booking",
            aActivities: "Activities",
            aContact: "Contact",
            btnHouse: "House",
            btnRooms: "Rooms",
            btnTerrace: "Pool &<br> Terrace",
            headlineSite: "The House",
            headlineSub1: 'Relaxing Holidays',
            headlineSub2: 'Beaches of the Costa del Sol',
            headlineSub3: 'Casa Lopa... Ideal for 2 to 6 people',
            pic1Subline: "Casa Lopa, your holiday home in Andalucia",
            pic2Subline: "Front of the house",
            pic3Subline: "Welcome to Casa Lopa!",
            pic4Subline: "Relax on the terrace",
            pic5Subline: "Enjoy stunning views",
            /*info with border above pics*/
            info0: "<h3>Holiday House, Pool, Andalucia</h3> Holiday villa with terrace and pool in Andalucia, Spain, in the mountains near Comares, Costa del Sol. ",
            /*infos site*/
            infoSpecial: "<p>&nbsp;Long-Term Rentals&nbsp;</p><p><b>You look for a long-term rental?</b><br>Send us an<a href='#/contact'><b>email</b></a>and you receive your <b>special offer</b> by return!<br>&nbsp;</p>",
            info1: "Fantastic holiday villa in the mountains of Andalucia. You reach us from Malaga Airport in 45 minutes by car.<br><br>The Villa with pool is located on the hillside of the mountain MAZMULLAR, ca. 10 minutes from the idyllic small mountain town COMARES and 20 minutes away from Colmenar. <br><a href=''>(Please click here for the map of the Axarquia region)</a> ",
            info2: "The modern and fully equipped Villa (3 bedrooms, 2 bathrooms, kitchen, living room, terrace, private swimming pool ) was newly built in 2005 and invites you for a relaxing holiday in the unique landscape of traditional Andalucia.",
            info3: "Enjoy your holidays  apart from the mass tourism in a distinguished setting. <br><br><p>If you want to spend a day at the Costa del Sol...  No problem. ...you reach the popular beach ressorts of Torremolinos or Torre del Mar within 45 minutes.	</p>",
            bgpic1: "url('./assets/images/top1k.jpg')",
            bgpic2: "url('./assets/images/front2k.jpg')",
            bgpic3: "url('./assets/images/casalopak.jpg')",
            bgpic4: "url('./assets/images/pool12k.jpg')",
            bgpic5: "url('./assets/images/terrace3k.jpg')"
        },
        {
            headlineSite: "The Rooms",
            headlineSub1: '',
            headlineSub2: 'Details about the Rooms',
            headlineSub3: '',
            pic1Subline: "Living room with open fire place",
            pic2Subline: "Dining room with lovely mountain views",
            pic3Subline: "High standard bathroom",
            pic4Subline: "Bedroom 1 with double bed",
            pic5Subline: "Bedroom 2 with double bed",
            /*info with border above pics*/
            info0: "<h3>Andalucia, Spain:</h3> Rooms House with 2 double bedrooms, living room with dining area and fireplace, fully equipped kitchen, air conditioning, Sat-TV ",
            /*infos site*/
            infoSpecial: "",
            info1: "Casa Lopa offers you <br><br><ul><li>double bedroom with en-suite shower room/WC</li><li>2 double  bedrooms with separate bathroom/WC</li><li>fully equipped kitchen (dishwasher, washing machine, fridge/freezer, microwave, various kitchen utensils) incl. all required dishes</li><li>spacious living room with dining area and fireplace</li></ul>",
            info2: "",
            info3: "<ul><li>All bedrooms and living room have air conditioning.</li><li>Sat-TV (ASTRA 1 and ASTRA 2) with all major English, German, Spanish and other international channels.</li><li>	WiFi if required.</li><li>All rooms and outside area are on the ground floor.</li><li>Furnishing in sophisticated English style.</li></ul>",
            bgpic1: "url('./assets/images/living1k.jpg')",
            bgpic2: "url('./assets/images/diner2k.jpg')",
            bgpic3: "url('./assets/images/bath2k.jpg')",
            bgpic4: "url('./assets/images/bed1room6k.jpg')",
            bgpic5: "url('./assets/images/bed2room2k.jpg')"
        },
        {
            headlineSite: "Pool and Terrace",
            headlineSub1: '',
            headlineSub2: 'Cool in the Pool!',
            headlineSub3: '',
            pic1Subline: "Pool with sun beds and pergola",
            pic2Subline: "",
            pic3Subline: "Pool and chairs on the terrace",
            pic4Subline: "Pool on the terrace",
            pic5Subline: "Andalucian mountain views from the terrace",
            /*info with border above pics*/
            info0: "<h3>House with Pool & Terrace</h3>Rental house with pool in Andalucia, Spain. Terrace with pool, sunbeds, barbecue and shady pergola.",
            /*infos site*/
            infoSpecial: "",
            info1: "Outside you find  a big terrace with rustic dining table and barbecue. <br><br>Enjoy  your breakfast as well as a barbecue evening with this panoramic view.",
            info3: "Whenever you need to cool down - have a dip in your swimming pool with sunbeds and shady pergola.",
            bgpic1: "url('./assets/images/pool3k.jpg')",
            bgpic2: "",
            bgpic3: "url('./assets/images/pool4k.jpg')",
            bgpic4: "url('./assets/images/pool2k.jpg')",
            bgpic5: "url('./assets/images/terrace3k.jpg')"
        }
    ];
    var text_de = [
        {
            aHouse: "Das Haus",
            aBooking: "Buchung",
            aActivities: "Aktivitäten",
            aContact: "Kontakt",
            btnHouse: "Haus",
            btnRooms: "Zimmer",
            btnTerrace: "Pool &<br> Terrasse",
            headlineSite: "Das Haus",
            headlineSub1: 'Entspannender Urlaub',
            headlineSub2: 'Strände der Costa del Sol',
            headlineSub3: 'Casa Lopa... Ideal für 2 bis 6 Personen',
            pic1Subline: "Casa Lopa, Ihr Ferienhaus in Andalusien",
            pic2Subline: "Front des Hauses",
            pic3Subline: "Willkommen in Casa Lopa",
            pic4Subline: "Entspannen Sie sich auf der Terrasse",
            pic5Subline: "Genießen Sie die wunderbare Aussicht",
            /*info with border above pics*/
            info0: "<h3>Villa mit Pool & Terrasse</h3>Ferienhaus mit Pool und Terrasse in Andalusien, nahe den Stränden der Costa del Sol, zum Entspannen und Genießen.  ",
            /*infos site*/
            infoSpecial: "<p>&nbsp;Langzeitvermietung&nbsp;</p><p><b>Sie suchen eine Villa zur langfristigen Miete?</b><br>Senden sie uns eine <a href='#/contact'><b>Nachricht</b></a>und Sie erhalten umgehend ein<b></b> maßgeschneidertes Angebot!<br>&nbsp;</p>",
            info1: "Mieten Sie die traumhafte Ferienvilla in den Andalusischen Bergen. Vom Flughafen Malaga erreichen Sie uns in ca. 45 Autominuten.<a href='andalusien-karte.php' title='Karte der Region Axarquia'>(Hier geht´s zur Karte der Region Axarquia)</a><br><br>Die Villa mit Pool liegt am Berg Mazmullar, ca. 10 Minuten entfernt vom idyllischen Bergstädtchen Comares und 20 Minuten von Colmenar.",
            info2: "Die moderne und  komplett ausgestattete Villa (mit 3 Schlafzimmern, 2 Badezimmern, Küche, Wohnraum, Terrasse, privatem Swimming Pool) wurde 2005 erbaut und lädt ein zum Entspannen in der einzigartigen und traditionsreichen Landschaft Andalusiens.",
            info3: "Genießen Sie Ihre freien Tage abseits des üblichen Massentourismus in einem ansprechenden und gehobenen Ambiente."
        },
        {
            headlineSite: "Die Zimmer",
            headlineSub1: '',
            headlineSub2: 'Details zu den Zimmern',
            headlineSub3: '',
            pic1Subline: "Wohnzimmer mit Kamin",
            pic2Subline: "Esszimmer mit wunderbarem Bergblick",
            pic3Subline: "Bad mit hochwertiger Ausstattung",
            pic4Subline: "Schlafzimmer 1 mit Doppelbett",
            pic5Subline: "Schlafzimmer 2 mit Doppelbett",
            /*info with border above pics*/
            info0: "<h3>Zimmer mit Klimaanlage</h3> Andalusien: Wohnzimmer mit offenem Kamin und Essbereich, Astra Satelliten TV, Schlafzimmer mit Doppelbetten (Doppelzimmer), Klimaanlage.",
            /*infos site*/
            infoSpecial: "",
            info1: "Casa Lopa bietet<br><br><ul><li> Doppelzimmer mit Dusche/WC</li><li> 2 weitere Doppelzimmer mit separatem Badezimmer/ WC</li><li> komplett ausgestattete Küche (E-Herd, Spül-, Waschmaschine, Kühl- / Gefrierkombination, Mikrowelle und diverse Küchengeräte) mit ausreichend Geschirr</li><li> großes Wohnzimmer mit gemütlicher Sitzkombination und offenem Kamin sowie  Essbereich</li>",
            info2: "",
            info3: "<ul><li><ul><li> Schlafzimmer und Wohnbereich sind mit Klimaanlage ausgestattet und liegen zusammen mit dem Außenbereich  auf einer Ebene.</li><li>	Sat-TV ( ASTRA 1 und ASTRA 2) mit allen gängigen deutschen, englischen, spanischen und anderen internationalen Kanälen.</li><li> WLAN auf Anfrage möglich.</li><li>Mobiliar und Einrichtung im anspruchsvollen englischen Stil.</li></ul>"
        },
        {
            headlineSite: "Pool und Terrasse",
            headlineSub1: '',
            headlineSub2: 'Cool im Pool!',
            headlineSub3: '',
            pic1Subline: "Pool und Terrasse",
            pic2Subline: "",
            pic3Subline: "Pool und Sonnenliegen auf der Terrasse",
            pic4Subline: "Der Pool auf der Terrasse",
            pic5Subline: "Terrasse: Blick über die andalusischen Berge",
            /*info with border above pics*/
            info0: "<h3>Haus mit Swimming Pool</h3>Haus mit Swimming Pool und großer Terrasse mit rustikalem Esstisch und Grill sowie Sonnenliegen und schattiger Pergola.",
            /*infos site*/
            infoSpecial: "",
            info1: " Der Außenbereich bietet Ihnen eine große Terrasse mit rustikalem Esstisch und Grill.<br><br>Hier können Sie sowohl Ihr Frühstück als auch einen Grillabend mit herrlichem Ausblick genießen. ",
            info3: "Wann immer Sie eine Abkühlung benötigen - der gepflegte Swimming Pool mit Sonnenliegen und schattiger Pergola bringt ihnen die gewünschte Erfrischung.",
        }
    ];
    var text_switch;

    if ($rootScope.language == "de") {
        text_switch = text_de;
    } else if ($rootScope.language == "en") {
        text_switch = text_en;
    } else {
        text_switch = text_en;
    }
    $('.imglang_de').click(function () {
        $(this).slideUp('slow');
        $('.imglang_en').slideDown('slow');
        $rootScope.language = "de";
        changeText_house();
        console.log($rootScope.language, $rootScope.flagSite);

    });
    $('.imglang_en').click(function () {
        $(this).slideUp('slow');
        $('.imglang_de').slideDown('slow');
        $rootScope.language = "en";
        changeText_house();
    });
    $('#btnHouse').click(function () {
        changeLanguage($rootScope.language, 1);
        $(this).css({opacity: 0.6});
        $('#btnRooms, #btnTerrace').css({opacity: 1});
        changeText_house();
    });
    $('#btnRooms').click(function () {
        changeLanguage($rootScope.language, 2);
        $(this).css({opacity: 0.6});
        $('#btnHouse, #btnTerrace').css({opacity: 1});
        changeText_house();
    });
    $('#btnTerrace').click(function () {
        changeLanguage($rootScope.language, 3);
        $(this).css({opacity: 0.6});
        $('#btnHouse, #btnRooms').css({opacity: 1});
        changeText_house();
    });

    $('.main').mouseover(function () {
        $('.image-13').css({
            display: 'block'
        });
    });
    $('#liHouse').click(function () {
        $('.verticalSub').slideDown('slow');
    });
    $('.verticalSub li').click(function () {
        $('.vertical').slideUp('slow');
        $('.verticalSub').slideUp();
        $('.naviUpperComplete').css({
            display: 'block'
        })
    });
});


app.controller('contactCtrl', function ($scope) {});
app.controller('teamCtrl', function ($scope) {
    $scope.changePic1 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team1.jpg")'
        });
        $('.label1').css({
            backgroundColor: 'orange'
        });
        $('.label2, .label3, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic2 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team2.jpg")'
        });
        $('.label2').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label3, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic3 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team3.jpg")',
            transition: 'opacity 2s ease-in-out'
        });
        $('.label3').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label4, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic4 = function () {
        $('#picTeam').fadeIn(300).css({
            backgroundImage: 'url("assets/team4.jpg")'
        });
        $('.label4').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label5, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic5 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team5.jpg")'
        });
        $('.label5').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label4, .label6').css({
            backgroundColor: '#efefef'
        });
    };
    $scope.changePic6 = function () {
        $('#picTeam').css({
            backgroundImage: 'url("assets/team6.jpg")'
        });
        $('.label6').css({
            backgroundColor: 'orange'
        });
        $('.label1, .label2, .label3, .label4, .label5').css({
            backgroundColor: '#efefef'
        });
    };

});
/*function vergroessern1(){
 document.getElementById("groesser").style.backgroundImage="url('../assets/team1.jpg')";
 document.getElementById("groesser").style.border=2+"px" + " ridge" + " grey";
 document.getElementById("groesser").style.boxShadow="2px 2px 7px black";
 document.getElementById("groesser").style.display="block";
 }
 function vergroessern2(){
 document.getElementById("groesser").style.backgroundImage="url('../assets/team2.jpg')";
 document.getElementById("groesser").style.border=2+"px" + " ridge" + " grey";
 document.getElementById("groesser").style.boxShadow="2px 2px 7px black";
 document.getElementById("groesser").style.display="block";
 }
 function vergroessern3(){
 document.getElementById("groesser").style.backgroundImage="url('../assets/team3.jpg')";
 document.getElementById("groesser").style.border=2+"px" + " ridge" + " grey";
 document.getElementById("groesser").style.boxShadow="2px 2px 7px black";
 document.getElementById("groesser").style.display="block";
 }
 function vergroessern4(){
 document.getElementById("groesser").style.backgroundImage="url('../assets/team4.jpg')";
 document.getElementById("groesser").style.border=2+"px" + " ridge" + " grey";
 document.getElementById("groesser").style.boxShadow="2px 2px 7px black";
 document.getElementById("groesser").style.display="block";
 }
 function loeschen(){
 document.getElementById("groesser").style.backgroundImage="";
 document.getElementById("groesser").style.border="";
 document.getElementById("groesser").style.boxShadow="";
 document.getElementById("groesser").style.display="none";
 }*/