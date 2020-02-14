/**
 * Servicio que implementa la funcionalidad de prospectos
 * @author jaimecastrillon@gmail.com
 */

const Database = require('../../app/database');
const Model = Database.import('../models/prospect');
const Service = require('./service');

class ProspectService extends Service{

    constructor() {
        const modelOptions = {
            create: {
                attributes: ["id"]
            },
            one: {
                attributes: ["id", "name", "trade_name", "phone", "email", "address", "id_city", "location", "supplier", "installed_capacity", "monthly_volume", "observations", "active"]
            },
            all: {
                attributes: ["id", "name", "trade_name", "phone", "email", "address", "id_city", "location", "supplier", "installed_capacity", "monthly_volume", "observations", "active"]
            },
        };
        super(Model, modelOptions);
    }

}

module.exports = ProspectService;
