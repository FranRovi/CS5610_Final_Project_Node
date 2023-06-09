import usersModel from './users-model.js';

export const findAllUsers = async () => {
    const users = await usersModel.find();
    console.log(users);
    return users;
};

export const findUserById = async (id) => {
    console.log('findUserById === [1]')
    console.log(id);
    const user = await usersModel.findById(id);
    return user;
};

export const findAllRoleUsers = async () => {
    const users = await usersModel.find({role: "USER"});
    return users;
};

export const findAllAdmins = async () => {
    const users = await usersModel.findOne({role: "ADMIN"});
    return users;
};

export const findUserByUsername = async (username) => {
    const user = await usersModel.findOne({username});
    return user;
};

export const findUserByCredentials = async (email, password) => {
    console.log('findUserByCredentials === [1]')
    console.log(email);
    console.log(password);
    const user = await usersModel.findOne({email, password});
    console.log(user);
    return user;
};

export const createUser = async (user) => {
    const newUser = await usersModel.create(user);
    return newUser;
};

export const updateUser = async (id, user) => {
    console.log('updateUser === [1]')
    console.log(id);
    console.log(user);
    const status = await usersModel.updateOne({ _id: id}, user);
    // console.log(updateStatus);
    console.log(status);
    return status;
};

export const deleteUser = async (id) => {
    const status = await usersModel.deleteOne({_id: id});
    return status;
};