const { StatusCodes } = require('http-status-codes')
const AppError=require('./error-handler')

class ValidationError extends AppError{
    constructor(error){
        let explanation=[];
        let errorName=error.name;
        error.errors.forEach((err)=>{
            explanation.push(err.message)
        })
        super(
            errorName,
            'Not to able to validate the data sent in request ',
            explanation,
            StatusCodes.BAD_REQUEST
        )
    }
}
module.exports=ValidationError