const Post = require('../models/post');

const User = require('../models/user');

module.exports.home = async function (req, res) {

    // posts.find({}, function (err, posts) {


    //     return res.render('home', {
    //         title: "Home",
    //         posts: posts
    //     });
        
    // });

    // const posts = await Post.find().populate('user').populate
    // console.log(posts.user);
    // return res.render('home', {
    //             title: "Home",
    //             posts: posts
    //         });

    try {

        let posts = await Post.find({}).
        sort('-createdAt').
        populate('user').
        populate({
            path: 'comment',
            populate: {
                path: 'user'
            }
        });
        

    let user = await User.find({});

    return res.render('home', {
        title: "Home",
        posts: posts,
        all_users: user
    });
        
    } catch (err) {
        
        req.flash('error', err);
        return;
    }
           
};