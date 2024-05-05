import React, { useRef, useState , useEffect } from "react";
import { ExcelIcon, DocUploadIcon, SpinnerIcon, DropLogo } from "../assets/icons";
import Papa from 'papaparse';
import DataUploads from "./DataUploads";

function UploadCsv() {
  const fileInputRef = useRef(null);
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleFileUpload = (file) => {
    setSelectedFile(file);
    setLoading(true);

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
        setTimeout(() => {
          setLoading(false);
          setFinished(true);
        }, 1000);
      },
    });
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
    setData([]);
  };

  const handleUploadButtonClick = () => {
    const file = fileInputRef.current.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (finished) {
      document.getElementById('uploadButton').style.opacity = 0.4;
    }
  }, [finished]);

  return (
    <>
      <div className='md:flex items-center pb-5 '>
        <span className='text-black-10 text-2xl font-medium font-figtree leading-8'>Upload Financial Transections</span>
      </div>
      <div className="flex justify-center items-center">
        <div className="box-content h-auto w-full md:w-full p-4 rounded-xl bg-[#F6FFFA]">
          <label
            htmlFor="fileInput"
            className="border-dashed border-2 h-60 text-[#107C41] rounded-xl flex flex-col justify-center items-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept=".csv"
              onChange={handleFileInputChange}
            />
            <ExcelIcon />
            <h1 className="text-center">
              {!loading && selectedFile ? (
                <>
                  <span className="text-blue-10">{selectedFile.name}</span>
                  <p
                    className="text-red-remove cursor-pointer"
                    onClick={handleRemoveFile}
                  >
                    Remove
                  </p>
                </>
              ) : (
                <>
                  {!loading && (
                    <>
                        <div class="flex justify-center items-center m-4">
                          <span class="text-blue-10 mr-4"><DropLogo /></span>
                          <span className="font-semibold">Drag and drop Your Excel file here</span>
                        </div>                   
                    </>
                  )}
                </>
              )}
            </h1>
          </label>
          <div
            id="uploadButton"
            className={`justify-center gap-2 flex items-center rounded-md p-2 mt-3 text-white-10 bg-blue-10 cursor-pointer`}
            onClick={handleUploadButtonClick}
          >
            {!loading ? (
              <>
                <DocUploadIcon />
                Upload
              </>
            ) : (
              <SpinnerIcon />
            )}
          </div>
        </div>
      </div>
      {!loading && <DataUploads data={data} />}
    </>
  );
}

export default UploadCsv;
