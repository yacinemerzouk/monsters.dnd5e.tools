// /components/monster-form/server/monster-form-publications.js

import { Monsters } from '../../../collections/monsters-collection';

Meteor.publish('monster', function({ monsterId }) {

    return Monsters.find({ _id: monsterId });

});