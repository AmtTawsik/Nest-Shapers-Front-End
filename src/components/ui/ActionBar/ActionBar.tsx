type ActionBarProps = {
  title?: string;
  children?: React.ReactElement | React.ReactNode;
};

const ActionBar = ({ title, children }: ActionBarProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <h1>{title}</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionBar;
