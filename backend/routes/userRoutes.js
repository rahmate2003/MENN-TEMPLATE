// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

router.get("/profile", authMiddleware, roleMiddleware(["user"]), userController.getUserProfile);
router.put("/profile", authMiddleware, roleMiddleware(["user"]), userController.updateUserProfile);
router.post("/pets", authMiddleware, roleMiddleware(["user"]), userController.addPet);
router.get("/pets", authMiddleware, roleMiddleware(["user"]), userController.getPetsByOwner);
router.put("/pets/:id", authMiddleware, roleMiddleware(["user"]), userController.updatePet);
router.delete("/pets/:id", authMiddleware, roleMiddleware(["user"]), userController.deletePet);
router.post("/bookings", authMiddleware, roleMiddleware(["user"]), userController.createBooking);
router.get("/bookings", authMiddleware, roleMiddleware(["user"]), userController.getBookingsByUser);

module.exports = router;