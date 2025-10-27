import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicFacultyServices } from './academicFaculty.service';

const createAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Academic Faculty is created successfully',
    data: result,
  });
});

const getAllAcademicFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFacultiesFromDB();
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'All Academic Faculties retirved successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(
    semesterId!,
  );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Single Academic Faculty retirved successfully',
    data: result,
  });
});

const updateSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result =
    await AcademicFacultyServices.updateSingleAcademicFacultyIntoDB(
      semesterId as string,
      req.body,
    );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Academic Faculty updated successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateSingleAcademicFaculty,
};
