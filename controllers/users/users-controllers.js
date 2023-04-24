import * as usersDao from './users-dao.js'

// let currentUser = null;

const UsersController = (app) => {
    const findAllUsers = async (req, res) => {
        const users = await usersDao.findAllUsers();
        res.send(users);
    }

    const findUserById = async (req, res) => {
        const id = req.params.id;
        const user = await usersDao.findUserById(id);
        res.send(user);
    }

    const deleteUserById = async (req, res) => {
        const id = req.params.id;
        const status = await usersDao.deleteUser(id);
        res.json(status);
    }

    const createUser = async (req, res) => {
        const user = req.body;
        const status = await usersDao.createUser(user);        
        res.json(status);
    }

    const updateUser = async (req, res) => {
        const id = req.params.id;
        const user = req.body;
        const status = await usersDao.updateUser(id, user);
        res.json(status);
    }

    const login = async (req, res) => {
        const user = req.body;
        const foundUser = await usersDao.findUserByCredentials(user.email, user.password);
        if (foundUser) {
            req.session["currentUser"] = foundUser;
            res.send(foundUser);
        } else {
            res.sendStatus(404);
        }
    }

    const logout = async (req, res) => {
        req.session.destroy();
        res.sendStatus(204);
    }

    const profile = async (req, res) => {
        const currentUser = req.session["currentUser"];
        if (currentUser) {
            res.send(currentUser);
        } else {
            res.sendStatus(404);
        }
    }
    const register = async (req, res) => {
        const user = req.body;
        // const foundUser = users.find(user => username === req.body.username);
        const foundUser = await usersDao.findUserByUsername(user.email);

        if (foundUser) {
            res.sendStatus(409);
        } else {
            const newUser = await usersDao.createUser(user);
            req.session["currentUser"] = newUser;
            res.json(user); 
        }
    }

    app.get('/api/users', findAllUsers);
    // app.get('/api/users/:id', findUserById);
    app.delete('/api/users/:id', deleteUserById);
    app.post('/api/users', createUser);
    app.put('/api/users/:id', updateUser);

    app.post('/api/users/login', login);
    app.post('/api/users/register', register);
    app.get('/api/users/logout', logout);
    app.post('/api/users/profile', profile);
    // app.get('/api/users/profile/update', updateProfile);
}

export default UsersController;