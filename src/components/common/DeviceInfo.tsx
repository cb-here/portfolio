import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  Monitor,
  Battery,
  Wifi,
  Clock,
  Smartphone,
} from "lucide-react";

const DeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    battery: 0,
    charging: false,
    deviceType: "Desktop",
    browser: "",
    os: "",
    screenResolution: "",
    timezone: "",
    networkType: "Unknown",
    time: new Date().toLocaleTimeString(),
  });

  const [loading, setLoading] = useState(true);

  const battery  = navigator;
  console.log("🚀 ~ DeviceInfo ~ battery:", battery)

  useEffect(() => {
    const getDeviceInfo = async () => {
      try {
        // Get battery info
        if ("getBattery" in navigator) {
          const battery = await (navigator as any).getBattery();
          console.log("🚀 ~ getDeviceInfo ~ battery:", battery)
          setDeviceInfo((prev) => ({
            ...prev,
            battery: Math.round(battery.level * 100),
            charging: battery.charging,
          }));

          battery.addEventListener("levelchange", () => {
            setDeviceInfo((prev) => ({
              ...prev,
              battery: Math.round(battery.level * 100),
            }));
          });

          battery.addEventListener("chargingchange", () => {
            setDeviceInfo((prev) => ({
              ...prev,
              charging: battery.charging,
            }));
          });
        }

        // Get device type
        const userAgent = navigator.userAgent.toLowerCase();
        let deviceType = "Desktop";
        if (
          /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)
        ) {
          deviceType = "Tablet";
        } else if (
          /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(
            userAgent
          )
        ) {
          deviceType = "Mobile";
        }

        // Get browser
        let browser = "Unknown";
        if (userAgent.indexOf("chrome") > -1 && userAgent.indexOf("edg") === -1)
          browser = "Chrome";
        else if (
          userAgent.indexOf("safari") > -1 &&
          userAgent.indexOf("chrome") === -1
        )
          browser = "Safari";
        else if (userAgent.indexOf("firefox") > -1) browser = "Firefox";
        else if (userAgent.indexOf("edg") > -1) browser = "Edge";

        // Get OS
        let os = "Unknown";
        if (userAgent.indexOf("win") > -1) os = "Windows";
        else if (userAgent.indexOf("mac") > -1) os = "MacOS";
        else if (userAgent.indexOf("linux") > -1) os = "Linux";
        else if (userAgent.indexOf("android") > -1) os = "Android";
        else if (
          userAgent.indexOf("iphone") > -1 ||
          userAgent.indexOf("ipad") > -1
        )
          os = "iOS";

        // Get screen resolution
        const screenResolution = `${window.screen.width} × ${window.screen.height}`;

        // Get timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // Get network type
        const connection =
          (navigator as any).connection ||
          (navigator as any).mozConnection ||
          (navigator as any).webkitConnection;
        const networkType = connection
          ? connection.effectiveType || "Unknown"
          : "Unknown";

        setDeviceInfo((prev) => ({
          ...prev,
          deviceType,
          browser,
          os,
          screenResolution,
          timezone,
          networkType: networkType.toUpperCase(),
        }));

        setLoading(false);
      } catch (error) {
        console.error("Error getting device info:", error);
        setLoading(false);
      }
    };

    getDeviceInfo();

    // Update time every second
    const timeInterval = setInterval(() => {
      setDeviceInfo((prev) => ({
        ...prev,
        time: new Date().toLocaleTimeString(),
      }));
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const getBatteryColor = (level: number) => {
    if (level > 60) return "#4ade80";
    if (level > 20) return "#fbbf24";
    return "#ef4444";
  };

  if (loading) {
    return (
      <StyledWrapper>
        <div className="device-info">
          <div className="loading">Loading device info...</div>
        </div>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <div className="device-info">
        <div className="info-grid">
          {/* Battery */}
          <div className="info-card">
            <div
              className="icon-wrapper"
              style={{ background: "rgba(74, 222, 128, 0.1)" }}
            >
              <Battery
                className="icon"
                style={{ color: getBatteryColor(deviceInfo.battery) }}
              />
            </div>
            <div className="info-content">
              <span className="label">Battery</span>
              <span className="value">{deviceInfo.battery}%</span>
              <span className="extra">
                {deviceInfo.charging ? "Charging" : "Not charging"}
              </span>
            </div>
          </div>

          {/* Device Type */}
          <div className="info-card">
            <div
              className="icon-wrapper"
              style={{ background: "rgba(96, 165, 250, 0.1)" }}
            >
              {deviceInfo.deviceType === "Mobile" ? (
                <Smartphone className="icon" style={{ color: "#60a5fa" }} />
              ) : (
                <Monitor className="icon" style={{ color: "#60a5fa" }} />
              )}
            </div>
            <div className="info-content">
              <span className="label">Device</span>
              <span className="value">{deviceInfo.deviceType}</span>
              <span className="extra">{deviceInfo.os}</span>
            </div>
          </div>

          {/* Network */}
          <div className="info-card">
            <div
              className="icon-wrapper"
              style={{ background: "rgba(168, 85, 247, 0.1)" }}
            >
              <Wifi className="icon" style={{ color: "#a855f7" }} />
            </div>
            <div className="info-content">
              <span className="label">Network</span>
              <span className="value">{deviceInfo.networkType}</span>
              <span className="extra">{deviceInfo.browser}</span>
            </div>
          </div>

          {/* Time */}
          <div className="info-card">
            <div
              className="icon-wrapper"
              style={{ background: "rgba(251, 146, 60, 0.1)" }}
            >
              <Clock className="icon" style={{ color: "#fb923c" }} />
            </div>
            <div className="info-content">
              <span className="label">Time</span>
              <span className="value">{deviceInfo.time}</span>
              <span className="extra">
                {deviceInfo.timezone.split("/")[1] || deviceInfo.timezone}
              </span>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .device-info {
    background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #3a3a3a;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  }

  .header {
    margin-bottom: 24px;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    margin: 0 0 4px 0;
  }

  .subtitle {
    font-size: 12px;
    color: #858585;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .loading {
    text-align: center;
    color: #858585;
    padding: 40px 20px;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 640px) {
    .info-grid {
      grid-template-columns: 1fr;
    }
  }

  .info-card {
    background: #252525;
    border-radius: 12px;
    padding: 16px;
    display: flex;
    gap: 12px;
    align-items: center;
    transition: all 0.3s ease;
    border: 1px solid transparent;
  }

  .info-card:hover {
    background: #2a2a2a;
    border-color: #3a3a3a;
    transform: translateY(-2px);
  }

  .info-card.full-width {
    grid-column: 1 / -1;
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .icon {
    width: 24px;
    height: 24px;
  }

  .info-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  .label {
    font-size: 11px;
    color: #858585;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .value {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  .extra {
    font-size: 12px;
    color: #a0a0a0;
  }
`;

export default DeviceInfo;
