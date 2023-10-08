import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("csvData", file);
      
      fetch("http://localhost:5000/api/testimonials/", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            setIsModalOpen(false);
            setFile(null);
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            console.log("");
          }
        })
        .catch((error) => {
          console.error("An error occurred while uploading the file:", error);
        });
    }
  };

  const handleFileDelete = () => {
    fetch("http://localhost:5000/api/testimonials/", {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setIsModalOpen(false);
          setFile(null);
          navigate("/");
        } else {
          console.log("");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the file:", error);
      });
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/api/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log(token);
        localStorage.removeItem("token");
        console.log("Logged out successfully");
        navigate("/form");
      } else {
        console.error("An error occurred while logging out");
      }
    } catch (error) {
      console.error("An error occurred while logging out:", error);
    }
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-draggable">
              <h2 className="download-text">Download data</h2>
              <input className='input' type="file" onChange={handleFileSelect} />
              {file && (
                <div className="selected-file">
                  <p>Selected file: {file.name}</p>
                  <button onClick={handleFileUpload}>Upload</button>
                </div>
              )}
            </div>
            <div className="modal-delete">
              <h2>remove all reviews</h2>
              <button onClick={handleFileDelete}>Delete</button>
            </div>
            <div className="modal-logout">
              <h2>Logout</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
