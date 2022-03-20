import React from "react";
import { useState } from "react";
import "./App.css";
import Output from "../output/output";
const qrcode = require("wifi-qr-code-generator");

function App() {
  const [ssid, setSSID] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenSSID, sethiddenSSID] = useState("");
  const [encryption, setEncryption] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    qrcode
      .generateWifiQRCode({
        ssid: `${ssid}`,
        password: `${password}`,
        encryption: `${encryption}`,
        hiddenSSID: `${hiddenSSID}`,
        outputFormat: { type: "image/png" },
      })
      .then((data) => setQrCode(data))
      .then(clearState);
  };
  const clearState = () => {
    setSSID('')
    setEncryption('')
    setPassword('')
    sethiddenSSID('')
} 

  return (
    <div className="overall-app">
      <div className="app">
        <form onSubmit={handleSubmit} className="app-form">
          <span className="title">Wifi QR Code Generator</span>
          <input
            className="input-text"
            type="text"
            name="ssid"
            value={ssid}
            placeholder="Enter SSID"
            onChange={(e) => {
              setSSID(e.target.value);
            }}
            required
          />

          <input
            className="input-text"
            type="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <label>Encryption Rule</label>

          <label>
            <input
              type="radio"
              name="encryption"
              value="WPA"
              checked={encryption === "WPA"}
              onChange={(e) => {
                setEncryption(e.target.value);
              }}
              required
            />
            WPA
          </label>

          <label>
            <input
              type="radio"
              name="encryption"
              value="WPA2"
              checked={encryption === "WPA2"}
              onChange={(e) => {
                setEncryption(e.target.value);
              }}
              required
            />
            WPA2
          </label>

          <label>hidden SSID</label>

          <label>
            <input
              type="radio"
              name="hiddenSSID"
              value="true"
              checked={hiddenSSID === "true"}
              onChange={(e) => {
                sethiddenSSID(e.target.value);
              }}
              required
            />
            true
          </label>

          <label>
            <input
              type="radio"
              name="hiddenSSID"
              value="false"
              checked={hiddenSSID === "false"}
              onChange={(e) => {
                sethiddenSSID(e.target.value);
              }}
              required
            />
            false
          </label>

          <input type="submit" value="Generate" className="btn" />
        </form>

       
        
          
          {qrCode ? 
            <Output data={qrCode}/>
          : " " }
        </div>
        </div>
  );
}

export default App;
