(function () {
/* eslint-disable */
var app = angular.module('jordanModule', ['pascalprecht.translate', 'ngSanitize']);

app.config(function($translateProvider) {
  $translateProvider.useSanitizeValueStrategy('sanitize');
  $translateProvider.translations('en', {
      TITLE: 'Jordan Quagliatini - Young developer interested in every kind of new technology',
      hello: "Hi, I'm <span class='hand'>Jordan</span>",
      "sub-hello": 'Young developer interested in every kind of new technology',
      introductionTitle: "Let me introduce me",
      introduction: "I'm a future software engineer, partially studying at CPE Lyon (Fr). In the same time I work for Orange France, the operator.",
      skillTitle: "Skills",
      educationTitle: "Education",
      bachelorCPETitle: "Bachelor - CPE Lyon",
      bachelorCPE: "Entering in Bachelor degreee, in order to begin my master class of computer engineering",
      timelineMoreInfosBtn: "More Infos",
      bachelorCPEDate: "September 15 - ?",
      bachelorLPTitle: "Bachelor degree in computer science - Lyon 1 University",
      bachelorLP: "Studying information system and growing new skills : J2EE, .NET, NODEJS, Agility, ...",
      bachelorLPDate: "September 2015",
      degreeTitle: "Technology degree - University Institute of Technology Arles",
      degree: "Studying computer science, discovering development",
      degreeDate: "June 2014",
      contact:"<span class='mdi-communication-email'></span> Contact me",
      connect: "<span class='icon-linkedin'></span> Connect with me",
      follow: "<span class='icon-github'></span> Follow me",
      pdfResume: "You can also <a href='/cv'>look</a> my resume",
      connectFooter: "Connect",
      agility: "Agility",
      javaContent: "I started Java during my technical degree, and continued. It's kind of THE language to know today. Not a lot of experience with it, but kind of enthusiast to use it.",
      "c++Content": "I Learned C++ during my technical degree and continued during my engineer courses.",
      javascriptContent: "Kind of my favourite language. It's fun to use, there's a ton of libs to discover. You can use from server/client side. Well it's a language which evolution was really interesting",
      expressContent: "I've never used Node on itself always with Frameworks, particularly Express, on small projects like school works or experiments with MongoDB or Redis.",
      perlContent: "I worked with that language during a year. As a script language or object oriented.",
      shellContent: "I use that language every time, as a tool for my computer. It's what give Linux all its charm.",
      gitContent: "I discovered Git during an internship, it was just like a revelation for me. For me you can't be a developer without knowing this fantastic tool.",
      agilityContent: "I'm one of these young and inexperienced student who thinks agility is still a way of life, maybe because I've never experienced a Real Agile project, I hope to try it one day.",
      readMoreSkills: "Read More"
  });

  $translateProvider.translations('fr', {
      TITLE: 'Jordan Quagliatini - Jeune développeur passionné par toutes sortes de nouvelles technologies',
      hello: "Salut, je suis <span class='hand'>Jordan</span>",
      "sub-hello": 'Jeune développeur passionné par toutes sortes de nouvelles technologies',
      introductionTitle: "Je me présente",
      introduction: "Futur ingénieur logiciel, alternant à CPE Lyon et développeur chez Orange France.",
      skillTitle: "Compétences",
      educationTitle: "Formation",
      bachelorCPETitle: "1<sup>ère</sup> année, diplôme d'ingénieur",
      bachelorCPE: "1<sup>ère</sup> année de mon diplôme d'ingénieur chez CPE Lyon.",
      timelineMoreInfosBtn: "En savoir plus",
      bachelorCPEDate: "Septembre 2015 - ?",
      bachelorLPTitle: "Licence professionnelle SIL - DASI",
      bachelorLP: "Développement en système d'information. Nouvelles compétences: J2EE, .NET, NODEJS, agilité",
      bachelorLPDate: "Septembre 2015",
      degreeTitle: "DUT Informatique",
      degree: "Découverte de la programmation",
      degreeDate: "Juin 2014",
      contact: "<span class='mdi-communication-email'></span> Me contacter",
      connect: "<span class='icon-linkedin'></span> Se connecter",
      follow: "<span class='icon-github'></span> Me suivre",
      pdfResume: "Vous pouvez aussi <a href='/cv' target='_blank'>visualiser</a> mon CV",
      connectFooter: "Se connecter",
      agility: "Agilité",
      javaContent: "J'ai commencé le Java pendant mon DUT. C'est LE language à connaitre aujourd'hui. Je n'ai pas beaucoup d'expérience avec, mais je serais très intéressé de travailler avec.",
      "c++Content": "J'ai également appris le C++ durant mon DUT et je continue encore aujourd'hui.",
      javascriptContent: "Mon langage préféré. Sympa à utiliser, beaucoup de librairies à découvrir, on peut l'utiliser côté serveur/client. C'est un langage dont l'utilisation est vraiment intéressante.",
      expressContent: "Je n'ai jamais utilisé Nodejs seul, toujours avec Express, sur de petits projets (scolaires ou personnels) avec MongoDB ou Redis.",
      perlContent: "J'ai travaillé avec ce langage pendant un an en tant que langage de script ou orienté objet.",
      shellContent: "Je l'utilise tout le temps sur système UNIX pour toutes sortes de manipulations. C'est ce qui donne à Linux tout son charme.",
      gitContent: "J'ai découvert Git pendant mon stage de DUT, ce qui a été comme une révélation pour moi. Selon moi on ne peut être un développeur sans connaitre cet outil.",
      agilityContent: "Je suis un de ces développeurs jeunes et inexpérimentés, qui pensent encore que l'agilité est un mode de vie. Peut-être parce que je n'ai jamais vécu de vrai projet Agile, ce que j'espère combler bientôt.",
      readMoreSkills: "Plus"
  });

  $translateProvider.translations('it', {
      TITLE: 'Jordan Quagliatini - Giovanne programatore, appassionato di tutti i tipi di nuove tecnologie',
      hello: "Ciao, sono <span class='hand'>Jordan</span>",
      "sub-hello" : 'Giovane programmatore, appassionato di tutti i tipi di nuove tecnologie',
      introductionTitle: "Mi presento",
      introduction: "Futuro ingegnere, attualmente apprendista, studio a CPE Lyon e lavoro per Orange France",
      skillTitle: "Competenze",
      educationTitle: "Formazione",
      bachelorCPETitle: "Primo anno del diploma d'ingegnere",
      bachelorCPE: "Inizio il mio percorso d'ingegnere",
      timelineMoreInfosBtn: "saperne di più",
      bachelorCPEDate: "Settembre 2015 - ?",
      bachelorLPTitle: "Laurea",
      bachelorLP: "Laurea dove ho studiato i sistemi d'informazione",
      bachelorLPDate: "Settembre 2015",
      degreeTitle: "Diploma Universitario",
      degree: "Durante questo primo diploma imparo la programmazione",
      degreeDate: "Giugno 2014",
      contact: "<span class='mdi-communication-email'></span> Contattami",
      connect: "<span class='icon-linkedin'></span> Connessione",
      follow: "<span class='icon-github'></span> Seguimi",
      pdfResume: "<a href='/cv' target='_blank'>Il mio CV</a>",
      connectFooter: "Connessione",
      agility: "Agilità",
      javaContent: "Ho cominciato Java durante il mio diploma Universitario. Considerato IL LINGUAGGIO oggi. Non è il linguaggio con cui ho più esperienze, però mi piaccerebbe usarlo.",
      "c++Content": "Ho anche imparato c++ durante il mio Diploma Universitario.",
      javascriptContent: "Il linguaggio che preferisco. Si possono fare così tante cose con javascript, che mi sembra essere davvero molto interessante.",
      expressContent: "Non ho mai usato Nodejs da solo, sempre con Express, su piccoli progetti (personali o di scuola) con MongoDB o Redis.",
      perlContent: "Ho lavorato con questo linguaggio durante un anno, come script o object-oriented.",
      shellContent: "Uso sempre questo linguaggio per qualsiasi manipulazione on UNIX, ed è ciò che dà a Linux il suo fascino.",
      gitContent: "Ho scoperto Git durante una formazione di fine diploma. È stata una rivelazione. Secondo me non si può essere programatore senza conoscere questo strumento.",
      agilityContent: "Sono uno di questi programmatori, ancora giovane che pensa che l'agilità è un modo di vità, forse perchè non ho mai provato un vero progetto Agile. Non vedo l'ora di provarne uno.",
      readMoreSkills: "saperne di più"
  });

  $translateProvider.preferredLanguage('en');
});
/* eslint-enable */

  app.controller('Ctrl', function ($scope, $translate, $rootScope, $location) {
    $scope.changeLanguage = function (key) {
      $translate.use(key);
      $rootScope.title = $translate('TITLE');
      $location.path(key);
    };
    var path = $location.path().replace('/', '');
    var lang = $translate.use();
    if (path.length !== 0) {
      if (path !== lang && ['fr', 'en', 'it'].indexOf(path) !== -1) {
        $scope.changeLanguage(path);
      }
    } else {
      $location.path(lang);
    }
  });
})();
