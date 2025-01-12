const testimonialSchema = require('../model/testimonialSchema');

//create testimonial
const createtesti = async (req,res)=>{
    try{
        const {name,designation,message,photo} = req.body;
        const newtesti = new testimonialSchema({name,designation,message,photo})
        await newtesti.save();

        req.status(201).json({message:"Testimonial is created",testi:newtesti})
    }catch(error){
        res.status(500).json({message:"Error creating testimonial",error});
    }
};

//get all testimonial
const getalltesti = async (req,res)=>{
    try{
        const testimonial = await testimonialSchema.find();
        res.status(200).json({message:"Testimonials are fetched",testimonial});

    }catch(error){
        res.status(500).json({message:"Error fetching testimonial",error});
    }
}
//get testimonial by id
const gettestiById = async (req,res)=>{
    try{
        const id = req.params.id;
        const testimonial = await testimonialSchema.findById(id);
        if(!testimonial){
            res.status(404).json({message:"Testimonial not found"});
        }
        res.status(200).json({message:"Testimonial is fetched",testimonial});
    }catch(error){
        res.status(500).json({message:"Error fetching testimonial",error});
    }
};
//update testimonial
const updatetesti = async (req,res)=>{
    try{
        const id = req.params.id;
        const {name,designation,message,photo} = req.body;
        const testimonial = await testimonialSchema.findByIdAndUpdate(id,{name,designation,message,photo},{new:true,runValidators:true});
        if(!testimonial){
            res.status(404).json({message:"Testimonial not found"});
        }
        res.status(500).json({message:"testimonial is updated",testi:testimonial})
    }catch(error){
        res.status(500).json({message:"Error updating testimonial",error});
    }
}
//delete testimonial
const deletetesti = async (req,res)=>{
    try{
        const id = req.params.id;
        const deltesti = await testimonialSchema.findByIdAndDelete(id);
        if(!deltesti){
            res.status(404).json({message:"Testimonial not found"});
        }
        res.status(200).json({message:"Testimonial is deleted"});

    }catch(error){
        res.status(500).json({message:"Error deleting testimonial",error});
    }

}
module.exports = {
    createtesti,
    getalltesti,
    gettestiById,
    updatetesti,
    deletetesti
}