// /components/monster-form/client/monster-form.js

import { Monsters } from '../../../collections/monsters-collection';

Template.componentMonsterForm.onCreated(function() {

    if (this.data && this.data.monsterId) {

        this.subscribe('monster', { monsterId: this.data.monsterId });

    }

});

Template.componentMonsterForm.onRendered(function() {});

Template.componentMonsterForm.onDestroyed(function() {});

Template.componentMonsterForm.events({

    /**
     * Add one more ability
     * @event click [hook="add-ability"]
     * @param event DOM event
     * @param templateInstance Blaze template instance
     */
    'click [hook="add-ability"]': (event, templateInstance) => {

        // Prevent default event behavior
        event.preventDefault();

        $(`[hook="ability${event.target.dataset.ability}Container"]`).show();
        $(event.target).hide();

    },

    /**
     * Submit form
     * @event submit #monster-form
     * @param event DOM event
     * @param templateInstance Blaze template instance
     */
    'submit #monster-form': (event, templateInstance) => {

        // Prevent default event behavior
        event.preventDefault();

        const formData = Bureaucrat.getFormData($(event.target));

        console.log(formData);

        Meteor.call('saveMonsterForm', { formData }, function( error, response) {

            if (error) {

                console.log('Error!', error);

            } else {

                console.log('Success!', response);
                Router.go('pageMonsterList');

            }

        })

    },

});

Template.componentMonsterForm.helpers({

    monster() {

        return Monsters.findOne({ _id: this.monsterId });

    }

});