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
            //error al obtener datos
            message:'Error: ',error,
        })
    }
}
exports.updateUsers = async (req,res) =>{
    

    try{
        const id = req.params.id

        const user = await User.findByPk(id);
        
        if(user){
            const userActualizado = await user.update(req.body)

            res.status(202).json({
                ok:true,
                //act user
                msg:"Usuario actualizado",
                userActualizado
            })
        }else{
            res.status(404).json({
                ok:false,
                //no exist
                msg:"No existe el usuario"
            })
        }
    }catch(error){
        res.status(500).json({
            ok:false,
            //err
            msg:"Error al modificar el usuario"+error,
        })
    }
}

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
            message:'Error Server'
        })
    }
}

exports.deleteUser = async (req,res) =>{
    try{
        const id = req.params.id

        const user = await User.findByPk(id);
        
        if(user){

            await user.destroy(req.body)

            res.status(202).json({
                ok:true,
                //user borrado
                msg:"Usuario borrado",
                
            })
        }else{
            res.status(404).json({
                ok:false,
                //no exist
                msg:"No existe ese usuario"
            })
        }
    }catch(error){
        res.status(500).json({
            ok:false,
            msg:"Error al borrar usuario"+error,
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