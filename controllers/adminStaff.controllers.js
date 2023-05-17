const AdminStaff = require( "../model/adminStaff.model");

//obtener datos de todos el personal administrativo
const getAdminStaff = async (req, res) => {
 try {
  const adminStaff = await AdminStaff.find();
  res.send(adminStaff);
 } catch (error) {
  res.send(error);
 }
};

const getAdminStaffById =  async(req, res) => {
  let id = req.params.id;
 try {
  const adminStaff = await AdminStaff.findById(id);
  res.send(adminStaff);
 } catch (error) {  
 res.status(404).send(error)  ;
 }
};

const editAdminStaff =  async (req, res) => {
  let id = req.params.id;
  const adminEdit = {
    surnameName: req.body.surnameName,
    dateAdmission: req.body.dateAdmission,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    schoolName: req.body.schoolName,
  };
 try {
  const adminStaff = await AdminStaff.findByIdAndUpdate(id, adminEdit);
  res.send({
    adminStaff,
    mensaje: "Administrador editado exitosamente"});
 } catch (error) {
  res.send(error)   
 }
};

const createAdminStaff = async (req, res) => {
    const newAdmin = {
    surnameName: req.body.surnameName,
    dateAdmission: req.body.dateAdmission,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    schoolName: req.body.schoolName,
  };
try {
  const adminStaff = await AdminStaff.create(newAdmin);
  res.status(201).send({
    mensaje: "Administrador creado exitosamente",
    adminStaff: newAdmin
  })
} catch (error) { 
  res.status(404).send(error); 
} 
};

const deleteAdminStaff = async (req, res) => {
  let id = req.params.id;
try {
  const adminStaff = await AdminStaff.findByIdAndDelete(id);
  res.send ({
    mensaje: "Administrador eliminado exitosamente",
    adminStaff: adminStaff
  })
} catch (error) {
  res.send(error)  
}
};

module.exports = {
  getAdminStaff,
  getAdminStaffById,
  editAdminStaff,
  createAdminStaff,
  deleteAdminStaff,
};
