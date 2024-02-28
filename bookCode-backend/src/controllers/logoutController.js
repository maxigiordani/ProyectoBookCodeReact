import jwt from 'jwt-simple'

export const logout =async (req,res) => {
    const token = req.headers['user-token']
    jwt.encode(token,"",{expiredIn:1}, (logout, error)=>{
        if (logout) {
            res.redirect('/home')
        }else{
            res.json({mensaje: 'Hubo un error'})
        }
    })
}