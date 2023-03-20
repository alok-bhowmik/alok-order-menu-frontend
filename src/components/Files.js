import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "react-bootstrap-typeahead/css/Typeahead.css";
import inventoryApi from "../api/inventoryApi";
import moment from "moment";
import axios from "axios";
import useFileUpload from "react-use-file-upload";
import { useDropzone } from "react-dropzone";

const Files = (props) => {
  const {
    files,
    fileNames,
    fileTypes,
    totalSize,
    totalSizeInBytes,
    handleDragDropEvent,
    clearAllFiles,
    createFormData,
    setFiles,
    removeFile,
  } = useFileUpload();

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = createFormData();

    try {
      axios.post("https://some-api.com", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
          },
      }) .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    } catch (error) {
      console.error("Failed to submit files.");
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Files
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div css={CSS}>
          <div className="form-container">
            {/* Display the files to be uploaded */}
            <div>
              <ul>
                {fileNames.map((name) => (
                  <li key={name}>
                    <span>{name}</span>

                    <span onClick={() => removeFile(name)}>
                      <i className="fa fa-times" />
                    </span>
                  </li>
                ))}
              </ul>

              {files.length > 0 && (
                <ul>
                  <li>File types found: {fileTypes.join(", ")}</li>
                  <li>Total Size: {totalSize}</li>
                  <li>Total Bytes: {totalSizeInBytes}</li>

                  <li className="clear-all">
                  <Button  variant="secondary" onClick={() => clearAllFiles()}>Clear All</Button>
                  </li>
                </ul>
              )}
            </div>

            {/* Provide a drop zone and an alternative button inside it to upload files. */}
            <div
              onDragEnter={handleDragDropEvent}
              onDragOver={handleDragDropEvent}
              onDrop={(e) => {
                handleDragDropEvent(e);
                setFiles(e, "a");
              }}
            >
              <p>Drag and drop files here</p>

              <Button variant="outline-secondary"  onClick={() => inputRef.current.click()}>
                Or select files to upload
              </Button>

              {/* Hide the crappy looking default HTML input */}
              <input
                ref={inputRef}
                type="file"
                multiple
                style={{ display: "none" }}
                onChange={(e) => {
                  setFiles(e, "a");
                  inputRef.current.value = null;
                }}
              />
            </div>
          </div>

          
        </div>
      </Modal.Body>
      <Modal.Footer>
      <div className="submit">
          <Button variant="success" onClick={handleSubmit}>Submit</Button>
          </div>
        <Button onClick={props.onHide} variant="light">Close</Button>
        
      </Modal.Footer>
    </Modal>
  );
};
export default Files;
