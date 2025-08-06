import { UserModel } from "../models/user.model.js";

export const getUsers = (req, res) => {
  UserModel.find({})
    .then((users) => {
      res.status(200).json({
        success: true,
        data: users,
        message:
          users.length === 0 ? "No user found" : "Users fetched successfully",
      });
    })
    .catch((err) =>
      res.status(500).json({ success: false, message: "Server Error" })
    );
};

export const getUserById = (req, res) => {
  UserModel.findById({ _id: req.params.id })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "No user found" });
      }
      res.status(200).json({
        success: true,
        data: user,
        message: "User fetched successfully ",
      });
    })
    .catch((err) =>
      res.status(500).json({ success: false, message: "Server error" })
    );
};

export const createUser = (req, res) => {
  const user = req.body;
  UserModel.create(user)
    .then((user) => {
      res
        .status(200)
        .json({ success: true, message: "User created sucessfully" });
    })
    .catch(() =>
      res.send(500).json({ success: false, message: "Server Error" })
    );
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const user = req.body;
  UserModel.findByIdAndUpdate({ _id: id }, user)
    .then((user) => {
      res
        .status(200)
        .json({ success: true, message: "User updated successfully" });
    })
    .catch(() =>
      res.status(500).json({ success: false, message: "Server Error" })
    );
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  UserModel.findByIdAndDelete({ _id: id })
    .then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "No user found to delete" });
      }
      res.status(200).json({
        success: true,
        message: "User deleted successfully ",
      });
    })
    .catch(() =>
      res.status(500).json({ success: false, message: "Server error" })
    );
};
