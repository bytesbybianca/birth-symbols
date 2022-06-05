const symbols = {
    'byMonth': {
        'january': {
            'month': 'January',
            'birthstone': [
                { 
                    'stone': 'garnet',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Garnet',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'carnation',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Dianthus_caryophyllus',
                },
                { 
                    'flower': 'snowdrop',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Galanthus',
                }
            ]
        },
        'february': {
            'month': 'February',
            'birthstone': [
                { 
                    'stone': 'amethyst',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Amethyst',
                },
            ],
            'birthflower': [
                { 
                    'flower': 'violet',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Viola_(plant)',
                },
                { 
                    'flower': 'iris',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Iris_(plant)',
                }
            ]
        },
        'march': {
            'month': 'March',
            'birthstone': [
                { 
                    'stone': 'aquamarine',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Beryl#Aquamarine_and_maxixe',
                },
                {
                    'stone': 'bloodstone',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Heliotrope_(mineral)',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'daffodil',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Narcissus_(plant)',
                },
                { 
                    'flower': 'jonquil',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Narcissus_jonquilla',
                }
            ]
        },
        'april': {
            'month': 'April',
            'birthstone': [
                { 
                    'stone': 'diamond',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Diamond',
                },
            ],
            'birthflower': [
                { 
                    'flower': 'daisy',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Bellis_perennis',
                },
                { 
                    'flower': 'sweet pea',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Sweet_pea',
                }
            ]
        },
        'may': {
            'month': 'May',
            'birthstone': [
                { 
                    'stone': 'emerald',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Emerald',
                },
            ],
            'birthflower': [
                { 
                    'flower': 'lily of the valley',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Lily_of_the_valley',
                },
                { 
                    'flower': 'hawthorn',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Rhaphiolepis',
                }
            ]
        },
        'june': {
            'month': 'June',
            'birthstone': [
                { 
                    'stone': 'pearl',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Pearl',
                },
                {
                    'stone': 'moonstone',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Moonstone_(gemstone)',
                },
                {
                    'stone': 'alexandrite',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Alexandrite',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'rose',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Rose',
                },
                { 
                    'flower': 'honeysuckle',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Honeysuckle',
                }
            ]
        },
        'july': {
            'month': 'July',
            'birthstone': [
                { 
                    'stone': 'ruby',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Ruby',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'delphinium',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Delphinium',
                },
                { 
                    'flower': 'water lily',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Nymphaeaceae',
                }
            ]
        },
        'august': {
            'month': 'August',
            'birthstone': [
                { 
                    'stone': 'peridot',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Peridot',
                },
                {
                    'stone': 'spinel',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Spinel',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'gladiolus',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Gladiolus',
                },
                { 
                    'flower': 'poppy',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Poppy',
                }
            ]
        },
        'september': {
            'month': 'September',
            'birthstone': [
                { 
                    'stone': 'sapphire',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Sapphire',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'aster',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Aster_(genus)',
                },
                { 
                    'flower': 'morning glory',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Morning_glory',
                }
            ]
        },
        'october': {
            'month': 'October',
            'birthstone': [
                { 
                    'stone': 'opal',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Opal',
                },
                {
                    'stone': 'tourmaline',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Tourmaline',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'marigold',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Tagetes',
                },
                { 
                    'flower': 'cosmos',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Cosmos_(plant)',
                }
            ]
        },
        'november': {
            'month': 'November',
            'birthstone': [
                { 
                    'stone': 'topaz',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Topaz',
                },
                {
                    'stone': 'citrine',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Citrine_quartz',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'chrysanthemum',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Chrysanthemum',
                },
            ]
        },
        'december': {
            'month': 'December',
            'birthstone': [
                { 
                    'stone': 'turquoise',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Turquoise',
                },
                { 
                    'stone': 'zircon',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Zircon',
                },
                {
                    'stone': 'tanzanite',
                    'stone_wiki': 'https://en.wikipedia.org/wiki/Tanzanite',
                }
            ],
            'birthflower': [
                { 
                    'flower': 'holly',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Holly',
                },
                { 
                    'flower': 'narcissus',
                    'flower_wiki': 'https://en.wikipedia.org/wiki/Narcissus_(plant)',
                }
            ]
        },
    }
    // 'lowercaseMonth': {
    //     'month': 'TitleMonthHere',
    //     'birthstone': [
    //         { 
    //             'stone': 'stoneNameHere',
    //             'stone_wiki': 'stoneWikiHere',
    //         },
    //         {
    //             'stone': 'stoneNameHere',
    //             'stone_wiki': 'stoneWikiHere',
    //         }
    //     ],
    //     'birthflower': [
    //         { 
    //             'flower': 'flowerNameHere',
    //             'flower_wiki': 'flowerWikiHere',
    //         },
    //         { 
    //             'flower': 'flowerNameHere',
    //             'flower_wiki': 'flowerWikiHere',
    //         }
    //     ]
    // },
};

exports.symbols = symbols;
