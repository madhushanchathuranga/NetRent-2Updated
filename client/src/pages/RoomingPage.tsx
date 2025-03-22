import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  commercialIcon,
  doorIcon,
  filterIcon,
  homeIcon,
  searchGrayIcon,
} from "../assets/icons";
import {
  ro1Img,
  ro2Img,
  ro3Img,
  ro4Img,
  ro5Img,
  ro6Img,
} from "../assets/images";
import RoomingCard from "../components/rooming/RoomingCard";
const RoomingPage = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const roomingData = [
    {
      id: 45645,
      title: "Private room with shared bathroom",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "Rooming",
      provider: "week inc. bills",
      price: 200,
      img: "https://via.placeholder.com/150",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      rooms: 1,
      image: ro1Img,
    },
    {
      id: 646546,
      title: "Private room with shared bathroom",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "Rooming",
      provider: "week inc. bills",
      price: 200,
      img: "https://via.placeholder.com/150",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      rooms: 1,
      image: ro2Img,
    },
    {
      id: 17654464,
      title: "Private room with shared bathroom",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "Rooming",
      provider: "week inc. bills",
      price: 200,
      img: "https://via.placeholder.com/150",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      rooms: 1,
      image: ro3Img,
    },
    {
      id: 1456464,
      title: "Private room with shared bathroom",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "Rooming",
      provider: "week inc. bills",
      price: 200,
      img: "https://via.placeholder.com/150",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      rooms: 1,
      image: ro4Img,
    },
    {
      id: 15646544,
      title: "Private room with shared bathroom",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "Rooming",
      provider: "week inc. bills",
      price: 200,
      img: "https://via.placeholder.com/150",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      rooms: 1,
      image: ro5Img,
    },
    {
      id: 1864646,
      title: "Private room with shared bathroom",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "Rooming",
      provider: "week inc. bills",
      price: 200,
      img: "https://via.placeholder.com/150",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      rooms: 1,
      image: ro6Img,
    },
    {
      id: 169489,
      title: "Private room with shared bathroom",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "Rooming",
      provider: "week inc. bills",
      price: 200,
      img: "https://via.placeholder.com/150",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      rooms: 1,
      image: ro1Img,
    },
    {
      id: 1,
      title: "Private room with shared bathroom",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "Rooming",
      provider: "week inc. bills",
      price: 200,
      img: "https://via.placeholder.com/150",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      rooms: 1,
      image: ro2Img,
    },
  ];

  const [roomingResult, setRoomingResult] = useState(roomingData);

  //const filterRef = useRef<HTMLDivElement>(null)

  const handleSearch = () => {
    const filteredData = roomingData.filter((data) => {
      return (
        data.title.toLowerCase().includes(search.toLowerCase()) ||
        data.location.toLowerCase().includes(search.toLowerCase()) ||
        data.category.toLowerCase().includes(search.toLowerCase())
      );
    });
    setRoomingResult(filteredData);
    console.log(filteredData);
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
              onClick={() => {
                setActiveTab(0);
                navigate("/residential");
              }}
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
        className="w-full h-full flex flex-col py-4 relative gap-7"
      >
        <div className="w-full grid grid-cols-2 gap-6">
          {roomingResult.map((room, index) => (
            <RoomingCard key={index} data={room} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default RoomingPage;
