import {Suspense, lazy} from 'react';
import './styles/app.scss';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BarCharts from './pages/charts/BarCharts';
import Loader from './components/Loader';
const Dashboard = lazy(()=> import('./pages/dahboard'));
const Products = lazy(()=> import('./pages/Products'));
const Transactions = lazy(()=> import('./pages/Transactions'));
const Customer = lazy(()=> import('./pages/Customer'));
const NewProduct = lazy(()=> import('./pages/management/NewProduct'));
const ProductMngmnt = lazy(()=> import('./pages/management/PrdtManagement'));
const TransactionMngmnt = lazy(()=> import('./pages/management/TrnsctnMngmnt'));
// const  BarCharts = lazy(()=> import('./pages/charts/BarCharts'));
const  PieChart = lazy(()=> import('./pages/charts/PieChart')); 
const  LineChart = lazy(()=> import('./pages/charts/LineChart')); 
const Stopwatch = lazy(()=> import('./pages/apps/Stopwatch'));
const Coupan = lazy(()=> import('./pages/apps/Coupan'));
const Toss = lazy(()=> import('./pages/apps/Toss'));

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>
    
    
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/admin/product' element={<Products/>}/>
      <Route path='/admin/customer' element={<Customer/>}/>
      <Route path='/admin/transaction' element={<Transactions/>}/>
      {/* charts */}
      <Route path='/admin/charts/bar' element={<BarCharts/>} />
      <Route path='/admin/charts/line' element={<LineChart/>} />
      <Route path='/admin/charts/pie' element={<PieChart/>} />
      {/* apps */}
      <Route path='/admin/apps/stopwatch' element={<Stopwatch/>}/>
      <Route path='/admin/apps/coupan' element={<Coupan/>}/>
      <Route path='/admin/apps/toss' element={<Toss/>}/>
      {/* management */}
      <Route path='/admin/product/new' element={<NewProduct/>}/>
      <Route path='/admin/product/:id' element={<ProductMngmnt/>}/>
      <Route path='/admin/transaction/:id' element={<TransactionMngmnt/>}/>
    </Routes>
    
    </Suspense>
    
    </BrowserRouter>
  )
}

export default App