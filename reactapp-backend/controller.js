const { response } = require('./app');
const Detail = require('./model');

const getDetails = (req, res, next) => {
   Detail.find()
       .then(response => {
            res.json({ response })
       })
       .catch(error => {
            res.json({ error})
       });
};

const addDetail = (req, res, next) => {
    const detail = new Detail({
        id: req.body.id,
        productname: req.body.productname,
        dose: req.body.dose,
        purpose: req.body.purpose,
        instruction: req.body.instruction,
    });
    detail.save()
    .then(response => {
        res.json({ response })
   })
   .catch(error => {
        res.json({ error})
   });
}

const updateDetail = (req, res, next) => {
     const { id, productname, dose, purpose, instruction } = req.body;
 
     console.log(`Updating detail with id: ${id}`);
     console.log(`New data:`, { productname, dose, purpose, instruction });
 
     Detail.updateOne({ id: id }, { $set: { productname, dose, purpose, instruction } })
         .then(response => {
             if (response.nModified === 0) {
                 console.log(`No document found with id: ${id} or no changes made`);
                 res.status(404).json({ message: 'Detail not found or no changes made' });
             } else {
                 console.log(`Detail with id: ${id} updated successfully`);
                 res.json({ response });
             }
         })
         .catch(error => {
             console.error('Error updating detail:', error);
             res.status(500).json({ error });
         });
 };
 

/*const updateDetail = (req, res, next) =>{
    const {id, productname, dose, purpose, instruction} = req.body;
    Detail.updateOne({id: id}, { $set: {productname: productname, dose: dose, purpose:purpose, instruction:instruction} })
    .then(response => {
        res.json({ response })
   })
   .catch(error => {
        res.json({ error})
   });
}*/

const deleteDetail = (req, res, next) =>{
    const id = req.body.id;
    Detail.deleteOne({id: id})
    .then(response => {
        res.json({ response })
   })
   .catch(error => {
        res.json({ error})
   });
}




exports.getDetails = getDetails;
exports.addDetail = addDetail;
exports.updateDetail = updateDetail;
exports.deleteDetail = deleteDetail;