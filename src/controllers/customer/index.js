module.exports = {
    async add(req, res) {
        try {
            res.status(201).send('passed');
        } catch (e) {
            res.status(401).send('Error', e.message);
        }
    },
    // get all data
    async get(req, res) {
        try {
            res.status(201).send('passed here');
        } catch (e) {
            res.status(401).send('Error', e.message);
        }
    },
}