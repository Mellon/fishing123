/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(){
    var app = angular.module("fishing123", []);
    app.controller('FishSpeciesInQuebec', function(){
        this.fish = species;
    });
    var species = [
        {
            name: "Large Mouth Bass",
            cnName: "大嘴鲈鱼",
            period: "2014-06-13 ~ 2015-03-31",
            image: "largemouthbass.png",
            catchLimit: "6条(大嘴小嘴鲈鱼合计)",
            lengthLimit: "无"
        },
        {
            name: "Small Mouth Bass",
            cnName: "小嘴鲈鱼",
            period: "2014-06-13 ~ 2015-03-31",
            image: "smallmouthbass.png",
            catchLimit: "6条(大嘴小嘴鲈鱼合计)",
            lengthLimit: "无"
        },
        {
            name: "Striped Bass",
            cnName: "银花鲈鱼（条纹鲈）",
            period: "2014-04-01 ~ 2015-03-31",
            image: "stripedbass.png",
            catchLimit: "禁止",
            lengthLimit: "不适用"
        },
        {
            name: "American Shad",
            cnName: "美洲西鲱（白鱼）",
            period: "2014-04-01 ~ 2015-03-31",
            image: "americanshad.png",
            catchLimit: "5条",
            lengthLimit: "无"
        }
        
    ];
})();


