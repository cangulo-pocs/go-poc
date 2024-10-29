const fs = require('fs')

function getallWorkspaces(stage) {
    return fs
        .readdirSync(`configuration/${stage}`)
        .filter(file => file.endsWith('.tfvars') && !file.endsWith('.backend.tfvars'))
        .map(file => {
            const workspace = file.replace('.tfvars', '')
            return `${stage}/${workspace}`
        })
}

function filterWorkspace(filesModified, stage) {
    const filePrefix = `configuration/${stage}`
    return filesModified
        .filter(file =>
            file.startsWith(filePrefix) &&
            file.endsWith('.tfvars') &&
            !file.endsWith('.backend.tfvars')
        )
        .map(file => {
            const workspace = file
                .replace(`${filePrefix}/`, '')
                .replace('.tfvars', '')
            return `${stage}/${workspace}`
        })

}

module.exports = {
    getallWorkspaces,
    filterWorkspace
}
