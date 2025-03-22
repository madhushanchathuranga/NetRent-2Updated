import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const propertyData = [
    {
      name: "John Smith",
      licenseNo: "4501234",
      rating: 4.2,
      reviewCount: 15,
      profileImage: testUser,
      verified: true,
      title: "Modern Apartment Living in the Heart of Cannon Hill",
      location: "13/61 Ludwick Street, Cannon Hill",
      category: "House",
      description:
        "Positioned on the second level of a contemporary complex, this stylish two-bedroom apartment offers an effortless lifestyle with premium inclusions and exceptional convenience.",
      bedrooms: 2,
      bathrooms: 2,
      garageSpaces: 2,
      landSize: "758m²",
      features: [
        "Built-in wardrobes",
        "Fully fenced",
        "Courtyard",
        "Garage spaces: 2",
      ],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
    {
      name: "Emma Williams",
      licenseNo: "4505678",
      rating: 4.5,
      reviewCount: 20,
      profileImage: testUser,
      verified: true,
      title: "Spacious Family Home with Modern Amenities",
      location: "45/120 Victoria Road, South Brisbane",
      category: "House",
      description:
        "A beautiful family home with ample space, great amenities, and a backyard perfect for outdoor activities.",
      bedrooms: 4,
      bathrooms: 3,
      garageSpaces: 2,
      landSize: "850m²",
      features: [
        "Swimming pool",
        "Built-in wardrobes",
        "Fully fenced",
        "Home theater system",
      ],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
    {
      name: "Michael Brown",
      licenseNo: "4509876",
      rating: 4.0,
      reviewCount: 10,
      profileImage: testUser,
      verified: false,
      title: "Cozy Apartment in the Heart of the City",
      location: "78/21 George Street, Brisbane City",
      category: "Apartment",
      description:
        "A cozy one-bedroom apartment ideal for city living with all the necessary amenities.",
      bedrooms: 1,
      bathrooms: 1,
      garageSpaces: 1,
      landSize: "50m²",
      features: ["Balcony", "Security system", "Air conditioning"],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
    {
      name: "Sophia Johnson",
      licenseNo: "4512345",
      rating: 4.3,
      reviewCount: 18,
      profileImage: testUser,
      verified: true,
      title: "Stylish Penthouse with Stunning Views",
      location: "200/42 Queen Street, Brisbane",
      category: "Penthouse",
      description:
        "Luxury penthouse with breathtaking city views and high-end finishes throughout.",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 2,
      landSize: "350m²",
      features: ["Roof terrace", "Jacuzzi", "Open-plan living"],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
    {
      name: "James Taylor",
      licenseNo: "4523456",
      rating: 4.1,
      reviewCount: 12,
      profileImage: testUser,
      verified: false,
      title: "Beautiful Suburban Home with Large Garden",
      location: "28/56 Ashgrove Avenue, Ashgrove",
      category: "House",
      description:
        "A spacious home in a quiet neighborhood, complete with a large garden and outdoor patio.",
      bedrooms: 3,
      bathrooms: 2,
      garageSpaces: 1,
      landSize: "600m²",
      features: ["Large garden", "Patio", "Built-in wardrobes"],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
    {
      name: "Olivia Martin",
      licenseNo: "4534567",
      rating: 4.4,
      reviewCount: 22,
      profileImage: testUser,
      verified: true,
      title: "Beachfront Apartment with Ocean Views",
      location: "101/15 Beach Road, Surfers Paradise",
      category: "Apartment",
      description:
        "A luxurious beachfront apartment offering panoramic ocean views and stylish interiors.",
      bedrooms: 2,
      bathrooms: 2,
      garageSpaces: 1,
      landSize: "120m²",
      features: ["Beach access", "Balcony with ocean view", "Modern kitchen"],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
    {
      name: "Lucas Williams",
      licenseNo: "4545678",
      rating: 4.6,
      reviewCount: 25,
      profileImage: testUser,
      verified: true,
      title: "Luxurious Family Estate with Multiple Living Spaces",
      location: "30/89 Newstead Drive, Newstead",
      category: "House",
      description:
        "An expansive family estate with a large pool, multiple living spaces, and elegant finishes.",
      bedrooms: 5,
      bathrooms: 4,
      garageSpaces: 3,
      landSize: "1200m²",
      features: ["Swimming pool", "Home office", "Multiple living areas"],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
    {
      name: "Isabella Davis",
      licenseNo: "4556789",
      rating: 4.0,
      reviewCount: 30,
      profileImage: testUser,
      verified: false,
      title: "Charming Cottage with Garden and Orchard",
      location: "65/10 Meadow Road, Paddington",
      category: "Cottage",
      description:
        "A quaint cottage with a lovely garden and orchard, perfect for a peaceful lifestyle.",
      bedrooms: 2,
      bathrooms: 1,
      garageSpaces: 1,
      landSize: "550m²",
      features: ["Garden", "Orchard", "Fireplace"],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
    {
      name: "Ethan Clark",
      licenseNo: "4567890",
      rating: 4.7,
      reviewCount: 40,
      profileImage: testUser,
      verified: true,
      title: "Sleek Urban Apartment in Prime Location",
      location: "2/35 King Street, Fortitude Valley",
      category: "Apartment",
      description:
        "A sleek urban apartment with modern finishes, located in a vibrant area with plenty of amenities.",
      bedrooms: 1,
      bathrooms: 1,
      garageSpaces: 1,
      landSize: "80m²",
      features: ["Modern kitchen", "Balcony", "Air conditioning"],
      propertyImages: [
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
        r1Img,
        r2Img,
        r3Img,
        r4Img,
        r5Img,
        r6Img,
      ],
    },
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

  //const filterRef = useRef<HTMLDivElement>(null);

  const handleSearch = () => {
    const filteredData = propertyData.filter((data) => {
      return (
        data.title.toLowerCase().includes(search.toLowerCase()) ||
        data.location.toLowerCase().includes(search.toLowerCase()) ||
        data.category.toLowerCase().includes(search.toLowerCase())
      );
    });

    setResedentialResult(filteredData);

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
              onClick={() => {
                setActiveTab(1);
                navigate("/commercial");
              }}
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
              onClick={() => {
                setActiveTab(2);
                navigate("/rooming");
              }}
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
