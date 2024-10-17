/**@param {(req: import("express").Request, res: import("express").Response)} cb*/
export const tryCatch = (cb) => async function(req, res) {
    try {
        await cb(req, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}
