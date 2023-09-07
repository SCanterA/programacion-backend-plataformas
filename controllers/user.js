const User = require('../models/user');



exports.getAllUsers = async (req, res)=>{
    try {
        const users = await User.findAll();
        res.status(200).json({
            ok:true,
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            message:'Error al obtener los datos: ',error,
        })
    }
}






















/*exports.getAllUsers = async (req, res)=>{
    
    try {
        const users = await User.findAll();
        res.status(200).json({
            ok:true,
            users
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error Server'
        })
    }
}
*/
exports.createUser = async(req, res)=>{
    try {
        console.log(req.body);
        const {username, password, email} = req.body;

        const nuevoUsuario={
            username,
            password,
            email
        }
        const user = await User.create(nuevoUsuario);

        res.status(201).json({
            ok:true,
            user
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message:'Server Error'
        })
    }
}