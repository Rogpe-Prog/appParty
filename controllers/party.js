
const newForm = (req, res) => {
    res.render('partials/new')
}

const newProcess = async({ Party }, req, res) => {
    const infos = new Party(req.body)
    try {
        await infos.save()
        res.redirect('/index')
    }catch(e){
        const error = Object.keys(e.errors)
        console.log(error)
        res.render('partials/new')
    }
}

const parties = async ({ Party }, req, res) => {
    const infos = await Party.find({})
    res.render('partials/parties', { infos })
}

const editForm = async ({ Party }, req, res) => {
    const infos = await Party.findOne({_id: req.params.id})
    res.render('partials/edit', { infos })
}

const editProcess = async({ Party }, req, res) => {
    const infos = await Party.findOne({_id: req.params.id})
    infos.note = req.body.note
    try{
        await infos.save()
        res.redirect('/parties')
    }catch(e){
        const error = Object.keys(e.errors)
        console.log(error)
        res.render('partials/edit')
    }
}

const deletes = async ({ Party }, req, res) =>{
    await Party.deleteOne({_id: req.params.id})
    res.redirect('/index')
}


module.exports = {
    newForm, newProcess, parties, editForm, editProcess, deletes
}