// book routes go here

const router = require('express').Router()

router.get('/', (req, res) => {
    res.json(new Array(40).fill(null).map((_, index) =>
        ({ id: index, title: `titleindex${index}` })))
})

//export the router to make the endpoints for books available
module.exports = router