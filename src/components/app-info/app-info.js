import './app-info.css';

const AppInfo = ({ employees, increased }) => {
    return (
        <div className="app-info">
            <h1 className="app-info__title">
                Учет сотрудников в компании RDevMR
            </h1>
            <h2 className="app-info__subtitle">
                Общее число сотрудников: {employees}
            </h2>
            <h2 className="app-info__subtitle">
                Премию получат: {increased}
            </h2>
        </div>
    );
};

export default AppInfo;