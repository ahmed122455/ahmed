
export const IsHR = async (req, res, next) => {
    if(req.user.role === 'hr') next()
    else return res.status(401).json({msg: "unauthorization"})
}