const express = require('express')
const router = express.Router();

const {bollywood,hollywood,food,fitness,home}=require("../controllers/data");

router.get('/bollywood',bollywood)
router.get('/hollywood',hollywood)
router.get('/food',food)
router.get('/fitness',fitness)
router.get('/home',home)


module.exports= router;