import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import CounterArrow from './components/CounterArrow';
import CounterHook from './components/CounterHook';
import ParentName from './ParentChild/ParentName';
import ParentComponent from './ParentChild/ParentComponent';
import EmployeeList from './List/EmployeeList';
import ChartItem from './List/ChartItem';
import EmployeeForm from './form/EmployeeForm';
import ChartList from './form/ChartList';
import CartList from './View/CartListRedux'
import CartToolkit from './View/CartToolkit';
import RegionView from './ViewApi/RegionView';
import CountryView from './ViewApi/CountryView';
import LocationView from './ViewApi/LocationView';
import DepartmentView from './ViewApi/DepartmentView';
import DependentView from './ViewApi/DependentView';
import EmployeeView from './ViewApi/EmployeeView';
import JobView from './ViewApi/JobView';
function App() {
  return (
    <div>
      <RegionView/>
      <CountryView/>
      <LocationView/>
      <DepartmentView/>
      <DependentView/>
      <EmployeeView/>
      <JobView/>
    </div>
  );
}

export default App;
