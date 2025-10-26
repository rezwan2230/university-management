import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidations } from './academicSemester.validation';

const route = express.Router();

route.post(
  '/create-academic-semester',
  validateRequest(
    academicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

route.get('/', AcademicSemesterControllers.getAllAcademicSemester);

route.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester,
);

export const AcademicSemesterRoutes = route;
