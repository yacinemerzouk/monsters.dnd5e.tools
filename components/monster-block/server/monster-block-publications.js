import { Monsters } from '../../../collections/monsters-collection';

Meteor.publish('componentMonsterBlock_monster', function ({ monsterId }) {

    return Monsters.find({ _id: monsterId });

});