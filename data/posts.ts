import { users } from "./users";

export const POSTS=[
    {
        imageUrl:"https://source.unsplash.com/1024x768/?nature/0",
        user:users[0].user,
        likes:12003456,
        caption:'Wisdom looks good on me',
        profile_picture:users[0].image,
        comments:[
            {
                user:'akashgoregaonkar',
                comment:'Wow! Such an amazing click'
            },
            {
                user:'viratgoregaonkar',
                comment:'Wow! Beautiful picture'
            },
            
        ]
    },
    {
        imageUrl:"https://source.unsplash.com/1024x768/?nature/1",
        user:users[1].user,
        likes:73456,
        caption:'Never trust anyone',
        profile_picture:users[1].image,
        comments:[
            {
                user:'akashgoregaonkar',
                comment:'Wow! Such an amazing click'
            }
        ]
    },
    {
        imageUrl:"https://source.unsplash.com/1024x768/?nature/2",
        user:users[2].user,
        likes:3456,
        caption:' Customizable Icons for React Native with support for NavBar/TabBar, image source and full styling.. Latest version: 9.2.0, last published: a',
        profile_picture:users[2].image,
        comments:[
        
        ]
    },
]