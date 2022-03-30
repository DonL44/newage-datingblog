const { Post } = require('../models');

const postData = [
  {
    title: 'Traditional Dating vs Modern Dating',
    post_content:
      'What is more common in todays New World?! I grew up in a tradional household but everywhere I look I see modern type dating. We have women who have no choice but to be strong to get where they want to go, but then the men that she dates frown on her strengh. What are any of us looking for?',
    user_id: 3,
  },
  {
    title: 'Dating Myths',
    post_content:
      'Is it socially acceptable to go dutch on dates? Are men expected to pay on dates or whoever idea it was to go out? Whats considered to much for conversational pieces; politics, finances, religion, etc when on dates? Whats normal as far acceptable behavior when it comes to your partners baby momma/daddy?',
    user_id: 1,
  },
  {
    title:
      'How long should someone take after a long-term relationship to be to themselves?',
    post_content:
      "If I was in a 6-8 year relationship/marriage but for the last two years I've been drifting away mentally and emotionally if I was to leave right now would it be normal/healthy for me to start dating today? How would I know how long I need to be to myself if I've never been in this situation before",
    user_id: 2,
  },
  {
    title: 'Left side of my brain vs her Right side',
    post_content:
      "If I think more with my left side would the relationship be doomed the fail if I'm talking to someone who thinks more with there right side? I feel like I am more logical while the other person is more optimistic. I like to solve problems by thinking and executing while the other person rather rants and do nothing. Am I interpreting the two sides of a brain the wrong way?",
    user_id: 5,
  },
  {
    title: 'Why does color matter?',
    post_content:
      "I thought beauty was in the eye of the beholder. But yet why do people try to pass off the word preferences to defend why they only date certain demographics. I feel like it confuses people to act like people they are not just so they can be socially accepted in certain social groups. If I want to date this particular person why must I endure looks of disdain from my peers? There's more to a man or woman than the surface of their skin.",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
