let instance
class Utils {
    constructor() {
        if (!instance) {
            instance = this
        }
        return instance
    }
}
module.exports = new Utils()