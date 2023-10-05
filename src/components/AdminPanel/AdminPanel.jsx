import React, { useState } from "react";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [file, setFile] = useState(null);

  const handleFileDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("csvData", file);
    fetch("http://localhost:5000/api/testimonials/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setIsModalOpen(false);
          setFile(null);
        } else {
        }
      })
      .catch((error) => {
        console.error("An error occurred while downloading the file:", error);
      });
  };

  const handleFileDelete = () => {
    fetch("http://localhost:5000/api/testimonials/", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setIsModalOpen(false);
          setFile(null);
        } else {
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the file:", error);
      });
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-draggable" onDrop={handleFileDrop}>
              <h2 className="download-text">Download data</h2>
              {file && (
                <div>
                  <p>Selected file: {file.name}</p>
                  <button onClick={handleFileUpload}>Download</button>
                </div>
              )}
            </div>
            <div className="modal-delete">
              <h2>Delete a file</h2>
              <button onClick={handleFileDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
