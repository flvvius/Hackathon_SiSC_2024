const {
    User: UserDb,
} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const fs = require('fs-extra')


const controller = {
    getAll: async (req, res) => {
        try {
            const users = await UserDb.findAll();
            res.status(200).send(users);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    getUserById: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await UserDb.findByPk(id);
            res.status(200).send(user);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    register: async (req, res) => {
        const payload = {
            name: req.body.name,
            password: req.body.password,
        };

        if (!payload.name || !payload.password) {
            return res.status(400).send("No name / password");
        }

        for (let field in payload) {
            if (payload[field] === undefined || payload[field] === null) return res.status(400).send(`${field} is empty!`);
        }

        const checkUser = await UserDb.findOne({
            where: {
                name: payload.name,
            }
        });

        if (checkUser) return res.status(400).send("name already registered!")

        try {
            payload.password = await bcrypt.hash(payload.password, 10);
            const user = await UserDb.create(payload);
            res.status(200).send(user);
        } catch (err) {
            res.status(500).send(err.message);
        }

    },

    // updateUser: async (req, res) => {
    //     const {userId} = req.params;
    //     const payload = {
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         name: req.body.name,
    //         password: req.body.password,
    //         phone: req.body.phone,
    //         university: req.body.university,
    //         studyYear: req.body.studyYear,
    //     };

    //     try {
    //         const user = await UserDb.findByPk(userId);
    //         if (!user) return res.status(400).send();

    //         const newUser = await user.update(payload)
    //         res.status(200).send(newUser);
    //     } catch (err) {
    //         res.status(500).send(err.message);
    //     }
    // },

    login: async (req, res) => {
        const payload = {
            name: req.body.name,
            password: req.body.password,
        }

        if (!payload.name || !payload.password) {
            return res.status(400).send("No name / password");
        }

        try {
            const user = await UserDb.findOne({
                where: {
                    name: payload.name,
                },
            });

            if (user) {
                const match = await bcrypt.compare(payload.password, user.password);

                if (match) {

                    req.session.user = await jwt.sign(user.get(), "crocaine", {
                        algorithm: 'HS256',
                        expiresIn: '1h',
                    });

                    return res.status(200).send({message: "Login success!", userId: user.id});
                } else {
                    return res.status(400).send("Incorrect name or password!");
                }
            }

            res.status(400).send("Incorrect name or password!");

        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    logout: async (req, res) => {
        req.session = {};
        res.status(200).send("To implement");
    },

    addUser: async (req, res) => {
        const payload = {
            name: req.body.name,
            password: req.body.password,
        }

        try {
            const user = await UserDb.create(payload);
            res.status(200).send(user);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    
};

module.exports = controller;
