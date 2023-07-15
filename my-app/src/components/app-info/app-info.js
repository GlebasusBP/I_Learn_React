import './app-info.css';

const AppInfo = ({countEmployeers, increased}) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников</h1>
      <h2>Общее число сотрудников: {countEmployeers}</h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
}

export default AppInfo;