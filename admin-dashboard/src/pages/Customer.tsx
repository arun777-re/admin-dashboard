import { ReactElement , useState} from 'react';
import AdminSidebar   from '../components/AdminSidebar';
import TableHOC from '../components/TableHOC';
import { Column } from 'react-table';
import { FaTrash } from 'react-icons/fa';


interface DataType {
  avatar:ReactElement;
  name : string;
  gender : string;
  email : string;
  role : string;
  action : ReactElement;
 }

 const columns : Column<DataType>[] = [
       {
      Header:"Avatar",
      accessor:"avatar",
       },
       {
      Header:"Name",
      accessor:"name",
       },
       {
      Header:"Gender",
      accessor:"gender",
       },
       {
      Header:"Email",
      accessor:"email",
       },
       {
      Header:"Role",
      accessor:"role",
       },
       {
      Header:"Action",
      accessor:"action",
       }
 ];
 const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr : DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash/>
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
]

const Customer = () => {


const [data] = useState<DataType[]>(arr)

const Table = TableHOC<DataType>(columns,data,"customer-dashboard-box",
"Customers",true);

  return (
    <div className='adminContainer'>
        <AdminSidebar/>
        <main>
          <Table/>
            </main>
        
        
        </div>
  )
}

export default Customer