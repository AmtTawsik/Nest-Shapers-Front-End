import { Modal } from 'antd';
import { ReactElement, ReactNode } from 'react';

interface IModal {
  isOpen: boolean;
  closeModal: () => void;
  title: string | ReactNode;
  children: ReactElement;
  handleOk?: () => void;
  showCancelButton?: boolean;
  showOkButton?: boolean;
}

const HCModal = ({
  isOpen,
  closeModal,
  title,
  children,
  handleOk,
  showCancelButton = true,
  showOkButton = true,
}: IModal) => {
  return (
    <Modal
      title={title}
      open={isOpen}
      onOk={handleOk}
      onCancel={closeModal}
      cancelButtonProps={{
        style: {
          display: showCancelButton ? 'inline' : 'none',
          backgroundColor: '#0f766e',
          color: 'white',
        },
      }}
      okButtonProps={{
        style: {
          display: showOkButton ? 'inline' : 'none',
          backgroundColor: '#dc2626',
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default HCModal;
