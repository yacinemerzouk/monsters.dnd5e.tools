// /components/monster-form/server/monster-form-methods.js

import { Monsters } from '/collections/monsters-collection';

Meteor.methods({

    saveMonsterForm({ formData }) {

        if (formData._id) {

            return Monsters.update({ _id: formData._id }, formData);

        }

        delete formData._id;
        return Monsters.insert( formData );

    }

});
