// /components/monster-list/client/monster-list.js

import { Monsters } from '/collections/monsters-collection';

Template.componentMonsterBlock.onCreated(function() {

    console.log(this.data);

    this.subscribe('componentMonsterBlock_monster', { monsterId: this.data.monsterId });

});

Template.componentMonsterBlock.onRendered(function() {});

Template.componentMonsterBlock.onDestroyed(function() {});

Template.componentMonsterBlock.events({});

Template.componentMonsterBlock.helpers({

    monster() {

        return Monsters.findOne({ _id: this.monsterId });

    }

});