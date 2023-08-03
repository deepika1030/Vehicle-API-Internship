const {UserList}=require("../FakeData")
const {csv} = require("csvtojson")
const fs= require('fs')

const resolvers ={
    Query: {
        async getData(){
            const rawData= fs.readFileSync('schema/speed_limit.json')
            const results= JSON.parse(rawData)
            return results
        }
    },
}

module.exports= {resolvers};