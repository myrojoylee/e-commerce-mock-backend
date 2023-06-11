const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// including its associated product data
router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// including its associated product data
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category
  // Category.create(req.body).then((category) =>{
  //   if(req.body.categoryId)
  // });
  // Category.create(req.body)
  //   .then((newCategory) => {
  //     res.json(newCategory);
  //   })
  //   .catch((err) => {
  //     res.json(err);
  //   });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  const categoryData = await Category.delete({
    where: {
      id: req.params.id,
    },
  });
  return res.json(categoryData);
});

module.exports = router;
