const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
      attributes: {
        exclude: ["productId", "tagId"],
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body).then((newTag) => {
    res.json(newTag);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  const tagData = await Tag.delete({
    where: {
      id: req.params.id,
    },
  });
  return res.json(tagData);
});

module.exports = router;
