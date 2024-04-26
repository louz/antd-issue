import React from 'react';
import './App.css';
import { User } from './User';
import { Table } from 'antd';
import { ColumnType } from 'antd/es/table';

export const App: React.FC = () => {
  const users: User[] = [
    new User({
      id: '1',
      name: 'user1',
      gender: 'F',
    }),
    new User({
      id: '2',
      name: 'user2',
      gender: 'M',
    }),
  ];

  const columns: ColumnType<User>[] = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        {
          text: '男',
          value: 'M',
        },
        {
          text: '女',
          value: 'F',
        },
      ],
      onFilter: (value, record) => record.gender === value,
      render: (_, record) => {
        console.log({ record });
        return record.genderText;
      },
    },
  ];

  return (
    <div className="App">
      <Table rowKey="id" dataSource={users} columns={columns} />
    </div>
  );
};

export default App;
