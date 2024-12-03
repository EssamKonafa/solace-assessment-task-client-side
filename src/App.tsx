import BasicInfo from "./components/BasicInfo";
import Content from "./components/Content";
import Header from "./components/Header";
import useUserStore from "./store/user";

function App() {
  
  const { userInfo }: any = useUserStore();

const basicInfo = [
    { label: "First Name", value: userInfo?.firstName, name: "firstName" },
    { label: "Father Name", value: userInfo?.fatherName, name: "fatherName" },
    { label: "Grand Father Name", value: userInfo?.grandfatherName, name: "grandfatherName" },
    { label: "Family Name", value: userInfo?.familyName, name: "familyName" },
    { label: "Marital Status", value: userInfo?.maritalStatus?.name, name: "maritalStatus.name" },
    { label: "Dependants", value: userInfo?.dependants, name: "dependants" },
];

  const nationalities = userInfo?.nationalities?.map((nationality: any, index: number) => ({
    label: `Country ${index + 1}`,
    value: nationality?.country?.name,
    name:'nationality.country' 
  }));

  return (
    <div className="flex-1">
      <Header />
      <div className="flex px-[24px] space-x-[24px] mt-[26px] absolute">
        <BasicInfo />
        <div className="flex-1 space-y-[24px]">
          <Content sectionTitle="Basic Information" data={basicInfo} />
          <Content sectionTitle="Nationalities" data={nationalities} />
        </div>
      </div>
    </div>
  );
}

export default App;