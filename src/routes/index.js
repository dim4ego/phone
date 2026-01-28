const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/department', userController.getDepartment);
router.post('/department', userController.createDepartment);
router.put('/department/:id', userController.updateDepartment);
router.delete('/department/:id', userController.deleteDepartment);

router.get('/organization', userController.getOrganizations);
router.post('/organization', userController.createOrganization);
router.put('/organization/:id', userController.updateOrganization);
router.delete('/organization/:id', userController.deleteOrganization);

module.exports = router;