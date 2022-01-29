import React from "react";
import { Table, Space } from 'antd';

export const Students = ({studentsData, onClickEditStudent, onDeleteStudent}) => {
  const columns = [
    {
      title: '#',
      key: 'studentNumber',
      dataIndex: 'studentNumber',
    },
    {
      key: 'firstName',
      title: 'First Name',
      dataIndex: 'firstName',
    },
    {
      key: 'middleName',
      title: 'Middle Name',
      dataIndex: 'middleName',
    },
    {
      key: 'lastName',
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      key: 'cgpa',
      title: 'CGPA',
      dataIndex: 'cgpa',
    },
    {
      title: 'Entry of Date',
      key: 'dateOfEnrollment',
      dataIndex: 'dateOfEnrollment',
    },
    {
      key: 'isInternational',
      title: 'Is International',
      dataIndex: 'isInternational',
    },
    {
      key: 'action',
      title: 'Action',
      render: (text, record) => (
        <Space size="middle">
          <p onClick={() => onClickEditStudent(record)} style={{ cursor: "pointer"}}>Edit</p>
          <p onClick={() => onDeleteStudent(record.key)} style={{ cursor: "pointer"}}>Delete</p>
        </Space>
      ),
    },
  ];

  return (
    <div className="App" style={{ marginTop: '10px' }}>
      <Table columns={columns} dataSource={studentsData}/>
    </div>
  );
}

export default Students;
