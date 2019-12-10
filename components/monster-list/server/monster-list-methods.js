// /components/monster-list/server/monster-list-method.js

import { Monsters } from '../../../collections/monsters-collection';

Meteor.methods({

    deleteMonster({ monsterId }) {

        if (monsterId) {

            Monsters.remove({ _id: monsterId });

        }

        return false;
    }

});