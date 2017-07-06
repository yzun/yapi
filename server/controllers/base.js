import yapi from '../yapi.js'
class baseController{
    constructor(ctx){
        console.log('baseControler init...')
    }

    getUid(){
        return 0
    }

    getLoginStatus(){
        return true
    }

    getRole(){
        return 'admin'
    }
}

module.exports = baseController