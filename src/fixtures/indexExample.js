/**
 * RSuite 是由 Hypers 前端团队开发的，面向企业级后台产品的一套前端解决方案，
 * 并致力于改善前端工程师的开发体验。
 *
 * ☐ 待开发：
 * rsuite-notification  rsuite-switch      rsuite-anchor    rsuite-progress
 *
 * ☑︎ 已完成：
 * rsuite               rsuite-affix       rsuite-slider   rsuite-tree
 * rsuite-uploader      rsuite-echarts     rsuite-picker   rsuite-datepangepicker
 * rsuite-datepicker    rsuite-table       rsuite-theme    rsuite-autocomplete
 * rsuite-clipboard     rsuite-steps
 */

const App = React.createClass({
  render() {
    return (
      <div>
        <Header inverse>
          <div className="page-container">
            <Navbar.Header>
              <Navbar.Brand className="logo">
                RSUITE DEMO
                            </Navbar.Brand>
            </Navbar.Header>
          </div>
        </Header>
        <div className="container">
          <RSTable.Table
            height={800}
            data={tableData}
          >
            <RSTable.Column width={200} fixed>
              <RSTable.HeaderCell>Component</RSTable.HeaderCell>
              <NameCell dataKey="name" />
            </RSTable.Column>

            <RSTable.Column width={200}  >
              <RSTable.HeaderCell>Intro</RSTable.HeaderCell>
              <RSTable.Cell dataKey="intro" />
            </RSTable.Column>
          </RSTable.Table>
        </div>
      </div>

    );
  }
});

export const NameCell = ({ rowData, dataKey, ...props }) => {
  return (
    <RSTable.Cell  {...props}>
      <a target="_blank" href={rowData.url} >
        <i className={rowData.icon}></i>
        {' '}
        <label>{rowData.name}</label>
      </a>
    </RSTable.Cell>
  );
};

ReactDOM.render(<App />, mountNode);
