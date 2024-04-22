const {
    Sala: SalaDb
} = require('../models');
// const fs = require('fs-extra')


const controller = {
    
    getAll: async (req, res) => {
        try {
            const sali = await SalaDb.findAll();
            res.status(200).send(sali);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    getSalaById: async (req, res) => {
        const id = req.params.id;
        try {
            const sala = await SalaDb.findByPk(id);
            if (sala) {
                res.status(200).send(sala);
            } else {
                res.status(404).send("Not found");
            }
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    addSala: async (req, res) => {
        const payload = {
            name: req.body.name,
            capacitate: req.body.capacitate,
            titlu_film: req.body.titlu_film,
            gen_film: req.body.gen_film,
            ora_incepere_film: req.body.ora_incepere_film,
            durata_film: req.body.durata_film,
            descriere_film: req.body.descriere_film
        };

        try {
            const sala = await SalaDb.create(payload);
            res.status(200).send(sala);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    
};

module.exports = controller;
