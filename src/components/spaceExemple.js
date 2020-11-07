const causeExemples={
    cause_1: {
        value: "Alimentation",
        archived: false,
        parents: [ ],        
        children: [ ],
        versions:{
            0: {
                value: "Nutriti",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
                },
            1: {
                value: "Nutrition",
                date: '1603984200000',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            2: {
                value: "Alimentation",
                date: '1603984200000',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    cause_2: {
        value: "Energie",
        archived: false,
        parents: [ ],
        children: [ ],
        versions:{
            0: {
                value: "Energie",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    cause_3: {
        value: "Consomation des ressources naturelles",
        archived: false,
        parents: [ ],
        children: [ ],
        versions:{
            0: {
                value: "Consomation des ressources naturelles",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    cause_4: {
        value: "Gestion des dechets",
        archived: false,
        parents: [ ],
        children: [ ],
        versions:{
            0: {
                value: "Gestion des dechets",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    cause_5: {
        value: "Gouvernance et démocratie",
        archived: false,
        parents: [],
        children: [ 'intention 1', 'intention_2'],
        versions:{
            0: {
                value: "Gouvernance",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "Gouvernance et démocratie",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    cause_6: {
        value: "Justice",
        archived: false,
        parents: [ ],
        children: [ ],
        versions:{
            0: {
                value: "Justice",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    cause_7: {
        value: "Conscience et spiritualité",
        archived: false,
        parents: [ ],
        children: [ ],
        versions:{
            0: {
                value: "Conscience et spiritualité",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    cause_8: {
        value: "Economie circulaire",
        archived: false,
        parents: [ ],
        children: [ ],
        versions:{
            0: {
                value: "Economie circulaire",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    
}


const intentionExemples={
    intention_1: {
        value: "intention_1 Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: 'windturbine.jpg',
        parents: [ 'cause_5' ],
        children: [ 'challenge_1', 'challenge_2' ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "intention_1 Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    intention_2: {
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: 'vegetables.jpg',
        parents: [ 'cause_5' ],
        children: [ 'challenge_3' ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "intention_2 Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
}

/*/
const exemple={
    0: 'content1',
    1: 'content2',
    2: 'content3',
}

exemple[Math.max(...new Int32Array(Object.keys(exemple)))] 
*/

const challengeExemples={
    challenge_1: {
        value: "Vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis? ",
        archived: false,
        image: [],
        parents: [ 'intention_1' ],
        children: [ 'solution_1', 'solution_2' ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "challenge_1 Vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis? ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    challenge_2: {
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: [],
        parents: [ 'intention_1' ],
        children: [ ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "challenge_2 Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    challenge_3: {
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: [],
        parents: [ 'intention_2' ],
        children: [ ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "challenge_3 Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
}

const solutionExemples={
    mysolution1_1604222139876: {
        name: 'mysolution1',
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: [],
        parents: [ 'challenge_1' ],
        childrenMonetization: [ 'monetization_1', 'monetization_2' ],
        childrenBM: [ 'businessModel_1', 'businessModel_2' ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    solution_2: {
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: [],
        parents: [ 'challenge_1' ],
        children: [ ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
}

const monetizationExemples={
    monetization_1: {
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: [],
        parents: [ 'solution_1' ],
        children: [ 'businessModel_1', 'businessModel_2' ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    monetization_2: {
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: [],
        parents: [ 'solution_1' ],
        children: [ ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
}

const businessModelExemples={
    businessModel_1: {
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: [],
        parents: [ 'solution_1' ],
        children: [ ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
    businessModel_2: {
        value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
        archived: false,
        image: [],
        parents: [ 'solution_1' ],
        children: [ ],
        likes: '123',
        versions:{
            0: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
            1: {
                value: "Phasellus faucibus volutpat nisi. \n Donec eget tincidunt mauris. Donec elementum nisl id tellus pharetra, vehicula scelerisque orci volutpat. Aliquam eleifend, elit quis posuere placerat, odio nulla hendrerit diam, tristique efficitur velit velit ut felis. Etiam id finibus mi. ",
                date: '1603984209753',
                userPseudo: 'timcoucou',
                userEmail: 'timothee.couchoud@placelibre.org',
                userKey: '38398242538923932824',
            },
        },
    },
}

const transcendance_1604303981511 = {
    key: 'transcendance_1604303981511',
    name: 'Transcendance-Joyaume',
    spaceType: 'module',
    admin:{
        adminUsers:{
            timothee_couchoud_1604217026802: 'true',
            yan_eperon_1604217020000: 'true',
        },
        members:{
            timothee_couchoud_1604217026802: 'true',
            yan_eperon_1604217020000: 'true',
            alexandra_kisscool_1604217029999: 'true'
        },
        archived: false,
        parent:'host_1604261686725',
        adoptedParents: [''], //members of adopted-parent-spaces can edit
        sisterSpace:{
            in:{ // members can see the subspaces of sister-space listed here. To do so the sister must give agreement in her 'out'
                communityX: true,
                communityY: true,
            }, 
            out:{ // members of sister space listed here can see own subspaces. To do so the sister must give agreement in her 'in'
                communityX: true,
            }, 
        },
        creation:{
            date: '1603984209753',
            userPseudo: 'timcoucou',
            userEmail: 'timothee.couchoud@joyaume.org',
            userKey: 'user_1604217026802',
        },
    },
    causes: causeExemples,
    intentions: intentionExemples,
    challenges: challengeExemples,
    solutions: solutionExemples,
    monetization: monetizationExemples,
    businessModel: businessModelExemples,
}



export const spaceExemple ={
    key: 'joyaume_1604261686725',
    name: 'Joyaume',
    spaceType: 'community',
    admin:{
        adminUsers:{
            timothee_couchoud_1604217026802: 'true',
            yan_eperon_1604217020000: 'true',
        },
        members:{
            timothee_couchoud_1604217026802: 'true',
            yan_eperon_1604217020000: 'true',
            alexandra_kisscool_1604217029999: 'true'
        },
        archived: false,
        parent:'host_1604261686725',
        adoptedParents: [''], //members of adopted-parent-spaces can edit
        sisterSpace:{
            in:{ // members can see the subspaces of sister-space listed here. To do so the sister must give agreement in her 'out'
                communityX: true,
                communityY: true,
            }, 
            out:{ // members of sister space listed here can see own subspaces. To do so the sister must give agreement in her 'in'
                communityX: true,
            }, 
        },
        design:{
            logoUrl: '',
            image: '',
            colors:{
                brand: 'put here the color variant...',
                brandGray: 'put here the color variant...',
            },
            fontFamily: 'Ubuntu',
        },
        creation:{
            date: '1603984209753',
            userPseudo: 'timcoucou',
            userEmail: 'timothee.couchoud@joyaume.org',
            userKey: 'user_1604217026802',
        },
    },
    transcendance:transcendance_1604303981511,
    reliance: '',
    chrysalide: '',
    osmose: '',
    concerto: '',
}

export const host_1604261680000 = {
    key: 'host_1604261680000',
    name: 'PlaceLibre',
    spaceType: 'host',
    admin:{
        adminUsers:{
            timothee_couchoud_1604217026802: 'true',
            yan_eperon_1604217020000: 'true',
        },
        members:{
            timothee_couchoud_1604217026802: 'true',
            yan_eperon_1604217020000: 'true',
            alexandra_kisscool_1604217029999: 'true'
        },
        archived: false,
        parent:'root',
        adoptedParents: [''], //members of adopted-parent-spaces can edit
        sisterSpace:{
            in:{ 
            }, 
            out:{ 
            }, 
        },
        design:{
            logoUrl: '',
            image: '',
            colors:{
                brand: {}, //put here the color variant...
                brandGray: {}, //put here the color variant...
            },
            fontFamily: 'Ubuntu',
        },
        creation:{
            date: '1603984209753',
            userPseudo: 'timcoucou',
            userEmail: 'timothee.couchoud@joyaume.org',
            userKey: 'user_1604217026802',
        },
    },
    subspaces:{
        joyaume_1604261686725:spaceExemple,
        communityX_1604303750800: {},
        communityY_1604303750800: {},

    }

}
