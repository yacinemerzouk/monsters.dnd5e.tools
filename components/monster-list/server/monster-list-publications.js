// /components/monster-list/server/monster-list-publications.js

import { Monsters } from '../../../collections/monsters-collection';

Meteor.publish('monsters', function() {

    if (this.userId) {

        return Monsters.find({ userId: this.userId });

    }

    return [];

})