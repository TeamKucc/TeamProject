import React from 'react';

const DeleteConfirm = ({ visible, onDelete, onCancel }) => {
	if (!visible) return null
  return (
    <div>
      <h2>제품삭제</h2>
      <p> 제품을 삭제하시겠습니까? </p>
      <div className="buttons">
        <button onClick={onDelete}>삭제</button>
        <button onClick={onCancel}>취소</button>
      </div>
    </div>
  );
};

export default DeleteConfirm;
