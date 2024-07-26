import React, { useState } from "react";
// import { useGetUzasaApiQuery } from "../../features/api/apiSlice";
import "../../App.css";
import { Link } from "react-router-dom";

const data = [
  {
    id: "12345fda678",
    title:
      "The 7th ANIMAFILM International Animation Festival is Accepting Submissions",
    date: "25/06/2024",
    imgUrl:
      "https://anima.az/wp-content/uploads/2024/06/7-Animafilm-Open-Call.png",
    info1:
      "<b>The Azerbaijan Animation Association</b> will hold its <span className='text-[#6B8E3C]'> 7th ANIMAFILM International Animation Festival</span> from October 2–6, 2024, in Baku. Animation professionals, enthusiasts, and studios are invited to participate in the competition program. Animated films are accepted via the festival's online platform, FilmFreeway.",
    info2:
      "<b className='mb-3'>Films must meet the following requirements:</b><ul><li> Can be submitted in local or international categories.</li></ul><ul><li> Must be produced after January 1, 2023.</li></ul><ul> <li> Must be animated for at least 50% of their length. There are no restrictions on the animation techniques and themes used in the film.</li></ul> <ul><li> The deadline for entries is July 15, 2024.</li></ul>The ANIMAFILM International Animation Festival is the first and only animation festival in Azerbaijan. Since 2018, the festival has brought together children and young people, directors, and animation studios; introduced them to international experiences; connected them with professional local and foreign animation masters; showcased hundreds of animated films; and held master classes, conferences, concerts, performances, and exhibitions.",
    images:
      "https://anima.az/wp-content/uploads/2024/06/7-Animafilm-Open-Call.png",
    type: "Festival",
  },
  {
    id: "12345zxc678",
    title:
      "The 7th ANIMAFILM International Animation Festival is Accepting Submissions",
    date: "25/06/2024",
    imgUrl:
      "https://anima.az/wp-content/uploads/2024/06/2024-06-18-17.43.52.jpg",
    info1:
      "<b>The Azerbaijan Animation Association</b> will hold its <span className='text-[#6B8E3C]'> 7th ANIMAFILM International Animation Festival</span> from October 2–6, 2024, in Baku. Animation professionals, enthusiasts, and studios are invited to participate in the competition program. Animated films are accepted via the festival's online platform, FilmFreeway.",
    info2:
      "<b className='mb-3'>Films must meet the following requirements:</b><ul><li> Can be submitted in local or international categories.</li></ul><ul><li> Must be produced after January 1, 2023.</li></ul><ul> <li> Must be animated for at least 50% of their length. There are no restrictions on the animation techniques and themes used in the film.</li></ul> <ul><li> The deadline for entries is July 15, 2024.</li></ul>The ANIMAFILM International Animation Festival is the first and only animation festival in Azerbaijan. Since 2018, the festival has brought together children and young people, directors, and animation studios; introduced them to international experiences; connected them with professional local and foreign animation masters; showcased hundreds of animated films; and held master classes, conferences, concerts, performances, and exhibitions.",
    images:
      "https://anima.az/wp-content/uploads/2024/06/7-Animafilm-Open-Call.png",
    type: "animation",
  },
  {
    id: "12345fass678",
    title:
      "The 7th ANIMAFILM International Animation Festival is Accepting Submissions",
    date: "25/06/2024",
    imgUrl:
      "https://anima.az/wp-content/uploads/2024/04/ATA_banner_3-2-720x720.jpg",
    info1:
      "<b>The Azerbaijan Animation Association</b> will hold its <span className='text-[#6B8E3C]'> 7th ANIMAFILM International Animation Festival</span> from October 2–6, 2024, in Baku. Animation professionals, enthusiasts, and studios are invited to participate in the competition program. Animated films are accepted via the festival's online platform, FilmFreeway.",
    info2:
      "<b className='mb-3'>Films must meet the following requirements:</b><ul><li> Can be submitted in local or international categories.</li></ul><ul><li> Must be produced after January 1, 2023.</li></ul><ul> <li> Must be animated for at least 50% of their length. There are no restrictions on the animation techniques and themes used in the film.</li></ul> <ul><li> The deadline for entries is July 15, 2024.</li></ul>The ANIMAFILM International Animation Festival is the first and only animation festival in Azerbaijan. Since 2018, the festival has brought together children and young people, directors, and animation studios; introduced them to international experiences; connected them with professional local and foreign animation masters; showcased hundreds of animated films; and held master classes, conferences, concerts, performances, and exhibitions.",
    images:
      "https://anima.az/wp-content/uploads/2024/06/7-Animafilm-Open-Call.png",
    type: "opportunities",
  },
  {
    id: "12345asdf678",
    title:
      "The 7th ANIMAFILM International Animation Festival is Accepting Submissions",
    date: "25/06/2024",
    imgUrl: "https://anima.az/wp-content/uploads/2024/04/Insta-PFP.png",
    info1:
      "<b>The Azerbaijan Animation Association</b> will hold its <span className='text-[#6B8E3C]'> 7th ANIMAFILM International Animation Festival</span> from October 2–6, 2024, in Baku. Animation professionals, enthusiasts, and studios are invited to participate in the competition program. Animated films are accepted via the festival's online platform, FilmFreeway.",
    info2:
      "<b className='mb-3'>Films must meet the following requirements:</b><ul><li> Can be submitted in local or international categories.</li></ul><ul><li> Must be produced after January 1, 2023.</li></ul><ul> <li> Must be animated for at least 50% of their length. There are no restrictions on the animation techniques and themes used in the film.</li></ul> <ul><li> The deadline for entries is July 15, 2024.</li></ul>The ANIMAFILM International Animation Festival is the first and only animation festival in Azerbaijan. Since 2018, the festival has brought together children and young people, directors, and animation studios; introduced them to international experiences; connected them with professional local and foreign animation masters; showcased hundreds of animated films; and held master classes, conferences, concerts, performances, and exhibitions.",
    images:
      "https://anima.az/wp-content/uploads/2024/06/7-Animafilm-Open-Call.png",
    type: "Blog",
  },
  {
    id: "123a45fas678",
    title:
      "The 7th ANIMAFILM International Animation Festival is Accepting Submissions",
    date: "25/06/2024",
    imgUrl: "https://anima.az/wp-content/uploads/2023/12/m8-1-720x720.jpg",
    info1:
      "<b>The Azerbaijan Animation Association</b> will hold its <span className='text-[#6B8E3C]'> 7th ANIMAFILM International Animation Festival</span> from October 2–6, 2024, in Baku. Animation professionals, enthusiasts, and studios are invited to participate in the competition program. Animated films are accepted via the festival's online platform, FilmFreeway.",
    info2:
      "<b className='mb-3'>Films must meet the following requirements:</b><ul><li> Can be submitted in local or international categories.</li></ul><ul><li> Must be produced after January 1, 2023.</li></ul><ul> <li> Must be animated for at least 50% of their length. There are no restrictions on the animation techniques and themes used in the film.</li></ul> <ul><li> The deadline for entries is July 15, 2024.</li></ul>The ANIMAFILM International Animation Festival is the first and only animation festival in Azerbaijan. Since 2018, the festival has brought together children and young people, directors, and animation studios; introduced them to international experiences; connected them with professional local and foreign animation masters; showcased hundreds of animated films; and held master classes, conferences, concerts, performances, and exhibitions.",
    images:
      "https://anima.az/wp-content/uploads/2024/06/7-Animafilm-Open-Call.png",
    type: "Blog",
  },
  {
    id: "123dfa4567a8",
    title:
      "The 7th ANIMAFILM International Animation Festival is Accepting Submissions",
    date: "25/06/2024",
    imgUrl:
      "https://anima.az/wp-content/uploads/2023/11/398257636_1345637389639391_245443785749511663_n-720x720.jpg",
    info1:
      "<b>The Azerbaijan Animation Association</b> will hold its <span className='text-[#6B8E3C]'> 7th ANIMAFILM International Animation Festival</span> from October 2–6, 2024, in Baku. Animation professionals, enthusiasts, and studios are invited to participate in the competition program. Animated films are accepted via the festival's online platform, FilmFreeway.",
    info2:
      "<b className='mb-3'>Films must meet the following requirements:</b><ul><li> Can be submitted in local or international categories.</li></ul><ul><li> Must be produced after January 1, 2023.</li></ul><ul> <li> Must be animated for at least 50% of their length. There are no restrictions on the animation techniques and themes used in the film.</li></ul> <ul><li> The deadline for entries is July 15, 2024.</li></ul>The ANIMAFILM International Animation Festival is the first and only animation festival in Azerbaijan. Since 2018, the festival has brought together children and young people, directors, and animation studios; introduced them to international experiences; connected them with professional local and foreign animation masters; showcased hundreds of animated films; and held master classes, conferences, concerts, performances, and exhibitions.",
    images:
      "https://anima.az/wp-content/uploads/2024/06/7-Animafilm-Open-Call.png",
    type: "Blog",
  },
  {
    id: "123a4567sas8",
    title:
      "The 7th ANIMAFILM International Animation Festival is Accepting Submissions",
    date: "25/06/2024",
    imgUrl:
      "https://anima.az/wp-content/uploads/bfi_thumb/Untitled-design-7c0u2dkvq1yhpzbllejzuyqxpw7hpy58j8g560y7fgo.jpg",
    info1:
      "<b>The Azerbaijan Animation Association</b> will hold its <span className='text-[#6B8E3C]'> 7th ANIMAFILM International Animation Festival</span> from October 2–6, 2024, in Baku. Animation professionals, enthusiasts, and studios are invited to participate in the competition program. Animated films are accepted via the festival's online platform, FilmFreeway.",
    info2:
      "<b className='mb-3'>Films must meet the following requirements:</b><ul><li> Can be submitted in local or international categories.</li></ul><ul><li> Must be produced after January 1, 2023.</li></ul><ul> <li> Must be animated for at least 50% of their length. There are no restrictions on the animation techniques and themes used in the film.</li></ul> <ul><li> The deadline for entries is July 15, 2024.</li></ul>The ANIMAFILM International Animation Festival is the first and only animation festival in Azerbaijan. Since 2018, the festival has brought together children and young people, directors, and animation studios; introduced them to international experiences; connected them with professional local and foreign animation masters; showcased hundreds of animated films; and held master classes, conferences, concerts, performances, and exhibitions.",
    images:
      "https://anima.az/wp-content/uploads/2024/06/7-Animafilm-Open-Call.png",
    type: "Blog",
  },
];

export default function NewsCard({ filter }) {
  // const { data } = useGetUzasaApiQuery();
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

  const filteredData =
    filter === "all" ? data : data?.filter((item) => item.type === filter);

  return (
    <>
      <div className="flex mt-6 justify-between flex-wrap card-wrapper">
        {filteredData?.slice(0, visibleItems).map((item) => (
          <Link key={item.id} className="mb-6" to={`/news/${item.id}`}>
            <div className="card border-b max-w-[320px] ">
              <div>
                <img src={item.imgUrl} alt="img" className="w-full" />
              </div>
              <div>
                <h3 className="font-bold my-3">{item.title}</h3>
                <p className="date mt-0">{item.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visibleItems < filteredData?.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMore}
            className="btn btn-primary bg-[#6B8E3C] px-3 py-2 rounded text-white font-semibold"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
