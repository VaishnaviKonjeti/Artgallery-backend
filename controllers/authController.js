// controllers/authController.js
import userModel from "../models/user.js";

class AuthController {
    static signup = async (req, res) => {
        const { username, password, email, number } = req.body;

        try {
            const newUser = userModel({
                username,
                password,
                email,
                number,
            });

            const savedUser = await newUser.save();

            if (savedUser) {
                return res.status(200).json({ message: "User registered successfully" });
            }
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };

    static login = async (req, res) => {
        const { username, password } = req.body;

        try {
            const user = await userModel.findOne({ username });

            if (!user) {
                return res.status(401).json({ message: "Invalid username or password" });
            }

            // Compare plain text passwords
            if (password !== user.password) {
                return res.status(401).json({ message: "Invalid username or password" });
            }

            return res.status(200).json({ message: "Login successful" });
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    };
}

export default AuthController;
