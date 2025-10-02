/**
 * GET /
 * Retrieves all comments from the database.
 *
 * @route GET /api/comments
 * @returns {Array<Object>} 200 - An array of comment objects
 * @returns {Object} 500 - Error message if fetching comments fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    }
    catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
}
);