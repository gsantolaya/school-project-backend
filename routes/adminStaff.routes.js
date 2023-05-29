const Router = require("express");
const { jwtValidation } = require('../middlewares/jwtValidation');


const {
  getAdminStaff,
  getAdminStaffById,
  editAdminStaff,
  createAdminStaff,
  deleteAdminStaff,
} = require("../controllers/adminStaff.controllers");
const router = Router();

router.get("/", jwtValidation, getAdminStaff);

router.get(":id", jwtValidation, getAdminStaffById);

router.put("/:id", jwtValidation, editAdminStaff);

router.post("/", jwtValidation, createAdminStaff);

router.delete("/:id", jwtValidation, deleteAdminStaff);

module.exports = router;
