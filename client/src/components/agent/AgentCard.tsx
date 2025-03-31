import { useState, useEffect } from "react";
import axios from "axios";
import PropertyAppraisalModal from "./PropertyAppraisalModal";
import {
  checkCircleGreenIcon,
  eyeIcon,
  fbIcon,
  inIcon,
  starIcon,
  tiktokIcon,
  verifiedIcon,
  ytIcon,
} from "../../assets/icons";
import { testUser } from "../../assets/images"; // Default hardcoded image

// Define the Agent interface
interface Agent {
  _id: string;
  licenseNumber: string;
  name: string;
  email: string;
  phoneNumber: string;
  agentImage: string;
  facebook?: string;
  youtube?: string;
  linkedin?: string;
  tiktok?: string;
  soldProperties: number;
  rentedProperties: number;
  selectedProperties: number;
  rating: number;
  views: number;
}

interface AgentCardProps {
  licenseNumber: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ licenseNumber }) => {
  const [agentData, setAgentData] = useState<Agent | null>(null);
  const [showPropertyAppraisalModal, setShowPropertyAppraisalModal] =
    useState(false);

  useEffect(() => {
    if (licenseNumber) {
      const apiUrl = `http://localhost:3000/api/agents/${licenseNumber}`;

      axios
        .get(apiUrl)
        .then((response) => {
          setAgentData(response.data);
        })
        .catch((error) => {
          console.error("❌ Error fetching agent data:", error);
        });
    } else {
      console.warn("⚠️ License number is missing! Skipping API call.");
    }
  }, [licenseNumber]);

  // Ensure agent image is correctly formatted
  const imageUrl = agentData?.agentImage
    ? `http://localhost:3000${agentData.agentImage}`
    : testUser;

  return (
    <>
      <div className="w-full h-[538px] max-w-[258px] bg-white rounded-[20px] flex flex-col px-5 py-3 gap-1 border-[#F2F2F2] border-[1px]">
        <h2 className="text-[min(3vw,16px)] text-[#2d2d2d]">Featured</h2>
        <div className="w-full flex flex-col h-full items-center gap-2">
          {/* Agent Image */}
          <div className="size-[120px] rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={imageUrl || testUser}
              alt="Agent"
              className="w-full h-full object-cover"
            />
          </div>

          {/* License Number */}
          <div className="w-fit min-w-[156px] flex items-center h-[24px] border-[#f2f2f2] border-[1px] bg-white rounded-l-full rounded-r-full relative">
            <h2 className="text-[min(3vw,12px)] pl-[30px] text-[#2d2d2d] font-medium pr-2">
              License No: {agentData?.licenseNumber || "N/A"}
            </h2>
            <img
              src={verifiedIcon}
              alt="verified"
              className="w-[30px] h-[30px] absolute -left-2"
            />
          </div>

          {/* Agent Info */}
          <div className="fllex flex-col gap-1 items-center">
            <h2 className="text-[min(3vw,24px)] text-[#2d2d2d] font-bold text-center">
              {agentData?.name || "Loading..."}
            </h2>
            <p className="text-[min(3vw,14px)] text-[#2d2d2d] font-medium text-center">
              {agentData?.phoneNumber
                ? `${agentData.phoneNumber.slice(
                    0,
                    3
                  )} ${agentData.phoneNumber.slice(3, 6)} ****`
                : "N/A"}
            </p>
            <p className="text-[min(3vw,14px)] text-[#2d2d2d] font-medium text-center">
              {agentData?.email || "N/A"}
            </p>
          </div>

          {/* Social Media Links */}
          <div className="w-full flex flex-row items-center justify-center gap-2">
            <a href={agentData?.facebook} target="_blank" rel="noreferrer">
              <img src={fbIcon} alt="facebook" className="w-[16px] h-[16px]" />
            </a>
            <a
              href={agentData?.youtube}
              target="_blank"
              rel="noreferrer"
              className="size-[16px] bg-black flex items-center justify-center rounded-full"
            >
              <img src={ytIcon} alt="youtube" className="w-[9px] h-[6px]" />
            </a>
            <a href={agentData?.linkedin} target="_blank" rel="noreferrer">
              <img src={inIcon} alt="linkedin" className="w-[16px] h-[16px]" />
            </a>
            <a
              href={agentData?.tiktok}
              target="_blank"
              rel="noreferrer"
              className="size-[16px] bg-black flex items-center justify-center rounded-full"
            >
              <img src={tiktokIcon} alt="tiktok" className="w-[9px] h-[10px]" />
            </a>
          </div>

          <div className="w-full max-w-[176px] flex flex-row gap-7 justify-center items-center p-3 border-[1px] border-[#c0b8b8] rounded-[11px]">
            <div className="flex flex-col leading-5">
              <h2 className="text-[min(3vw,24px)] text-[#2d2d2d] font-bold">
                {agentData?.soldProperties
                  ? agentData.soldProperties > 9 &&
                    agentData.soldProperties <= 100
                    ? `${Math.floor(agentData.soldProperties / 10) * 10}+`
                    : agentData.soldProperties > 100 &&
                      agentData.soldProperties <= 1000
                    ? `${Math.floor(agentData.soldProperties / 100) * 100}+`
                    : agentData.soldProperties > 1000
                    ? `${Math.floor(agentData.soldProperties / 1000) * 1000}+`
                    : agentData.soldProperties
                  : "0"}
              </h2>
              <div className="flex flex-row gap-1 items-center">
                <img
                  src={checkCircleGreenIcon}
                  alt="check"
                  className="w-[12px] h-[12px]"
                />
                <p className="text-[min(3vw,12px)] text-black font-medium">
                  Sold
                </p>
              </div>
            </div>

            <div className="flex flex-col leading-5">
              <h2 className="text-[min(3vw,24px)] text-[#2d2d2d] font-bold">
                {agentData?.rentedProperties
                  ? agentData.rentedProperties > 9 &&
                    agentData.rentedProperties <= 100
                    ? `${Math.floor(agentData.rentedProperties / 10) * 10}+`
                    : agentData.rentedProperties > 100 &&
                      agentData.rentedProperties <= 1000
                    ? `${Math.floor(agentData.rentedProperties / 100) * 100}+`
                    : agentData.rentedProperties > 1000
                    ? `${Math.floor(agentData.rentedProperties / 1000) * 1000}+`
                    : agentData.rentedProperties
                  : "0"}
              </h2>
              <div className="flex flex-row gap-1 items-center">
                <div className="flex flex-row items-center justify-center size-[12px] rounded-full bg-[#4BAE4F]">
                  <img src={eyeIcon} alt="check" className="w-[8px] h-[8px]" />
                </div>
                <p className="text-[min(3vw,12px)] text-black font-medium">
                  Rented
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-[232px] flex flex-row gap-4 justify-center items-center p-3 border-[1px] border-[#c0b8b8] rounded-[11px]">
            <div className="flex flex-col leading-5">
              <h2 className="text-[min(3vw,24px)] text-[#2d2d2d] font-bold">
                {agentData?.selectedProperties
                  ? agentData.selectedProperties > 9 &&
                    agentData.selectedProperties <= 100
                    ? `${Math.floor(agentData.selectedProperties / 10) * 10}+`
                    : agentData.selectedProperties > 100 &&
                      agentData.selectedProperties <= 1000
                    ? `${Math.floor(agentData.selectedProperties / 100) * 100}+`
                    : agentData.selectedProperties > 1000
                    ? `${
                        Math.floor(agentData.selectedProperties / 1000) * 1000
                      }+`
                    : agentData.selectedProperties
                  : "0"}
              </h2>
              <div className="flex flex-row gap-1 items-center">
                <img
                  src={checkCircleGreenIcon}
                  alt="check"
                  className="w-[12px] h-[12px]"
                />
                <p className="text-[min(3vw,12px)] text-black font-medium">
                  Selected
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center leading-5">
              <h2 className="text-[min(3vw,24px)] text-[#2d2d2d] font-bold">
                {agentData?.rating || "0"}
              </h2>
              <div className="flex flex-row gap-[2px]">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <div key={index} className="size-[14px]">
                      <img
                        src={starIcon}
                        alt="star icon"
                        className="w-[14px] h-[14px]"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col leading-5">
              <h2 className="text-[min(3vw,24px)] text-[#2d2d2d] font-bold">
                {agentData?.views
                  ? agentData.views > 9 && agentData.views <= 100
                    ? `${Math.floor(agentData.views / 10) * 10}+`
                    : agentData.views > 100 && agentData.views <= 1000
                    ? `${Math.floor(agentData.views / 100) * 100}+`
                    : agentData.views > 1000
                    ? `${Math.floor(agentData.views / 1000) * 1000}+`
                    : agentData.views
                  : "0"}
              </h2>
              <div className="flex flex-row gap-1 items-center">
                <div className="flex flex-row items-center justify-center size-[12px] rounded-full bg-[#4BAE4F]">
                  <img src={eyeIcon} alt="check" className="w-[8px] h-[8px]" />
                </div>
                <p className="text-[min(3vw,12px)] text-black font-medium">
                  Viewed
                </p>
              </div>
            </div>
          </div>

          <div className="w-[80px] h-[24px] cursor-pointer bg-white text-[10px] text-[#2d2d2d] border-[1px] border-[#C0B8B8] rounded-l-full rounded-r-full flex items-center justify-center">
            More Info
          </div>

          {/* Contact Button */}
          <button
            onClick={() => setShowPropertyAppraisalModal(true)}
            className="w-full text-white text-[12px] font-bold cursor-pointer flex flex-row items-center justify-center bg-[#68BA6B] h-[32px] rounded-l-full rounded-r-full"
          >
            Contact Now
          </button>
        </div>
      </div>

      {/* Property Appraisal Modal */}
      <PropertyAppraisalModal
        show={showPropertyAppraisalModal}
        onClose={() => setShowPropertyAppraisalModal(false)}
      />
    </>
  );
};

export default AgentCard;
