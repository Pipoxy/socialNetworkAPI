const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  addFriend,
  removeFriend,
  updateUser,
  removeUser,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(removeUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
