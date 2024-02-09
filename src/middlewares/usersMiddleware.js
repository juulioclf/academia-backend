const validateBody = (request, response, next) => {
    const { body } = request;

    if (body.username === undefined || body.email === undefined || body.password === undefined) {
        return response.status(400).json({ message: "Some fields are missing.."})
    }
    if (body.username === "" || body.email === "" || body.password === "") {
        return response.status(400).json({ message: "Some fields are missing.."})
    }
    next()
}

module.exports = {
    validateBody
}