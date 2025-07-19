// src/pages/career/Careers.jsx

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCareers,
  deleteCareer,
} from "../../../redux/actions/careersAction.js";
import { FaSearch, FaTrash, FaUserPlus } from "react-icons/fa";

function Careers() {
  const dispatch = useDispatch();
  const { careers } = useSelector((state) => state.career);
  const [search, setSearch] = useState("");
  const [filteredCareers, setFilteredCareers] = useState([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    dispatch(getCareers());
  }, [dispatch]);

  useEffect(() => {
    if (careers) {
      const sorted = [...careers].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );

      setFilteredCareers(
        sorted.filter(
          (career) =>
            career.name?.toLowerCase().includes(search.toLowerCase()) ||
            career.contact?.email
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            career.contact?.phone
              ?.toLowerCase()
              .includes(search.toLowerCase()) ||
            career.position?.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, careers]);

  const handleDelete = (id) => {
    dispatch(deleteCareer(id)).then(() => {
      dispatch(getCareers());
      setConfirmDeleteId(null);
    });
  };

  return (
    <div className="p-4 mt-10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Career Applications</h1>
          <p className="text-gray-500 text-sm">Manage job applications</p>
        </div>
      </div>

      <div className="mb-4 w-full md:w-1/3 relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name"
          className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Position Applied</th>
              <th className="p-2">Resume</th>
              <th className="p-2">Created At</th> {/* NEW COLUMN */}
              <th className="p-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCareers.length > 0 ? (
              filteredCareers.map((career) => (
                <tr key={career._id} className="border-t border-gray-300">
                  <td className="p-2">{career.name}</td>
                  <td className="p-2">{career.contact.email}</td>
                  <td className="p-2">{career.contact.phone}</td>
                  <td className="p-2">{career.position}</td>
                  <td className="p-2">
                    {career.resumeLink ? (
                      <a
                        href={career.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:underline"
                      >
                        View Resume
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="p-2">
                    {new Date(career.createdAt).toLocaleString()}
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => setConfirmDeleteId(career._id)}
                      className="text-red-600 hover:text-red-800 transition"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No career applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {confirmDeleteId && (
        <div className="fixed inset-0 backdrop-blur-sm bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="font-bold text-lg mb-2">Confirm Delete</h2>
            <p className="mb-4">
              Are you sure you want to delete this application?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Careers;
