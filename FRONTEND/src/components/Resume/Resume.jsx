import { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function Resume() {
  const [fileUrl] = useState('/CV.pdf');
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="bg-gray-500 min-h-screen flex flex-col items-center">
      <div className="pt-10">
        {/* Add any additional top padding content here */}
      </div>
      <div className="text-center mt-10">
        <h1 className="text-4xl text-white">
          Resume
        </h1>
        <a 
          href={fileUrl} 
          download="CV.pdf"
          className="mt-4 flex items-center justify-center text-white hover:text-blue-300"
        >
          <FiDownload className="mr-2" size={24} />
          Download
        </a>
      </div>
      <div className="mt-10 w-full flex justify-center">
        <div className="w-full max-w-4xl border-2 border-white">
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.13.207/build/pdf.worker.min.js`}>
            <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </div>
      </div>
    </div>
  );
}

export default Resume;
