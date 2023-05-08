// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, val) {
    const updatedOne = { ...employee };
    updatedOne[key] = val;
    return updatedOne;
}
// updateEmployeeWithKeyAndValue(employeeSample, "name" , "Changing") not like (employeeSample,name, "Changing")
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, val) {
    employee[key] = val;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const deletedOne = { ...employee };
    delete deletedOne[key];
    return deletedOne;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}