const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// find all products
// with associated category/tag data
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        { model: Category },
        {
          model: Tag,
          through: {
            attributes: ["id", "product_id", "tag_id"],
          },
        },
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single product by its `id`
// including associated category/tag data
router.get("/:id", async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category },
        {
          model: Tag,
          through: {
            attributes: ["id", "product_id", "tag_id"],
          },
        },
      ],
    });

    if (!productData) {
      res.status(400).json({ message: "No product found with that id!" });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create new product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    if (req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return {
          product_id: product.id,
          tag_id,
        };
      });
      const productTagIds = await ProductTag.bulkCreate(productTagIdArr);
      res.status(200).json(productTagIds);
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//update product
router.put("/:id", async (req, res) => {
  //update product data
  try {
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // if tag ids exist
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await Product.Tag.findAll({
        where: {
          product_id: req.params.id,
        },
      });

      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      const updatedProduct = [
        await ProductTag.destroy({
          where: {
            id: productTagsToRemove,
          },
        }),
        await ProductTag.bulkCreate(newProductTags),
      ];
      res.json(updatedProduct);
    } else {
      return res.json(product);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete one product by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: "No product found with that id!" });
      return;
    }
    return res.json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
