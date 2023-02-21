const { Post } = require('../models');

const postData = [
    {
        title: "Mini Blog deployed!",
        post_content: "Mini blog was build and designed to host various narratives and writings from users all over the world. Now that it has been fully deployed.",
        user_id: 3
    },
    {
        title: "Employee Tracker ready for use!",
        post_content: "The employee tracker command line tool is great for managing the various all aspects of the business. From managing by department to salary level and even by id and title of the employee",
        user_id: 1
    },
    {
        title: "Work Day Scheduler tool now available!",
        post_content: "A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. Use Moment.js library to work with date and time",
        user_id: 2

    },
    {
        title: "Looking for love in the development industry? Cinder.io can help!",
        post_content: "Cinder is the new home for all developers looking for love and to share some meaniful realationships with people in the industry.",
        user_id: 5
    },
    {
        title: "Spoopy?",
        post_content: "Spoopy is a fun app that gives you great costume ideas and some cheeky pickup lines fit for any adult venue.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;