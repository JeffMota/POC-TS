export default function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { aborEarly: false }).error;
        if (error) {
            var err = error.details.map(function (detail) { return detail.message; });
            return res.status(422).send(err);
        }
        next();
    };
}
