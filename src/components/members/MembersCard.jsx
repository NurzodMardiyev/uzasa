import React from "react";
import { Link } from "react-router-dom";
// import {
//   useGetIndividualsApiQuery,
//   useGetCompaniesApiQuery,
// } from "../../features/api/apiSlice.js";
const individuals = [
  {
    id: "1212qw1212",
    name: "Elchin Hami Akhundov",
    img: "https://anima.az/wp-content/uploads/2022/12/s3-284x300.png",
    specials: "Director, artist, screenwriter, animator",
    biography:
      "Elchin Hami Akhundov was born in Baku on February 7, 1948. The artist and director Elchin Akhundov, who graduated from Azim Azimzade Art School (1968) and Lviv Polygraph Institute (1978), made significant contributions to the creation and development of Azerbaijani animation. Since 1966, he has been working in the cinema industry as a production designer, animator, and director. E. Akhundov is the director of up to 10 animated films and the artistic director of up to 30 animated films. From 1994, he worked as the artistic director of Azanfilm Animation Film Studio and from 2000 to 2012, as the managing director of the same studio. In 2016, he founded the Gurama Children’s Animation Studio, which he still leads. E. Akhundov has contributed to the emergence of several generations of modern Azerbaijani directors and animators. Furthermore, E. Akhundov is the author of dozens of educational books for children, including the Make it Yourself Series (Arshin Mal Alan, If Not That One, Then This One), Your First Book Series (Learn step-by-step and Work Hard, Ecological Alphabet) etc. He is the chief consultant of the Azerbaijan Animation book. On December 18, 2000, he was awarded the honorary title of Honored Culture Worker of Azerbaijan in recognition of his contributions to the development of Azerbaijani cinema. Elchin Hami Akhundov was awarded the Golden Boat award for his contribution to Azerbaijan animation at the 2nd ANIMAFILM International Animation Festival (2019). In 2022, he received an award “For his contribution to the development of animation” at the Tashkent International Animation Forum. Elchin Hami Akhundov is the co-founder of the Azerbaijan Animation Association.",
    link1: {
      link: "Elchin Hami Akhundov – Facebook",
      address: "https://www.facebook.com/elchin.akhundov",
    },
    link2: {
      link: "GURAMA Children’s Animation Studio – YouTube channel",
      address: "https://www.youtube.com/@quramausaqstudiyas9869/videos",
    },
    filmography: {
      1: "Jirtdan (1969) – artist’s assistant",
      2: "Lion and Two Oxen (1970) – phase artist",
      3: "The Bear and the Mouse (1970) – phase artist, artist-decorator",
      4: "Fitna (1970) – background artist",
    },
  },
  {
    id: "121er21212",
    name: "Elchin Hami Akhundov",
    img: "https://anima.az/wp-content/uploads/2022/12/s3-284x300.png",
    specials: "Director, artist, screenwriter, animator",
    biography:
      "Elchin Hami Akhundov was born in Baku on February 7, 1948. The artist and director Elchin Akhundov, who graduated from Azim Azimzade Art School (1968) and Lviv Polygraph Institute (1978), made significant contributions to the creation and development of Azerbaijani animation. Since 1966, he has been working in the cinema industry as a production designer, animator, and director. E. Akhundov is the director of up to 10 animated films and the artistic director of up to 30 animated films. From 1994, he worked as the artistic director of Azanfilm Animation Film Studio and from 2000 to 2012, as the managing director of the same studio. In 2016, he founded the Gurama Children’s Animation Studio, which he still leads. E. Akhundov has contributed to the emergence of several generations of modern Azerbaijani directors and animators. Furthermore, E. Akhundov is the author of dozens of educational books for children, including the Make it Yourself Series (Arshin Mal Alan, If Not That One, Then This One), Your First Book Series (Learn step-by-step and Work Hard, Ecological Alphabet) etc. He is the chief consultant of the Azerbaijan Animation book. On December 18, 2000, he was awarded the honorary title of Honored Culture Worker of Azerbaijan in recognition of his contributions to the development of Azerbaijani cinema. Elchin Hami Akhundov was awarded the Golden Boat award for his contribution to Azerbaijan animation at the 2nd ANIMAFILM International Animation Festival (2019). In 2022, he received an award “For his contribution to the development of animation” at the Tashkent International Animation Forum. Elchin Hami Akhundov is the co-founder of the Azerbaijan Animation Association.",
    link1: {
      link: "Elchin Hami Akhundov – Facebook",
      address: "https://www.facebook.com/elchin.akhundov",
    },
    link2: {
      link: "GURAMA Children’s Animation Studio – YouTube channel",
      address: "https://www.youtube.com/@quramausaqstudiyas9869/videos",
    },
    filmography: {
      1: "Jirtdan (1969) – artist’s assistant",
      2: "Lion and Two Oxen (1970) – phase artist",
      3: "The Bear and the Mouse (1970) – phase artist, artist-decorator",
      4: "Fitna (1970) – background artist",
    },
  },
  {
    id: "121ty21212",
    name: "Elchin Hami Akhundov",
    img: "https://anima.az/wp-content/uploads/2022/12/s3-284x300.png",
    specials: "Director, artist, screenwriter, animator",
    biography:
      "Elchin Hami Akhundov was born in Baku on February 7, 1948. The artist and director Elchin Akhundov, who graduated from Azim Azimzade Art School (1968) and Lviv Polygraph Institute (1978), made significant contributions to the creation and development of Azerbaijani animation. Since 1966, he has been working in the cinema industry as a production designer, animator, and director. E. Akhundov is the director of up to 10 animated films and the artistic director of up to 30 animated films. From 1994, he worked as the artistic director of Azanfilm Animation Film Studio and from 2000 to 2012, as the managing director of the same studio. In 2016, he founded the Gurama Children’s Animation Studio, which he still leads. E. Akhundov has contributed to the emergence of several generations of modern Azerbaijani directors and animators. Furthermore, E. Akhundov is the author of dozens of educational books for children, including the Make it Yourself Series (Arshin Mal Alan, If Not That One, Then This One), Your First Book Series (Learn step-by-step and Work Hard, Ecological Alphabet) etc. He is the chief consultant of the Azerbaijan Animation book. On December 18, 2000, he was awarded the honorary title of Honored Culture Worker of Azerbaijan in recognition of his contributions to the development of Azerbaijani cinema. Elchin Hami Akhundov was awarded the Golden Boat award for his contribution to Azerbaijan animation at the 2nd ANIMAFILM International Animation Festival (2019). In 2022, he received an award “For his contribution to the development of animation” at the Tashkent International Animation Forum. Elchin Hami Akhundov is the co-founder of the Azerbaijan Animation Association.",
    link1: {
      link: "Elchin Hami Akhundov – Facebook",
      address: "https://www.facebook.com/elchin.akhundov",
    },
    link2: {
      link: "GURAMA Children’s Animation Studio – YouTube channel",
      address: "https://www.youtube.com/@quramausaqstudiyas9869/videos",
    },
    filmography: {
      1: "Jirtdan (1969) – artist’s assistant",
      2: "Lion and Two Oxen (1970) – phase artist",
      3: "The Bear and the Mouse (1970) – phase artist, artist-decorator",
      4: "Fitna (1970) – background artist",
    },
  },
  {
    id: "121oi21212",
    name: "Elchin Hami Akhundov",
    img: "https://anima.az/wp-content/uploads/2022/12/s3-284x300.png",
    specials: "Director, artist, screenwriter, animator",
    biography:
      "Elchin Hami Akhundov was born in Baku on February 7, 1948. The artist and director Elchin Akhundov, who graduated from Azim Azimzade Art School (1968) and Lviv Polygraph Institute (1978), made significant contributions to the creation and development of Azerbaijani animation. Since 1966, he has been working in the cinema industry as a production designer, animator, and director. E. Akhundov is the director of up to 10 animated films and the artistic director of up to 30 animated films. From 1994, he worked as the artistic director of Azanfilm Animation Film Studio and from 2000 to 2012, as the managing director of the same studio. In 2016, he founded the Gurama Children’s Animation Studio, which he still leads. E. Akhundov has contributed to the emergence of several generations of modern Azerbaijani directors and animators. Furthermore, E. Akhundov is the author of dozens of educational books for children, including the Make it Yourself Series (Arshin Mal Alan, If Not That One, Then This One), Your First Book Series (Learn step-by-step and Work Hard, Ecological Alphabet) etc. He is the chief consultant of the Azerbaijan Animation book. On December 18, 2000, he was awarded the honorary title of Honored Culture Worker of Azerbaijan in recognition of his contributions to the development of Azerbaijani cinema. Elchin Hami Akhundov was awarded the Golden Boat award for his contribution to Azerbaijan animation at the 2nd ANIMAFILM International Animation Festival (2019). In 2022, he received an award “For his contribution to the development of animation” at the Tashkent International Animation Forum. Elchin Hami Akhundov is the co-founder of the Azerbaijan Animation Association.",
    link1: {
      link: "Elchin Hami Akhundov – Facebook",
      address: "https://www.facebook.com/elchin.akhundov",
    },
    link2: {
      link: "GURAMA Children’s Animation Studio – YouTube channel",
      address: "https://www.youtube.com/@quramausaqstudiyas9869/videos",
    },
    filmography: {
      1: "Jirtdan (1969) – artist’s assistant",
      2: "Lion and Two Oxen (1970) – phase artist",
      3: "The Bear and the Mouse (1970) – phase artist, artist-decorator",
      4: "Fitna (1970) – background artist",
    },
  },
  {
    id: "12121kn212",
    name: "Elchin Hami Akhundov",
    img: "https://anima.az/wp-content/uploads/2022/12/s3-284x300.png",
    specials: "Director, artist, screenwriter, animator",
    biography:
      "Elchin Hami Akhundov was born in Baku on February 7, 1948. The artist and director Elchin Akhundov, who graduated from Azim Azimzade Art School (1968) and Lviv Polygraph Institute (1978), made significant contributions to the creation and development of Azerbaijani animation. Since 1966, he has been working in the cinema industry as a production designer, animator, and director. E. Akhundov is the director of up to 10 animated films and the artistic director of up to 30 animated films. From 1994, he worked as the artistic director of Azanfilm Animation Film Studio and from 2000 to 2012, as the managing director of the same studio. In 2016, he founded the Gurama Children’s Animation Studio, which he still leads. E. Akhundov has contributed to the emergence of several generations of modern Azerbaijani directors and animators. Furthermore, E. Akhundov is the author of dozens of educational books for children, including the Make it Yourself Series (Arshin Mal Alan, If Not That One, Then This One), Your First Book Series (Learn step-by-step and Work Hard, Ecological Alphabet) etc. He is the chief consultant of the Azerbaijan Animation book. On December 18, 2000, he was awarded the honorary title of Honored Culture Worker of Azerbaijan in recognition of his contributions to the development of Azerbaijani cinema. Elchin Hami Akhundov was awarded the Golden Boat award for his contribution to Azerbaijan animation at the 2nd ANIMAFILM International Animation Festival (2019). In 2022, he received an award “For his contribution to the development of animation” at the Tashkent International Animation Forum. Elchin Hami Akhundov is the co-founder of the Azerbaijan Animation Association.",
    link1: {
      link: "Elchin Hami Akhundov – Facebook",
      address: "https://www.facebook.com/elchin.akhundov",
    },
    link2: {
      link: "GURAMA Children’s Animation Studio – YouTube channel",
      address: "https://www.youtube.com/@quramausaqstudiyas9869/videos",
    },
    filmography: {
      1: "Jirtdan (1969) – artist’s assistant",
      2: "Lion and Two Oxen (1970) – phase artist",
      3: "The Bear and the Mouse (1970) – phase artist, artist-decorator",
      4: "Fitna (1970) – background artist",
    },
  },
];

