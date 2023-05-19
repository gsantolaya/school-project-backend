const Router = require("express");
const {
  getAdminStaff,
  getAdminStaffById,
  editAdminStaff,
  createAdminStaff,
  deleteAdminStaff,
} = require("../controllers/adminStaff.controllers");
const router = Router();

//reemplazo app por router
router.get("/", getAdminStaff);

router.get(":id", getAdminStaffById);

router.put("/:id", editAdminStaff);

router.post("/", createAdminStaff);

router.delete("/:id", deleteAdminStaff);

module.exports = router;
