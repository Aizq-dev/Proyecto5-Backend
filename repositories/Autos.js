const seed= require('../seed')

const {Auto} = require('../models/models')
const initialDatabase = async()=>{
    try{
    await Auto.deleteMany()
    await Auto.insertMany(seed.autos).then(
        console.log('Base de datos iniciada con datos de semilla')
    
)}
    catch(error){
        console.log('Error inicializando la base de datos', error)
    }
}



const getAllAutosFromDB = async(filter)=>{
    try {
    

       
        const filterOptions = [];

       
        if (filter.modelo) {
            filterOptions.push({ modelo: { $regex: new RegExp(filter.modelo, 'i') } });
        }
        if (filter.marca) {
            filterOptions.push({ marca: { $regex: new RegExp(filter.marca, 'i') } });
        }


        const autoFilterOptions = filterOptions.length > 0 ? { $or: filterOptions } : {};

   
        const autos = await Auto.find(autoFilterOptions);
        return autos;
    } catch (error) {
        console.error('Error al obtener autos de la base de datos:', error.message);
        throw error; 
    }
};

const getAutoByIdFromDB = async(id)=>{
    const auto = await Auto.findById(id)
    return auto
}

const CreateAutoInDB = async(payload)=>{
    
    const newAuto = new Auto(payload)
    
    return newAuto
}
const updateAutoByIdInDB = async(id,payload)=>{
    console.log(payload)
    const updateAuto = await Auto.findByIdAndUpdate(id, {$set: payload}, {new:true})
    return updateAuto
}
const deleteAutoInDB =async(id)=>{
    await Auto.deleteOne({_id:id})
    return
}
module.exports={initialDatabase,getAllAutosFromDB,getAutoByIdFromDB,CreateAutoInDB,updateAutoByIdInDB,deleteAutoInDB}