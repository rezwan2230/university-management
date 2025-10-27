import express from 'express';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidationsSchemas } from './academicDepartment.validation';

const route = express.Router();

route.post(
  '/create-department',
  validateRequest(
    AcademicDepartmentValidationsSchemas.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

route.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);

route.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

route.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidationsSchemas.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateSingleAcademicDepartment,
);

export const AcademicDepartmentRoutes = route;
