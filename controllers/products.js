const getAllProduct = async(req,res)=>{
    res.status(200).json({msg:"I am getallproduct"});
}


const getAllProductTesting = async(req,res)=>{
    res.status(200).json({msg:"I am ready to Products Testing"});
}

module.exports = {getAllProduct ,getAllProductTesting}

