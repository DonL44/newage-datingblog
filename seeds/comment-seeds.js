const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "OMG! I forgot about the two sides of the brain, I need to study the differences and see if that answers some questions I've been having. Lol!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "This is a good question. I'm curious as to how much this would play into chemisty if you have two people who think and problem solve with opposite sides of their brain."
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I feel a lot of people sleep on this topic. I feel the best way this could be handled is the way people raise and brought up."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "The idea of whoever intiated to go out pays makes sense to me."
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "There's a possibilty that even if you think with opposite sides of the brain the two people could balance each other out."
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "I feel that a person should take time to make sure that there in a right place coming out of a situation like that, because it may not be until your dating that you realize things about yourself."
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I feel this is very important because I find myself thinking I wasnt something tradional but through my dating experience I realize that I practice more modern concepts which is probably why I run into a lot of problems when dating."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;