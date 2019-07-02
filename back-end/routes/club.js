const express = require('express');
const router = express.Router();
const Club = require('../models/club');
const bcrypt = require('bcryptjs');



router.get('/club', (req, res) => res.json({ msg: 'club works duuude !' }));

//Club register dude !
router.post('/sign-up', (req, res) => {
    Club.findOne({ email: req.body.email })
        .then(club => {
            if (club) {
                return res.status(400).json({ email: 'Email already exists !!' });
            } else {
                const newClub = new Club({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    institution: req.body.institution,
                    website: req.body.website,
                    phone: req.body.phone
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newClub.password, salt, (err, hash) => {
                        if (err) throw err;
                        newClub.password = hash;
                        newClub.save()
                            .then(club => res.json(club))
                            .catch(err => console.log(err));
                    })
                })
            }
        })
})


// Club login dude !
router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //finding club by email
    Club.findOne({ email })
        .then(Club => {
            //check for club
            if (!Club) {
                return res.status(404).json({ email: 'Club not found' });
            }
            // check password for club
            bcrypt.compare(password, Club.password)
                .then(isMatch => {
                    if (isMatch) {
                        res.json({ msg: 'success login' });
                    } else {
                        return res.status(400).json({ password: 'password is incorret' });
                    }
                });
        });
});



module.exports = router;