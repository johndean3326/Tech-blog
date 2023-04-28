const sequelize = require("../config/connection")
const {User,Post,Comment} = require("../models")

const users = [{
    username: "mike",
    password: "mikeypw"
},
{
    username: "jim",
    password: "jimmypw"
},
{
    username: "sam",
    password: "sammypw"
},{
    username: "john",
    password: "johnnypw"
},

]

const posts = [
    {
        title: "first post",
        content: "number 1",
        userId: 1
    },
    {
        title: "second post",
        content: "number 2",
        userId: 1
    },
    {
        title: "Mike's first post",
        content: "yo its mike",
        userId: 2
    },
    {
        title: "Sam's first post",
        content: "yo its sam",
        userId: 3
    },
]

const comments = [
    {
        body: "New Postings Available!",
        blogId: 1,
        userId: 1
    },
    {
        body: "YAY!",
        blogId: 3,
        userId: 2
    },
    {
        body: "Awesome!",
        blogId: 4,
        userId: 1
    },
    {
        body: "Another DAY!",
        blogId: 2,
        userId: 3
    },

]

const insertSeeds = async () => {
    try{
        await sequelize.sync({ force: true });
  
        await User.bulkCreate(users, {
            individualHooks: true,
            });  
        await Post.bulkCreate(posts);
        await Comment.bulkCreate(comments);  
        
    process.exit(0);
}
catch(err){
    console.log(err)
}}
  
  insertSeeds();