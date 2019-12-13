const express = require('express');
const router =  express.Router();

router.get('/', (req, res) =>{
    res.render('index.html', {title: 'Choucair Testing'});
    });

    router.get('/aplicar', (req, res) =>{
        res.render('aplicar.html', {title: 'PREPARARSE PARA APLICAR'});
        });
    module.exports = router;