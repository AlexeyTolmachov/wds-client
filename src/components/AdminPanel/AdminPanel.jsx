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
    // Создать объект FormData и добавить файл
    const formData = new FormData();
    formData.append("csvData", file);

    fetch("http://localhost:5000/api/testimonials/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Обработка ответа
        if (response.ok) {
          // Файл успешно загружен
          // Закрыть модальное окно или выполнить другие действия
          setIsModalOpen(false);
          setFile(null);
        } else {
          // Обработка ошибки
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка при загрузке файла:", error);
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
          // Обработка ошибки
        }
      })
      .catch((error) => {
        console.error("Произошла ошибка при удалении файла:", error);
      });
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-draggable" onDrop={handleFileDrop}>
              <h2 className="download-text">Загрузить данные</h2>
              {file && (
                <div>
                  <p>Выбранный файл: {file.name}</p>
                  <button onClick={handleFileUpload}>Загрузить</button>
                </div>
              )}
            </div>
            <div className="modal-delete">
              <h2>Удалить файл</h2>
              <button onClick={handleFileDelete}>Удалить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
