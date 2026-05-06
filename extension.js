module.exports = {
    name: 'Example',
    publisher: 'Sample',
    cards: [
        {
            type: 'ExampleCard',
            source: './src/cards/ExampleCard',
            title: 'Example Card',
            displayCardType: 'Example Card',
            description: 'This is an introductory card to the Ellucian Experience SDK',
            pageRoute: {
                route: '/',
                excludeClickSelectors: ['a']
            }
        }
    ],
    page: {
        source: './src/page/router'
    }
};
