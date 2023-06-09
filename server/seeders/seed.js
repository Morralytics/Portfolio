const db = require('../config/connection');
const { Project, Photograph } = require('../models');
const projectSeeds = require('./projectSeeds.json');
const photographSeeds = require('./photographSeeds.json');

db.once('open', async() => {
    try {
        await Project.deleteMany({});
        await Photograph.deleteMany({});

        await Photograph.create(photographSeeds)
        await Project.create(projectSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Seeded portfolio data.')
    process.exit(0);
});