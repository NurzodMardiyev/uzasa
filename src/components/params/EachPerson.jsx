import React from "react";
import { useParams } from "react-router-dom";
// import { useGetIndividualsApiQuery } from "../../features/api/apiSlice";

const data = [
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

export default function EachPerson() {
  // const { data } = useGetIndividualsApiQuery();
  const id = useParams();

  const newsData = data?.filter((item) => item.id === id.id);

  const { specials, img, name, biography } = newsData[0];
  return (
    <div>
      <div className="text-center text-[50px] bg-[#F7F7F7]">
        <h1 className="w-[80%] m-auto leading-[50px] py-5">{name}</h1>
      </div>
      <div className="container">
        <div className="mb-5">
          <img src={img} alt="img" />
        </div>
        <div>
          <p>{specials}</p>
          <p className="my-4 font-bold">Boigraphy</p>
          <p>{biography}</p>
        </div>
      </div>
    </div>
  );
}
