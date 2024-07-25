import { getDocumentBySlug } from "outstatic/server";
import markdown from "@wcj/markdown-to-html";
import styles from "./richtext.module.css";

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await getData({ slug: params.slug });
  console.log("posts!!!", posts);
  return (
    <div
      className={"bg-[white] h-screen w-screen text-[black] " + styles.richtext}
    >
      <main className="max-w-xl mx-auto py-8">
        <h2 className="font-medium mb-3">{posts.title}</h2>
        <div
          className="flex flex-col gap-y-4"
          dangerouslySetInnerHTML={{
            __html: markdown(posts.content),
          }}
        />
      </main>
    </div>
  );
}

async function getData(params: { slug: string }) {
  console.log(params);
  const post = getDocumentBySlug("posts", params.slug, [
    "title",
    "publishedAt",
    "slug",
    "author",
    "content",
    "coverImage",
  ]);

  return {
    ...post,
  };
}

// const Page = () => {
//   return (
//     <div className="bg-[white] h-screen w-screen text-[black]">
//       <main className="max-w-xl mx-auto py-8">
//         <h2 className="font-medium mb-3">Making the days count</h2>
//         <div className="flex flex-col items-center gap-y-4">
//           <p>
//             Nadine Stair, an 85-year-old woman from Louisville, Kentucky, shares
//             her answer when asked, "How would you have lived your life
//             differently if you had a chance?" ​
//           </p>
//           <blockquote className="border-l-2 border-gray-6 p-4 bg-gray-2 rounded-sm leading-relaxed flex flex-col gap-y-3">
//             <p>
//               If I had my life to live over again, I’d dare to make more
//               mistakes next time. I’d relax. I’d limber up. I’d be sillier than
//               I’ve been this trip. I would take fewer things seriously. I would
//               take more chances, I would eat more ice cream and less beans.
//             </p>
//             <p>
//               I would, perhaps, have more actual troubles but fewer imaginary
//               ones. You see, I’m one of those people who was sensible and sane,
//               hour after hour, day after day. Oh, I’ve had my moments. If I had
//               to do it over again, I’d have more of them. In fact, I’d try to
//               have nothing else—just moments, one after another, instead of
//               living so many years ahead of each day. I’ve been one of those
//               persons who never goes anywhere without a thermometer, a hot-water
//               bottle, a raincoat, and a parachute. If I could do it again, I
//               would travel lighter than I have.
//             </p>
//             <p>
//               If I had to live my life over, I would start barefoot earlier in
//               the spring and stay that way later in the fall. I would go to more
//               dances, I would ride more merry-go-rounds, I would pick more
//               daisies.
//             </p>
//           </blockquote>
//         </div>
//       </main>
//     </div>
//   );
// };
// export default Page;
