import { useEffect, useState } from "react";
import {
  commercialIcon,
  doorIcon,
  filterIcon,
  homeIcon,
  searchGrayIcon,
} from "../assets/icons";
import { pr1Img, pr2Img, pr3Img, testUser, testUser2 } from "../assets/images";
import ResidentialCard from "../components/residential/ResidentialCard";
import { r1Img, r2Img, r3Img, r4Img, r5Img, r6Img } from "../assets/images";
import SidePropertyCard from "../components/residential/SidePropertyCard";
const ResidentialPage = () => {
  const [propertyData, setPropertyData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");
  const defaultImages = [
    r1Img,
    r2Img,
    r3Img,
    r4Img,
    r5Img,
    r6Img,
    pr1Img,
    pr2Img,
    pr3Img,
  ];

  const sidePropertyData = [
    {
      name: "Emma Olivia",
      rating: 4.2,
      reviewCount: 15,
      profileImage: testUser2,
      price: 499000,
      verified: true,
      location: "200/42 Queen Street, Brisbane",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      landSize: "350m²",
      propertyImages: [pr2Img, r2Img, r3Img, r4Img, r5Img, r6Img],
    },
    {
      name: "Emma Olivia",
      rating: 4.2,
      reviewCount: 15,
      profileImage: testUser2,
      price: 499000,
      verified: true,
      location: "200/42 Queen Street, Brisbane",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      landSize: "350m²",
      propertyImages: [pr1Img, r2Img, r3Img, r4Img, r5Img, r6Img],
    },
    {
      name: "Emma Olivia",
      rating: 4.2,
      reviewCount: 15,
      profileImage: testUser2,
      price: 499000,
      verified: true,
      location: "200/42 Queen Street, Brisbane",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      landSize: "758m²",
      propertyImages: [pr3Img, r2Img, r3Img, r4Img, r5Img, r6Img],
    },
  ];

  const [resedentialResult, setResedentialResult] = useState(propertyData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/properties");
        const data = await res.json();

        // Inject default propertyImages into each property
        const updatedData = data.map((property) => ({
          ...property,
          propertyImages: defaultImages,
        }));

        setPropertyData(updatedData);
        setResedentialResult(updatedData);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    };

    fetchData();
  }, []);

  //const filterRef = useRef<HTMLDivElement>(null);

  const tabToCategoryMap = {
    0: ["House", "Apartment"],
    1: ["Commercial"],
    2: ["Room", "Shared"],
  };

  const handleSearch = () => {
    const selectedCategories = tabToCategoryMap[activeTab];

    const filteredData = propertyData.filter((data) => {
      return (
        selectedCategories.includes(data.category) &&
        (data.title.toLowerCase().includes(search.toLowerCase()) ||
          data.location.toLowerCase().includes(search.toLowerCase()))
      );
    });

    setResedentialResult(filteredData);
  };

  return (
    <main className="w-full flex flex-col px-5 py-4 text-[#2d2d2d] sm:px-7 gap-[50px] md:px-20 sm:py-6 relative">
      {/* Search Section */}
      <section
        id="search"
        className="flex flex-col items-center justify-center h-[300px] sm:h-[230px] w-full relative"
      >
        <div className="w-full flex flex-col items-center justify-end max-w-[750px] h-full relative">
          <div className="w-full flex flex-row p-2 gap-2 absolute top-0 bg-white shadow-lg drop-shadow-md max-w-[557px] rounded-[20px]">
            {/* Tabs */}
            <div
              onClick={() => setActiveTab(0)}
              className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${
                activeTab === 0
                  ? "to-[#FE8930] from-[#FFB05F]"
                  : "to-[#247ED6] from-[#8CC5F6]"
              } hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}
            >
              <div className="size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center">
                <img
                  src={homeIcon}
                  alt="building icon"
                  className="size-[20px]"
                />
              </div>
              <h2 className="text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5">
                Residential
              </h2>
            </div>

            <div
              onClick={() => setActiveTab(1)}
              className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${
                activeTab === 1
                  ? "to-[#FE8930] from-[#FFB05F]"
                  : "to-[#247ED6] from-[#8CC5F6]"
              } hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}
            >
              <div className="size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center">
                <img
                  src={commercialIcon}
                  alt="building icon"
                  className="size-[20px]"
                />
              </div>
              <h2 className="text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5">
                Commercial
              </h2>
            </div>

            <div
              onClick={() => setActiveTab(2)}
              className={`w-full sm:w-[176px] h-[80px] sm:h-[64px] bg-gradient-to-l gap-3 group cursor-pointer ${
                activeTab === 2
                  ? "to-[#FE8930] from-[#FFB05F]"
                  : "to-[#247ED6] from-[#8CC5F6]"
              } hover:to-[#FE8930] hover:from-[#FFB05F] transition-all duration-300 ease-in-out rounded-[14px] flex flex-col sm:flex-row items-center justify-center`}
            >
              <div className="size-[35px] group-hover:scale-110 transition-all duration-300 ease-in-out rounded-full border-white border-[1px] bg-white/20 flex items-center justify-center">
                <img
                  src={doorIcon}
                  alt="building icon"
                  className="size-[20px]"
                />
              </div>
              <h2 className="text-white text-[min(3vw,17px)] transition-all duration-300 ease-in-out font-bold group-hover:scale-105 group-hover:-translate-y-0.5">
                Rooming
              </h2>
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full h-[190px] border-[1px] border-[#F2F2F2] bg-white shadow-sm rounded-[20px] flex flex-row items-center justify-center">
            <div className="w-full flex flex-col sm:flex-row gap-3 px-7">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                className="w-full flex flex-col sm:flex-row gap-3"
              >
                <div className="w-full h-[36px] border-black/20 border-[1px] rounded-l-full rounded-r-full shadow-sm p-[7px] flex flex-row gap-2">
                  <div className="size-[20px] rounded-full">
                    <img
                      src={searchGrayIcon}
                      alt="Icon"
                      className="size-[20px]"
                    />
                  </div>
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    placeholder="Search suburb, postcode or state"
                    className="w-[calc(100%-28px)] bg-transparent outline-none text-[14px]"
                  />
                </div>

                <button
                  type="submit"
                  className="h-[36px] text-[#757575] text-[14px] cursor-pointer rounded-l-full rounded-r-full border-black/20 border-[1px] w-full sm:w-[107px] shadow-sm flex items-center justify-center"
                >
                  Search
                </button>
              </form>

              <div className="h-[36px] flex-row gap-1.5 cursor-pointer text-[#757575] text-[14px] rounded-l-full rounded-r-full border-black/20 border-[1px] w-full sm:w-[107px] shadow-sm flex items-center justify-center">
                <img src={filterIcon} alt="Icon" className="size-[14px]" />
                Filter
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="divider" className="w-full relative">
        <div className="w-full bg-[#DDDDDD] h-[1px] relative z-50" />
      </section>

      <section
        id="result"
        className="w-full h-full flex flex-col py-4 relative"
      >
        <div className="flex flex-col items-center xl:grid xl:grid-cols-3 gap-10 w-full h-full">
          <main className="col-span-2 w-full xl:min-w-[750px] xl:max-w-[1000px] flex flex-col h-full gap-8">
            {resedentialResult.map((data, index) => (
              <ResidentialCard key={index} data={data} />
            ))}
          </main>

          {/* Sticky Aside */}
          <aside className="self-start gap-4 sticky top-[4px] w-full sm:h-fit col-span-1 flex flex-col items-center lg:items-start">
            <div className="w-full bg-white h-full rounded-[24px] p-4 flex flex-col gap-4">
              {sidePropertyData.map((data, index) => (
                <SidePropertyCard key={index} data={data} />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ResidentialPage;
