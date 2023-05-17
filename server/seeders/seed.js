const db = require('../config/connection');
const { Project, Photography } = require('../models');
const projectSeeds = require('./projectSeeds.json');
const photographySeeds = require('./photographySeeds.json');

db.once('open', async() => {
    try {
        await Project.deleteMany({});
        await Photography.deleteMany({});

        await Photography.create(photographySeeds)
        await Project.create(projectSeeds);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('Seeded project data.')
    process.exit(0);
});