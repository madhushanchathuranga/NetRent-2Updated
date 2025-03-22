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

const AgentCard = ({ licenseNumber }) => {
  console.log("🟢 Received licenseNumber prop:", licenseNumber);
  const [agentData, setAgentData] = useState(null);
  const [showPropertyAppraisalModal, setShowPropertyAppraisalModal] =
    useState(false);

  useEffect(() => {
    if (licenseNumber) {
      const apiUrl = `http://localhost:3000/api/agents/${licenseNumber}`;
      console.log("📡 Making API call to:", apiUrl);

      axios
        .get(apiUrl)
        .then((response) => {
          console.log("✅ API Response:", response.data);
          setAgentData(response.data);
        })
        .catch((error) => {
          console.error("❌ Error fetching agent data:", error);
        });
    } else {
      console.warn("⚠️ License number is missing! Skipping API call.");
    }
  }, [licenseNumber]);

  console.log("🔄 Current agentData state:", agentData);

  return (
    <>
      <div className="w-full h-[538px] max-w-[258px] bg-white rounded-[20px] flex flex-col px-5 py-3 gap-1 border-[#F2F2F2] border-[1px]">
        <h2 className="text-[min(3vw,16px)] text-[#2d2d2d]">Featured</h2>
        <div className="w-full flex flex-col h-full items-center gap-2">
          {/* Agent Image */}
          <div className="size-[120px] rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={testUser}
              alt="user"
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

          {/* Hardcoded Property Stats */}
          <div className="w-full flex items-center justify-between px-3 py-2 bg-[#F5F5F5] rounded-md">
            <div className="flex flex-col items-center">
              <img
                src={checkCircleGreenIcon}
                alt="Sold"
                className="w-[20px] h-[20px]"
              />
              <p className="text-[12px] text-[#2d2d2d] font-medium">Sold</p>
              <p className="text-[14px] font-bold">10</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={eyeIcon} alt="Views" className="w-[20px] h-[20px]" />
              <p className="text-[12px] text-[#2d2d2d] font-medium">Views</p>
              <p className="text-[14px] font-bold">200</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={starIcon} alt="Rating" className="w-[20px] h-[20px]" />
              <p className="text-[12px] text-[#2d2d2d] font-medium">Rating</p>
              <p className="text-[14px] font-bold">4.2</p>
            </div>
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
