import { Carousel } from "antd";
import TopLawyerCard from "./TopLawyerCard";

const Lawyers = [
  {
    id: 0,
    img: "https://img.freepik.com/premium-photo/indian-young-female-entrepreneur_437792-374.jpg",
    name: "Jessica Anderson",
    rating: 4.8,
    specialization: "Criminal Defense",
    contact: {
      email: "jessica.anderson@example.com",
      phone: "+1 (555) 123-4567",
    },
    office: {
      address: "123 Main Street, Suite 567, Anytown, USA",
    },
    experience: {
      years_practiced: 12,
      law_firm: "Anderson & Associates",
    },
    education: {
      law_school: "Anytown Law School",
      degree: "Juris Doctor (JD)",
    },
    licenses: {
      state: "California, USA",
      bar_number: "123456",
    },
  },
  {
    id: 1,
    img: "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2020/01/11073647/JM5_5413.2e16d0ba.fill-600x440-1.jpg",
    name: "Michael Johnson",
    rating: 4.5,
    specialization: "Family Law",
    contact: {
      email: "michael.johnson@example.com",
      phone: "+1 (555) 987-6543",
    },
    office: {
      address: "456 Oak Street, Suite 789, Smalltown, USA",
    },
    experience: {
      years_practiced: 10,
      law_firm: "Johnson Law Firm",
    },
    education: {
      law_school: "Smalltown Law School",
      degree: "Juris Doctor (JD)",
    },
    licenses: {
      state: "New York, USA",
      bar_number: "789012",
    },
  },
  {
    id: 2,
    img: "https://im.rediff.com/news/2016/nov/04un.jpg?w=670&h=900",
    name: "Emily Smith",
    rating: 4.9,
    specialization: "Real Estate Law",
    contact: {
      email: "emily.smith@example.com",
      phone: "+1 (555) 234-5678",
    },
    office: {
      address: "789 Elm Street, Suite 123, Cityville, USA",
    },
    experience: {
      years_practiced: 8,
      law_firm: "Smith & Associates",
    },
    education: {
      law_school: "Cityville Law School",
      degree: "Juris Doctor (JD)",
    },
    licenses: {
      state: "Texas, USA",
      bar_number: "567890",
    },
  },
];

const TopRated = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel autoplay arrows={true} dots={false} pauseOnFocus={true}>
      <TopLawyerCard lawyer={Lawyers[0]} />
      <TopLawyerCard lawyer={Lawyers[1]} />
      <TopLawyerCard lawyer={Lawyers[2]} />
    </Carousel>
  );
};

export default TopRated;
