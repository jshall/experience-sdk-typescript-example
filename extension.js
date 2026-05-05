module.exports = {
    name: 'ExperienceSdkTypescriptExample',
    publisher: 'Sample',
    cards: [{
        type: 'ExperienceSdkTypescriptExampleCard',
        source: './src/cards/ExperienceSdkTypescriptExampleCard',
        title: 'ExperienceSdkTypescriptExample Card',
        displayCardType: 'ExperienceSdkTypescriptExample Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};