// /routes/route-monster-edit.js

import { Router } from 'meteor/iron:router';

/**
 * VIEW MONSTER ROUTE
 */
Router.route(
    '/monster/view/:monsterId',
    {
        // Route name
        name: 'pageMonsterView',
        data() {
            return { params: this.params };
        },

    },
);
