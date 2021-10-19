const express = require('express');
const router = express.Router();
const DroneModel = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  try {
    const drones = await DroneModel.find();
    res.render("drones/list.hbs", { drone: drones });
  } catch (err) {
    res.send("fatal error");
  }
});




router.get('/drones/create', (req, res, next) => {
  try {
    res.render("drones/create-form.hbs");
  } catch (err) {
    res.send("fatal error");
  }
});


router.post("/drones/create", async function (req, res, next) {
  try {
    await DroneModel.create(
      req.body
    );
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});


router.get("/drones/:id([a-z0-9]{24})/edit", async function (req, res, next) {
  try {
    res.render("drones/update-form.hbs", {
      drone: await DroneModel.findById(req.params.id),
    })
  } catch (err) {
    next(err)
  }
});



///ROUTE PROBLEM STARTING FROM NOW???

router.post("/drones/:id([a-z0-9]{24})/edit", async function (req, res, next) {
  try {
    console.log('drone UPDATEEED')
    await DroneModel.findByIdAndUpdate(req.params.id),
      res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});


router.post('/drones/:id([a-z0-9]{24})/delete', (req, res, next) => {
  DroneModel.findByIdAndRemove(req.params.id)
    .then(() => res.redirect("/drones"))
    .catch(next);
});


module.exports = router;
