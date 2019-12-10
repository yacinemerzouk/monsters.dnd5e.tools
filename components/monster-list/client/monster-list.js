// /components/monster-list/client/monster-list.js

import { Monsters } from '/collections/monsters-collection';

Template.componentMonsterList.onCreated(function() {

    this.subscribe('monsters');

});

Template.componentMonsterList.onRendered(function() {});

Template.componentMonsterList.onDestroyed(function() {});

Template.componentMonsterList.events({

    /**
     * Delete a monster
     * @event click [hook="delete-monster"]
     * @param event DOM event
     * @param templateInstance Blaze template instance
     */
    'click [hook="delete-monster"]': (event, templateInstance) => {

        // Prevent default event behavior
        event.preventDefault();

        if (confirm('Delete monster?')) {

            Meteor.call('deleteMonster', { monsterId: event.target.dataset.monsterId }, function (error, response) {

                if (error) {

                    console.log('Error!', error);

                } else {

                    console.log('Success!', response);

                }

            });

        }

    },

});

Template.componentMonsterList.helpers({

    monsters() {

        return Monsters.find({ userId: Meteor.userId() });

    }

});