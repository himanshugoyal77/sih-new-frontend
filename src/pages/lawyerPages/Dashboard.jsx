import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import DataTable from "../../components/DataTable";

const Dashboard = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="action">
          <Link to="/">
            <img src="/view.svg" alt="" />
          </Link>
          <div className="delete">
            <img src="/delete.svg" alt="" />
          </div>
        </div>
      );
    },
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "img",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return (
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={params.row.img || "/noavatar.png"}
            alt=""
          />
        );
      },
    },
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 120,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "phone",
      type: "string",
      headerName: "Phone",
      width: 150,
    },
  ];

  const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];

  return (
    <div className="flex flex-col w-full h-screen">
      <div className="max-w-max grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2 mx-auto mt-4">
        <div className="w-40 flex items-center gap-3 py-4 bg-white shadow-sm justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 rounded-full bg-blue-400 p-2 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
          <div className="">
            <p className="text-xs font-extralight text-gray-400">
              Total Clients
            </p>
            <h2 className="font-bold text-xl">2,040</h2>
          </div>
        </div>
        <div className="px-4 flex items-center gap-3 py-4 bg-white shadow-sm justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 rounded-full bg-orange-400 p-2 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>

          <div className="">
            <p className="text-xs font-extralight text-gray-400">
              Total Appointments
            </p>
            <h2 className="font-bold text-xl">2,040</h2>
          </div>
        </div>
        <div className="px-4 flex items-center gap-3 py-4 bg-white shadow-sm justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 rounded-full bg-yellow-400 p-2 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>

          <div className="">
            <p className="text-xs font-extralight text-gray-400">
              Account Reach
            </p>
            <h2 className="font-bold text-xl text-green-500">34+</h2>
          </div>
        </div>
        <div className="px-4 flex items-center gap-3 py-4 bg-white shadow-sm justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="yellow"
            viewBox="0 0 24 24"
            className="w-10 h-10 rounded-full bg-red-400 p-2 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>

          <div className="">
            <p className="text-xs font-extralight text-gray-400">
              Monthly Rating
            </p>
            <h2 className="font-bold text-xl">4.2</h2>
          </div>
        </div>
        <div className="px-4 flex items-center gap-3 py-4 bg-white shadow-sm justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 rounded-full bg-green-400 p-2 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className="">
            <p className="text-xs font-extralight text-gray-400">
              Total Revenue
            </p>
            <h2 className="font-bold text-xl text-yellow-300">₹10,600</h2>
          </div>
        </div>
      </div>

      <div className="flex h-[40%] w-full items-start ">
        <div
          className="h-[90%] w-[38%] rounded-sm border
        shadow-sm
        ml-4 mt-5
       pl-6 pb-7 pt-4 bg-white"
        >
          <h2 className="text-gray-500 text-sm tracking-wider">
            New Clients this Month
          </h2>
          <p className="text-3xl font-thin pt-1">149</p>
          <p className="text-xs text-blue-600 font-semibold">
            +34 since last month
          </p>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 15,
                right: 25,
                left: -10,
                bottom: 60,
              }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="blue" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="pink" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="bg-blue-500" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="blue" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                tickLine={false}
                style={{ fontSize: "10px" }}
              />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="amt"
                stroke="blue"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* /// line chart */}
        <div
          className="h-[90%] w-[25%] rounded-sm border
        shadow-sm
        ml-4 mt-5
       pl-6 pb-7 pt-4 bg-white"
        >
          <h2 className="text-gray-500 text-sm tracking-wider">
            Overall Rating
          </h2>
          <p className="text-3xl font-thin pt-1">4.2</p>
          <p className="text-xs text-blue-600 font-semibold">
            6 new reviews since last month
          </p>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 15,
                right: 25,
                left: -10,
                bottom: 60,
              }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="blue" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="pink" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="bg-blue-500" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="blue" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                tickLine={false}
                style={{ fontSize: "10px" }}
              />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="amt"
                stroke="blue"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* // pie chart */}
        <div
          className="h-[90%] w-[30%] rounded-sm shadow-sm border bg-white
        ml-4 mt-5
       pl-6 pb-7 pt-4 "
        >
          <h2 className="text-gray-500 text-sm tracking-wider">
            New Clients this Month
          </h2>
          <div className="flex w-full h-full">
            <p className="text-3xl font-thin pt-1">149</p>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={data2}
                  cx="45%"
                  cy="60%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/*New Appointments*/}
      <div className="mx-4 mt-5">
        <h1 className="pb-4">New Appointment</h1>
        <DataTable
          slug="users"
          columns={columns}
          rows={[userRows[0], userRows[1]]}
        />
      </div>
    </div>
  );
};

export default Dashboard;
