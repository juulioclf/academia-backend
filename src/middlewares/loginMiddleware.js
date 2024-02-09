const validateBody = (request, response, next) => {
    const { body } = request;

    if (body.login === undefined || body.password === undefined) {
        return response.status(400).json({ message: "Some fields are missing.."})
    }
    if (body.login === "" || body.password === "") {
        return response.status(400).json({ message: "Please fill the fields.."})
    }
    next()
}

module.exports = {
    validateBody
}