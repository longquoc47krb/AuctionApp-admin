import { Table as AntdTable } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const Table = (props) => {
  const { dataSource, columns } = props;
  return (
    <AntdTable
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
      pagination={{
        pageSize: 5,
      }}
      bordered
    />
  );
};
export default Table;
