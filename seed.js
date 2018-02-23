var mongoose = require ('mongoose');
var Product = require ('./models/product');

//seed data 
var products = [
    {
        name: 'Apple',
        image: 'images/products/apple.png',
        price: 3.8,
        priceSuffix: '€ /kg',
        description: 'The round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.',
        category: 'Produce'
    },
    {
        name: 'Apricot',
        image: 'images/products/apricot.png',
        price: 3.95,
        priceSuffix: '€ /kg',
        description: 'The downy, yellow, sometimes rosy fruit, somewhat resembling a small peach, of the tree Prunus armeniaca.',
        category: 'Produce'
    },
    {
        name: 'Avocado',
        image: 'images/products/avocado.png',
        price: 1.4,
        priceSuffix: '€ /kg',
        description: 'A pear-shaped fruit with a rough leathery skin and smooth, oily edible flesh.',
        category: 'Produce'
    },
    {
        name: 'Bilberry',
        image: 'images/products/bilberry.png',
        price: 4.99,
        priceSuffix: '€ /250g',
        description: 'The sweet, edible fruit of the bilberry used especially in pies and jams.',
        category: 'Produce'
    },
    {
        name: 'Blackberry',
        image: 'images/products/blackberry.png',
        price: 3.5,
        priceSuffix: '€ /150g',
        description: 'An edible soft fruit consisting of a cluster of soft purple-black drupelets.',
        category: 'Produce'
    },
    {
        name: 'Blackcurrant',
        image: 'images/products/blackcurrant.png',
        price: 3.75,
        priceSuffix: '€ /150g',
        description: 'A European perennial currant (Ribes nigrum) bearing aromatic edible black berries that are used especially in flavoring liqueur (such as cassis).',
        category: 'Produce'
    },
    {
        name: 'Cherry',
        image: 'images/products/cherry.png',
        price: 9,
        priceSuffix: '€ /kg',
        description: 'The fruit of any of various trees belonging to the genus Prunus, of the rose family, consisting of a pulpy, globular drupe enclosing a one-seeded smooth stone.',
        category: 'Produce'
    },
    {
        name: 'Blueberry',
        image: 'images/products/blueberry.png',
        price: 2.5,
        priceSuffix: '€ /150g',
        description: 'A small sweet blue-black edible berry which grows in clusters on North American shrubs related to the bilberry.',
        category: 'Produce'
    },
    {
        name: 'Sony WH-1000XM2',
        image: 'images/products/sony-wh-1000xm2.png',
        price: 348,
        priceSuffix: '€',
        description: 'The Sony WH-1000XM2 has some small but important improvements over its predecessor, including better battery life and a lower price tag.',
        category: 'Audio'
    },
    {
        name: 'Highlighters',
        image: 'images/products/highlighters.png',
        price: 6.99,
        priceSuffix: '€',
        description: 'Thornton\'s Office Supplies Twist-Retractable Bible Gel Highlighters, Pack of 12 (Assorted)',
        category: 'Office'
    },
    {
        name: 'Markers',
        image: 'images/products/markers.png',
        price: 13.03,
        priceSuffix: '€',
        description: 'Prismacolor Premier Illustration Brush Tip Art Markers, Assorted Colors, 8-Count',
        category: 'Office'
    }   
];

function seedDB () {
    //Empty out all titles
    Product.remove({}, function (error) {
        if (error) {
            console.log ('Couldn\'t empty database' + error);
        } else {
            console.log ('Database emptied');
            //Add a few movies
            products.forEach(function (product){
                Product.create(product, function (error, product) {
                    if (error) {
                        console.log (error);
                    } else {
                        console.log ('Added product');
                    }
                })
            });            
        }
    });
}

module.exports = seedDB;