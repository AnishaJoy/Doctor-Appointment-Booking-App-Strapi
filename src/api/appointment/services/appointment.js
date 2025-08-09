// 'use strict';

// /**
//  * appointment service
//  */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::appointment.appointment');

'use strict';

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::appointment.appointment', ({ strapi }) => ({
  async delete(entityId, params) {
    console.log('🚀 DELETE CALLED for appointment:', entityId);
    return await super.delete(entityId, params);
  }
}));
