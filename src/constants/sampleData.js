export const SmapleChats=[

    {
        avater :['https://randomuser.me/api/portraits/women/1.jpg'],
        name:'Jone Doe',
        _id:'1',
        // lastMessage,
        groupChat : false,
        members:['1','2']
    },
    {

        avater :['https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg'],
        name:'Programmers',
        _id:'2',
        // lastMessage,
        groupChat : true,
        members:['1','2']


    }
]

export const SampleNotifications=[

    {
        sender:{
            avater :['https://randomuser.me/api/portraits/women/1.jpg'],
        name:'Jone Doe',
        },
        _id:'1'
    },
    {
sender:{

    avater :['https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg'],
    name:'Programmers',
},
        _id:'2'


    },
    
]


export const SampleGropus=[

    {
        name:'Jone Doe',
        avater :['https://randomuser.me/api/portraits/women/1.jpg'],
      
        _id:'1'
    },
    {


    avater :['https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg','https://randomuser.me/api/portraits/women/1.jpg'],
    name:'Programmers',
        _id:'2'


    },
    
]


export const SampleMessages=[

    {
     attachments:[
        {
            url:'https://example.com/image.jpg',
            public_id:'123',
        }
     ],
     content:'Hey there, how are you?',
     _id:"edf67890yuio",
     sender:{
         avater :['https://randomuser.me/api/portraits/women/1.jpg'],
         name:'Jone Doe',
         _id:'1'
     },
     chat:"chatId",
     createdAt:new Date()

    },
    {
        attachments:[
           {
               url:'https://example.com/image.jpg',
               public_id:'123',
           }
        ],
        content:'Hey there, how are you?',
        _id:"67890",
        sender:{
            avater :['https://randomuser.me/api/portraits/women/1.jpg'],
            name:'Jone Doe',
            _id:'2'
        },
        chat:"chatIdyuioiuy",
        createdAt:new Date()
   
       }
]