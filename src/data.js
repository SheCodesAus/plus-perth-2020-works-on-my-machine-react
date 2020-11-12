export const mentorList = [
  {
    id: 1,
    mentor_name: "Alex Louden",
    mentor_email: "kalalie@yahoo.fr",
    phone_number: "0404204040",
    Bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    location: "Perth",
    skills: ["Django", "React"],
    mentor_type: "Industry Mentor",
    one_day_workshop: true,
  },
  {
    id: 2,
    mentor_name: "Ophelie Cutier",
    mentor_email: "kalalie@yahoo.fr",
    phone_number: "0404204040",
    Bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    location: "Perth",
    skills: ["Django", "React"],
    mentor_type: "Industry Mentor",
    one_day_workshop: true,
  },
  {
    id: 3,
    mentor_name: "Alex Louden",
    mentor_email: "kalalie@yahoo.fr",
    phone_number: "0404204040",
    Bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    location: "Perth",
    skills: ["Django", "React"],
    mentor_type: "Industry Mentor",
    one_day_workshop: true,
  },
];

export const mentorDetail = {
  id: 1,
  mentor_name: "Alex Louden",
  mentor_email: "kalalie@yahoo.fr",
  phone_number: "0404204040",
  Bio:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  location: "Perth",
  skills: ["Django", "React"],
  mentor_type: "Industry Mentor",
  one_day_workshop: true,
};

export const eventsList = {
  id: "qfrik96utr0vrg8hho08i52f2o",
  creator: 2,
  event_city: "Perth",
  event_name: "Event 3",
  event_type: null,
  event_start: "2020-11-07T11:30:00+08:00",
  event_end: "2020-11-07T12:30:00+08:00",
  event_location: "45 St Georges Terrace, Perth WA 6000, Australia",
  all_day: false,
  mentor_list: [1, 2],
  attendance_set: [
    {
      status: "needsAction",
      mentor: {
        id: 1,
        mentor_name: "Bronwyn",
        mentor_email: "bronwyn.1992@gmail.com",
        phone_number: 123,
        location: "test",
        skills: "test",
        mentor_type: "Volunteer",
        one_day_workshop: false,
      },
    },
    {
      status: "accepted",
      mentor: {
        id: 2,
        mentor_name: "admin",
        mentor_email: "shecodestestuser@gmail.com",
        phone_number: 123,
        location: "test",
        skills: "test",
        mentor_type: "Volunteer",
        one_day_workshop: false,
      },
    },
  ],
};
