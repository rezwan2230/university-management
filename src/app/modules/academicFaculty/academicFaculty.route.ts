import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { AcademicFacultyControllers } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const route = express.Router();

route.post(
  '/create-faculty',
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.createAcademicFaculty,
);

route.get('/', AcademicFacultyControllers.getAllAcademicFaculties);

route.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);

route.patch(
  '/:facultyId',
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControllers.updateSingleAcademicFaculty,
);

export const AcademicFacultyRoutes = route;
