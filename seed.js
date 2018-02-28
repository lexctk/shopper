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
        name: 'Blueberry',
        image: 'images/products/blueberry.png',
        price: 2.5,
        priceSuffix: '€ /150g',
        description: 'A small sweet blue-black edible berry which grows in clusters on North American shrubs related to the bilberry.',
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
        name: 'Coconut',
        image: 'images/products/coconut.png',
        price: 0.89,
        priceSuffix: '€',
        description: 'The large oval brown seed of a tropical palm, consisting of a hard woody husk surrounded by fibre, lined with edible white flesh and containing a clear liquid.',
        category: 'Produce'
    },
    {
        name: 'Cranberry',
        image: 'images/products/cranberry.png',
        price: 2.8,
        priceSuffix: '€ /300g',
        description: 'A small red acid berry used in cooking.',
        category: 'Produce'
    },
    {
        name: 'Grape',
        image: 'images/products/grape.png',
        price: 3.9,
        priceSuffix: '€ /kg',
        description: 'A berry (typically green, purple, or black) growing in clusters on a grapevine, eaten as fruit and used in making wine.',
        category: 'Produce'
    },
    {
        name: 'Grapefruit',
        image: 'images/products/grapefruit.png',
        price: 1.33,
        priceSuffix: '€ /kg',
        description: 'The grapefruit is a subtropical citrus tree known for its sour to semi-sweet, somewhat bitter fruit.',
        category: 'Produce'
    },
    {
        name: 'Kiwifruit',
        image: 'images/products/kiwifruit.png',
        price: 1.2,
        priceSuffix: '€ /kg',
        description: 'Kiwifruit or Chinese gooseberry is the edible berries of several species of woody vines in the genus Actinidia.',
        category: 'Produce'
    },
    {
        name: 'Lemon',
        image: 'images/products/lemon.png',
        price: 1.2,
        priceSuffix: '€ /kg',
        description: 'The lemon, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to Asia.',
        category: 'Produce'
    },
    {
        name: 'Lime',
        image: 'images/products/lime.png',
        price: 3.19,
        priceSuffix: '€ /kg',
        description: 'A lime is a hybrid citrus fruit, which is typically round, lime green, 3–6 centimetres in diameter, and contains acidic juice vesicles.',
        category: 'Produce'
    },
    {
        name: 'Mango',
        image: 'images/products/mango.png',
        price: 5.8,
        priceSuffix: '€ /kg',
        description: 'Mangoes are juicy stone fruit from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.',
        category: 'Produce'
    },
    {
        name: 'Olives',
        image: 'images/products/olive.png',
        price: 2.8,
        priceSuffix: '€ /kg',
        description: 'The olive, known by the botanical name Olea europaea, meaning "European olive", is a species of small tree in the family Oleaceae, found in the Mediterranean Basin from Portugal to the Levant, the Arabian Peninsula, and southern Asia as far east as China, as well as the Canary Islands and Réunion.',
        category: 'Produce'
    },
    {
        name: 'Orange',
        image: 'images/products/orange.png',
        price: 1.38,
        priceSuffix: '€ /kg',
        description: 'The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae.',
        category: 'Produce'
    },
    {
        name: 'Peach',
        image: 'images/products/peach.png',
        price: 2.76,
        priceSuffix: '€ /kg',
        description: 'The peach is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Shan mountains, where it was first domesticated and cultivated.',
        category: 'Produce'
    },
    {
        name: 'Pear',
        image: 'images/products/pear.png',
        price: 1.63,
        priceSuffix: '€ /kg',
        description: 'The pear is any of several tree and shrub species of genus Pyrus, in the family Rosaceae.',
        category: 'Produce'
    },
    {
        name: 'Pineapple',
        image: 'images/products/pineapple.png',
        price: 1.74,
        priceSuffix: '€ /kg',
        description: 'The pineapple is a tropical plant with an edible multiple fruit consisting of coalesced berries, also called pineapples, and the most economically significant plant in the Bromeliaceae family.',
        category: 'Produce'
    },
    {
        name: 'Plum',
        image: 'images/products/plum.png',
        price: 1.43,
        priceSuffix: '€ /kg',
        description: 'A plum is a fruit of the subgenus Prunus of the genus Prunus.',
        category: 'Produce'
    },
    {
        name: 'Raspberry',
        image: 'images/products/raspberry.png',
        price: 2.13,
        priceSuffix: '€ /200g',
        description: 'The raspberry is the edible fruit of a multitude of plant species in the genus Rubus of the rose family, most of which are in the subgenus Idaeobatus; the name also applies to these plants themselves.',
        category: 'Produce'
    },
    {
        name: 'Strawberry',
        image: 'images/products/strawberry.png',
        price: 3.89,
        priceSuffix: '€ /kg',
        description: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries.',
        category: 'Produce'
    },
    {
        name: 'Tomato',
        image: 'images/products/tomato.png',
        price: 2.8,
        priceSuffix: '€ /kg',
        description: 'The tomato is the edible, often red, vegetable of the plant Solanum lycopersicum, commonly known as a tomato plant.',
        category: 'Produce'
    },
    {
        name: 'Cucumber',
        image: 'images/products/cucumber.png',
        price: 0.81,
        priceSuffix: '€ /kg',
        description: 'Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae.',
        category: 'Produce'
    },
    {
        name: 'Watermelon',
        image: 'images/products/watermelon.png',
        price: 0.99,
        priceSuffix: '€ /kg',
        description: 'Watermelon is a scrambling and trailing vine in the flowering plant family Cucurbitaceae.',
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