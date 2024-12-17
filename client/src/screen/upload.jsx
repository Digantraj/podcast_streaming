import React, { useState } from "react";

function Upload({ openUpload, showUploadModal }) {
  const [thumbnail, setThumbnail] = useState(null);

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
    }
  };

  return (
    <>
      {showUploadModal && (
        <div className="">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex justify-between mb-4 items-center w-full">
                <h2 className="text-2xl font-bold text-center">
                  Upload Podcast
                </h2>
                <button onClick={openUpload} className=" text-black">
                  X
                </button>
              </div>

              <div className="mb-4 text-center">
                <label
                  htmlFor="thumbnail-upload"
                  className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4"
                >
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt="Thumbnail"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-gray-500">Upload Thumbnail</span>
                  )}
                </label>
                <input
                  type="file"
                  id="thumbnail-upload"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbnailUpload}
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Enter podcast name"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <textarea
                  rows="3"
                  placeholder="Enter podcast description"
                  className="w-full border rounded px-3 py-2"
                ></textarea>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Tags e.g., tech, music, coding"
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <select className="w-full border rounded px-3 py-2">
                  <option selected>Type</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-1">
                  Select Category
                </label>
                <select className="w-full border rounded px-3 py-2">
                  <option value="tech">Technology</option>
                  <option value="music">Music</option>
                  <option value="education">Education</option>
                  <option value="lifestyle">Lifestyle</option>
                  <option value="news">News</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setShowModal(false);
                    console.log("Next clicked!");
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Upload;
