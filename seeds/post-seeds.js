const { Post } = require("../models");

const postData = [
  {
    title: "example",
    content: "A small example, but I dont want it to be too short.",
    user_id: 1,
  },
  {
    title: "I'm just glad my fat, ugly mama isn't alive to see this day.",
    content:
      "We'll go deliver this crate like professionals, and then we'll go home. You, a bobsleder!? That I'd like to see! I am Singing Wind, Chief of the Martians. Say it in Russian! Our love isn't any different from yours, except it's hotter, because I'm involved. I saw you with those two ladies of the evening at Elzars. Explain that. No! The cat shelter's on to me. When will that be? I had more, but you go ahead.",
    user_id: 2,
  },
  {
    title: "What are their names?",
    content:
      "It's okay, Bender. I like cooking too. I'll get my kit! I'm Santa Claus! Good news, everyone! There's a report on TV with some very bad news! I meant 'physically'. Look, perhaps you could let me work for a little food? I could clean the floors or paint a fence",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
