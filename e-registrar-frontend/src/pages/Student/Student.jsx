import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Row, Col, Button, Skeleton, Typography, Input} from 'antd';

import Students from "../../components/student/Students";
import StudentForm from "../../components/student/StudentForm";
import {
  fetchStudentsAsync,
  createStudentAsync,
  deleteStudentAsync,
  updateStudentAsync,
} from "../../store/actions/student";

const {Title} = Typography;

export const StudentPage = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const [searchVal, setSearchVal] = useState("");

  const [studentsData, setStudentsData] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState({});
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [registerNewStudent, setRegisterNewStudent] = useState(false);
  const {isLoading, students} = useSelector((state) => state.student);


  useEffect(() => {
    dispatch(fetchStudentsAsync());
    // eslint-disable-next-line
  }, []);

  const onSearchStudents = (event) => {
    setSearchVal(event.target.value);

    const filteredStudents = students.filter(student =>
      student.middleName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      student.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
      student.lastName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setStudentsInfo(filteredStudents);
  }

  const onClickEditStudent = (data) => {
    setSelectedStudent({
      cgpa: data.cgpa,
      studentId: data.key,
      lastName: data.lastName,
      firstName: data.firstName,
      middleName: data.middleName,
      studentNumber: data.studentNumber,
      isInternational: data.isInternational,
      dateOfEnrollment: data.dateOfEnrollment,
    });
    setShowStudentForm(true);
    setTitle("Edit Student with student number " + data.studentNumber);
  }

  const onRegisterStudent = (studentData) => {
    setShowStudentForm(false);
    setRegisterNewStudent(false);
    dispatch(createStudentAsync(studentData));
  }

  const onUpdateStudent = (studentData) => {
    setShowStudentForm(false);
    dispatch(updateStudentAsync(selectedStudent.studentId, studentData));
  }

  const onDeleteStudent = (studentId) => {
    dispatch(deleteStudentAsync(studentId));
  }

  const setStudentsInfo = (students) => {
    let data = [];
    students.forEach((p) => {
      data.push({
        cgpa: p?.cgpa,
        key: p.studentId,
        lastName: p.lastName,
        firstName: p?.firstName,
        middleName: p.middleName || "",
        studentNumber: p.studentNumber,
        isInternational: p?.isInternational,
        dateOfEnrollment: p?.dateOfEnrollment,
      })
    });
    // sort student alphabetically
    data.sort((a, b) => a.studentNumber.localeCompare(b.studentNumber));
    setStudentsData(data);
  }

  useEffect(() => {
    if (students.length > 0) {
      setStudentsInfo(students);
    }
    // eslint-disable-next-line
  }, [students]);


  return (
    <div className="App" style={{marginTop: '10px'}}>
      <Row>

        <Col span={6}/>
        <Col span={6}>
          <Title level={3}>All Registered Students</Title>
        </Col>
        <Col span={2}/>
        <Col span={6}>
          <Button type="primary" onClick={() => {
            setShowStudentForm(true);
            setRegisterNewStudent(true);
            setTitle("Register New Student");
          }}>
            Register Student
          </Button>
        </Col>
      </Row>
      {
        isLoading ? <Skeleton/> :
          <Row>
            <Col span={20} offset={2} style={{marginTop: '10px', marginBottom: '10px'}}>
              <Input
                size="large"
                value={searchVal}
                placeholder="Search student"
                onChange={(event) => onSearchStudents(event)}
              />
            </Col>
            <Col span={20} offset={2} style={{marginTop: '10px'}}>
              <Students
                studentsData={studentsData}
                onDeleteStudent={onDeleteStudent}
                onClickEditStudent={onClickEditStudent}
              />
            </Col>
          </Row>
      }
      <StudentForm
        title={title}
        onSave={onUpdateStudent}
        student={selectedStudent}
        setVisible={setShowStudentForm}
        showStudentForm={showStudentForm}
      />

      {
        registerNewStudent &&
        <StudentForm
          student={{}}
          title={title}
          onSave={onRegisterStudent}
          setVisible={setShowStudentForm}
          showStudentForm={showStudentForm}
        />
      }
    </div>
  );
}

export default StudentPage;