const companies = [
  {
    id: "123fvg123esa",
    name: "“Dynamic Box” MMC",
    img: "https://anima.az/wp-content/uploads/2022/12/65462b32adbbe-300x300.png",
    CEO: "Shahin Aliyev",
    about:
      "Dynamic Box is a studio with almost 100 projects delivered for international clients across different industries (education, entertainment, transportation, marketing, etc.), using a range of different technologies and techniques. We were founded in 2017 and are a game development studio, in the process of entering animation industry.",
    link1: {
      name: "Dynamic Box – website",
      address: "https://www.dynamicbox.net/",
    },
    link2: {
      name: "Dynamic Box – LinkedIn",
      address: "https://www.linkedin.com/company/dynamicboxs",
    },
  },
];
export default function MembersCard({ filter }) {
  // const { data: individuals } = useGetIndividualsApiQuery();
  // const { data: companies } = useGetCompaniesApiQuery();

  console.log(filter);

  return (
    <div className="flex justify-between flex-wrap member-wrapper">
      {filter
        ? individuals?.map((item) => (
            <div
              key={item.id}
              className="member border rounded-5xl max-w-[290px] rounded-3xl mb-4"
            >
              <Link
                to={`/person/${item.id}`}
                className="flex flex-col justify-center items-center w-full p-10"
              >
                <div className="max-w-[260px]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full object-cover rounded-[50%]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mt-6">{item.name}</h3>
                </div>
              </Link>
            </div>
          ))
        : companies?.map((item) => (
            <div
              key={item.id}
              className="member border rounded-5xl max-w-[300px] rounded-3xl mb-4"
            >
              <Link
                to={`/company/${item.id}`}
                className="flex flex-col justify-center items-center w-full p-10"
              >
                <div className="max-w-[260px]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full object-cover rounded-[50%]"
                  />
                </div>
                <div>
                  <h3 className="font-semibold mt-6">{item.name}</h3>
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
}
