const connection = require("../database/connection");

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection("incidents").count();

        const incidentsUser = await connection("incidents").join(
            "ongs",
            "ongs.id",
            "=",
            "incidents.ong_id"
        );

        return response.json(incidentsUser);
    },
};
