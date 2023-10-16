import { Collapse } from 'antd';
const { Panel } = Collapse;

export type ItemProps = {
  key: string;
  label: string;
  children: React.ReactNode | React.ReactElement;
  isTaken?: boolean;
};

type HCCollapseProps = {
  items: ItemProps[];
  onChange?: (el: string | string[] | '') => void;
  defaultActiveKey?: string | string[];
};

const HCCollapse = ({
  items,
  onChange,
  defaultActiveKey = ['1'],
}: HCCollapseProps) => {
  return (
    <Collapse defaultActiveKey={defaultActiveKey} onChange={onChange}>
      {items?.map((item) => {
        return (
          <Panel header={item?.label} key={item?.key}>
            {item?.children}
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default HCCollapse;
