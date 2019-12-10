// /routes/route-monster-edit.js

import { Router } from 'meteor/iron:router';

/**
 * EDIT MONSTER ROUTE
 */
Router.route(
    '/monster/edit/:monsterId',
    {
        // Route name
        name: 'pageMonsterEdit',
        data() {
            return { params: this.params };
        },

    },
);
