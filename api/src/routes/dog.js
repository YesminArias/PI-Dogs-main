const { Router } = require("express");
// Importar todos los routers;
const { Dog, Temperament } = require("../db");
const { Sequelize } = require("sequelize");
const { default: axios } = require("axios");
const router = Router();
 
router.post("/", async (req, res) => {
  const {
    name,
    height,
    weight,
    life_span,
    temperaments,
    image,
  } = req.body;

  const createDog = await Dog.create({
    name:name,
    height: height,
    weight: weight,
    life_span: life_span,
    image: image,
  });
  const temperamentbd = await Temperament.findAll({//que me encuentre todaslos temperamentos que coincidan 
    where: { name: temperaments },
  });

 await createDog.addTemperament(temperamentbd);// agrego temperaments a a create
  res.send("Raza Creada");
});

module.exports = router;
