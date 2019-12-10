import { Template } from "meteor/templating";

Template.registerHelper('statModifier', function(stat) {

    const modifier = Math.floor((stat - 10) / 2);
    if (stat >= 10) {

        return `+${modifier}`;

    }

    return modifier;

});