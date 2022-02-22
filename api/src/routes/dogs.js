const { Router } = require("express");
// Importar todos los routers;
const { Dog, Temperament } = require("../db");
const { Sequelize } = require("sequelize");
const { YOUR_API_KEY } = process.env;
const { default: axios } = require("axios");
const router = Router();

const getBd = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {//
        attributes: [],
      },
    },
  });
};

const getApi = async () => {
  const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
  const apiInfo = await apiUrl.data.map((e) => {
    return {
      id: e.id,
      image: e.image.url,
      name: e.name,
      temperament: e.temperament,
      weight: e.weight,
      height: e.height,
      life_span: e.life_span,
    };
  });
  return apiInfo;
};

const getBreeds = async () => {
  const apiInfo = await getApi();
  const bdInfo = await getBd();
  const allInfo = apiInfo.concat(bdInfo);
  return allInfo;
};

router.get("/", async (req, res) => {
  const { name } = req.query;
  const allBreeds = await getBreeds();
  /* const resApi = await axios.get('https://api.thedogapi.com/v1/breeds').catch();
    const apiUrl =  resApi.data.map(e=> {
        return {
            id:e.id,
            image: e.image.url,
            name: e.name,
           temperament: e.temperament,
           weight: e.weight.metric,
       }
    }); */
  if (!name) {
    res.json(allBreeds);
  }
  const filtrados = allBreeds.filter((e) => {
    const names = e.name.toUpperCase();
    if (names.includes(name.toUpperCase())) return names;
  });
  res.status(200).json(filtrados);
  res.status(400).send("no se encuentra");
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const breeds = await getBreeds();
  if (id) {
    const filtrados = await breeds.filter((e) => e.id == id);
    filtrados.length
      ? res.status(200).json(filtrados)
      : res.status(404).send("Raza no encontrada por ID");
  }
});

module.exports = router;