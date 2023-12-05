import React, { useState } from 'react';
import axios from 'axios';

function Main() {
  const [ipAddress, setIpAddress] = useState('');
  const [scanResults, setScanResults] = useState([]);

  const handleScan = async () => {
  try {
    const response = await axios.post('http://localhost:3001/scan', { ipAddress });
    const openPorts = response.data.filter(result => result.status === 'open');
    
    if (openPorts.length > 0) {
      setScanResults(openPorts);
    } else {
      setScanResults([{ port: 'Closed', status: 'ports are closed / non valid IP' }]);
    }
  } catch (error) {
    console.error('Error occurred during scan:', error);
  }
};

    return (
      <section class="text-gray-600 body-font">
        <div class="max-w-5xl pt-52 pb-24 mx-auto">
          <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          Scan Open Ports and Protect your Web App          </h1>
          <h2 class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center">
          From checkout to global Maintenance, companies around the world use PortAnalyst to simplify check port vulnerabilities            <br />
          </h2>
          <div className="ml-6 text-center">
          <input
                type="text"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                id="default-search"
                placeholder="Search IP..."
                class="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-white font-semibold hover:border-gray-700 bg-black"
              />{" "}
              <button
                class="inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-blue-500 to-blue-800 px-14 text-md md:mt-0 focus:shadow-outline"
                onClick={handleScan}
                >
                <span class="justify-center">Scan</span>
              </button>
          </div>



          <div class="flex justify-center">

          <ul className="flex flex-wrap gap-6" style={{marginTop: "25px"}}
>
  {scanResults.map((result) => (
    <li key={result.port} className="border border-gray-100 rounded-md shadow p-4 max-w-xs">
      <h3 className="mb-2 text-xl text-blue-400 font-semibold">Port {result.port}</h3>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          <span className='text-white'>{result.status}</span>
        </li>
      </ul>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
          <span className='text-white'>no setup</span>
        </li>
        </ul>
    </li>
  ))}
</ul>
</div>

        </div>

      </section>
    );
  } export default Main;
