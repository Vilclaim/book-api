
const books = require("../models/booksModel");


const getAllbooks = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "task retrieved successfully", data: books });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};


const getbooksById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const books = books.find((books) => books.id === id);
    if (books) {
      res
        .status(200)
        .json({ message: "books retrieved successfully", data: books });
    } else {
      res.status(404).json({ message: "books not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};


const addbooks = async (req, res) => {
  try {
    const newbooks = req.body;
    books.push(newbooks);
    res.status(201).json({ message: "books added successfully", data: books });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};


const updatebooks = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = books.findIndex((books) => books.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...req.body };
      res
        .status(200)
        .json({ message: "books updated successfully", data: books });
    } else {
      res.status(404).json({ message: "books not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};


const deletebooks = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = task.findIndex((books) => books.id === id);
    if (index !== -1) {
      task.splice(index, 1);
      res
        .status(200)
        .json({ message: "books deleted successfully", data: books });
    } else {
      res.status(404).json({ message: "books not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllbooks,     
  getbooksById,
  addbooks,
  updatebooks,
  deletebooks,
};