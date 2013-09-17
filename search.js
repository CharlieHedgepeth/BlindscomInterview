    var app = angular.module("app", []);

    app.factory("items", function() {
        var items = {};

        items.data = [
        {
            image: "images/blinds001.jpg",
            text: "Modern Blinds",
            price: "$123"
        },  
        {
            image: "images/blinds003.jpg",
            text: "Classic Blinds",
            price: "$234"
        }, 
        {
            image: "images/shade001.jpg",
            text: "Light Shade",
            price: "$112"
        },  
        {
            image: "images/blinds002.jpg",
            text: "Light Blinds",
            price: "$288",
        },      
        {
            image: "images/shutter001.jpg",
            text: "2 Lorem ipsum dolor sit amet ipsum dolor",
            price: "£234.56",
            availability: "2 Available until 10th Dec 2013"
        },  
        {
            image: "images/curtain002.jpg",
            text: "Classic Shutter",
            price: "$99"
        }, 
        {
            image: "images/shade003.jpg",
            text: "Hide-it-all Shade",
            price: "$213",
        }, 
        {
            image: "images/shade002.jpg",
            text: "Tiki Shade",
            price: "$78",
        }, 
        {
            image: "images/shutter002.jpg",
            text: "Victorian Shutter",
            price: "$275",
        }, 
        {
            image: "images/curtain001.jpg",
            text: "Victorian Curtain",
            price: "$312",
        }
    ];
        return items;
    });



//to sort
    function itemsCtrl($scope, items) {
        $scope.items = items;
        $scope.sort = {
            column: '',
            descending: false
        };
        $scope.changeSorting = function(column) {

            var sort = $scope.sort;

            if (sort.column == column) {
                sort.descending = !sort.descending;
            } else {
                sort.column = column;
                sort.descending = false;
            }
        };
    }


