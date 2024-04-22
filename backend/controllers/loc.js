const { Loc: LocDb } = require("../models");
// const fs = require('fs-extra')

const controller = {
	getAll: async (req, res) => {
		try {
			const sali = await LocDb.findAll();
			res.status(200).send(sali);
		} catch (err) {
			res.status(500).send(err.message);
		}
	},

	getLocBySala: async (req, res) => {
		const id = req.params.id;
		try {
			const loc = await LocDb.findAll({ where: { id_sala: id } });
			if (loc) {
				res.status(200).send(loc);
			} else {
				res.status(404).send("Not found");
			}
		} catch (err) {
			res.status(500).send(err.message);
		}
	},

	addLoc: async (req, res) => {
		console.log(req.body);
		const payload = {
			id_sala: req.body.id_sala,
			numar_rand: req.body.numar_rand,
			numar_loc: req.body.numar_loc,
			status_loc: req.body.status_loc,
		};

		try {
			const loc = await LocDb.create(payload);
			res.status(200).send(loc);
		} catch (err) {
			res.status(500).send(err.message);
		}
	},
};

module.exports = controller;
