import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepartmentServices } from './academicDepartment.service';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Academic Department is created successfully',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'All Academic Department retirved successfully',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(
      departmentId!,
    );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Single Academic Faculty retirved successfully',
    data: result,
  });
});

const updateSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await AcademicDepartmentServices.updateSingleAcademicDepartmentIntoDB(
      departmentId as string,
      req.body,
    );
  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: 'Academic Faculty updated successfully',
    data: result,
  });
});

export const AcademicFacultyControllers = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateSingleAcademicDepartment,
};
