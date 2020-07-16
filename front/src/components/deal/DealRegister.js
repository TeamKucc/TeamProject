import React, { useState, useCallback } from 'react';
import { Checkbox, Select, Input, DatePicker } from 'antd';

const { Option } = Select;

const DealRegister = () => {
  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);

  const [users, setUsers] = useState('');
  const [usersError, setUsersError] = useState(false);

  const [days, setDays] = useState('');
  const [daysError, setDaysError] = useState(false);

  const [ok, setOk] = useState('');
  const [okError, setOkError] = useState(false);

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  const onChangeUsers = useCallback((value) => {
    setUsersError(false);
    setUsers(value);
  }, []);

  const onChangeDays = useCallback((value, dateString) => {
    setDaysError(false);
    setDays(dateString);
  }, []);

  const onOk = useCallback((value) => {
    setOkError(false);
    setOk(value);
  }, []);

  return (
    <div>
      <div>
        <Checkbox name="deal-term" checked={term} onChange={onChangeTerm}>
          톡딜 할인 설정
        </Checkbox>
      </div>
      <div>
        <label htmlFor="deal-users">톡딜 인원 </label>
        <Select
          defaultValue="1명"
          style={{ width: 120 }}
          onChange={onChangeUsers}
        >
          <Option value="1명">1명</Option>
          <Option value="2명">2명</Option>
          <Option value="3명">3명</Option>
          <Option value="4명">4명</Option>
        </Select>
      </div>
      <div>
        <label htmlFor="deal-item">구매수량 1개당 </label>
        <Input prefix="₩" suffix="원" />
      </div>
      <div>
        <label htmlFor="deal-days">진행 기간 설정 </label>
        <DatePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          onChange={onChangeDays}
          onOk={onOk}
        />
      </div>
    </div>
  );
};

export default DealRegister;
