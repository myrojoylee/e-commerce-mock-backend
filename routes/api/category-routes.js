const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // const categoryData = await Category.findAll();
  // return res.json(categoryData);
});

// try {
//   const categoryData = await Category.findAll({
//     include: [{ model: Product }],
//   });
//   res.status(200).json(categoryData);
// } catch (err) {
//   res.status(500).json(err);
// }

// be sure to include its associated Products

// router.get("/:id", (req, res) => {
//   // find one category by its `id` value
//   Category.findByPk(req.params.id).then((categoryData) => {
//     res.json(categoryData);
//   });
//   // be sure to include its associated Products
// });

router.post("/", (req, res) => {
  // create a new category
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.put("/:id", (req, res) => {
//   // update a category by its `id` value
// });

// router.delete("/:id", (req, res) => {
//   // delete a category by its `id` value
// });

module.exports = router;
