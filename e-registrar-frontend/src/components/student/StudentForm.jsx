import React from 'react';
import {Modal, Form, Input, Button, DatePicker, Select, InputNumber} from 'antd';

const {Option} = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const buttonItemLayout = {
  wrapperCol: {span: 14, offset: 4},
};

const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select a date!',
    },
  ],
};

const StudentForm = ({student, showStudentForm, setVisible, title, onSave}) => {
  const onFinish = (values) => {
    const data = {
      ...values.student,
      dateOfEnrollment: values.student["dateOfEnrollment"].format('YYYY-MM-DD'),
    }
    onSave(data);
  };

  return (
    <Modal
      centered
      width={600}
      title={title}
      visible={showStudentForm}
      // onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      <Form
        {...layout}
        onFinish={onFinish}
        name="nest-messages"
        layout={"horizontal"}
        validateMessages={validateMessages}>

        <Form.Item
          label="Student Number"
          rules={[{required: true}]}
          name={['student', 'studentNumber']}
          initialValue={student?.studentNumber}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="First Name"
          rules={[{required: true}]}
          name={['student', 'firstName']}
          initialValue={student?.firstName}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Middle Name"
          name={['student', 'middleName']}
          initialValue={student?.middleName}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Last Name"
          rules={[{required: true}]}
          name={['student', 'lastName']}
          initialValue={student?.lastName}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Is International"
          name={['student', 'isInternational']}
          initialValue={student?.isInternational}
          rules={[{required: true, message: 'Please international option!'}]}
        >
          <Select placeholder="select international option">
            <Option value="NO">NO</Option>
            <Option value="YES">YES</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="CGPA"
          name={['student', 'cgpa']}
          rules={[{required: true}]}
          initialValue={student?.cgpa}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          {...config}
          label="Date Of Enrollment"
          name={['student', 'dateOfEnrollment']}
        >
          <DatePicker/>
        </Form.Item>

        <Form.Item {...buttonItemLayout}>
          <Button type="primary" htmlType="submit">
            {student.studentId ? "Update" : "Register"}
          </Button>
        </Form.Item>

      </Form>
    </Modal>
  )
}

export default StudentForm;

