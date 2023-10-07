import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cx } from "@utils/all";
import { PhotographIcon } from "@heroicons/react/outline";
import CategoryLabel from "@components/blog/category";

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export default function PostList({ post, aspect }) {
  const [data, setData] = useState();

  function convertDate(date) {
    const newDate = date.split("-");
    return `${months[newDate[1] - 1]} ${newDate[2]}, ${newDate[0]}`;
  }

  useEffect(() => {
    setData({
      postTitle: post?.title,
      postAuthorName: post?.author.name,
      postPublishedOn: post?.publishedOn,
      postReadingTime: post?.readingTime,
      postSlug: post?.slug,
      authorImage: post?.author.image.url,
      postImage: post?.image.url
    });
  }, [post]);

  return (
    <>
      <div className="cursor-pointer group">
        <Link href={`/post/${data?.postSlug}`}>
          <a>
            <div
              className={cx(
                "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 hover:scale-105",
                aspect === "landscape"
                  ? "aspect-video"
                  : "aspect-square"
              )}>
              {data ? (
                <Image
                  src={data.postImage}
                  blurDataURL={data.postImage}
                  placeholder="blur"
                  sizes="80vw"
                  layout="fill"
                  objectFit="cover"
                  className="transition-all"
                  alt="Image"
                />
              ) : (
                <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <PhotographIcon />
                </span>
              )}
            </div>
          </a>
        </Link>

        <CategoryLabel categories={post.tags} />

        <div>
          <h2 className="mt-2 text-lg font-bold tracking-normal text-brand-primary dark:text-white">
            <Link href={`/post/${data?.postSlug}`}>
              <a>{data?.postTitle}</a>
            </Link>
            <span className="text-xs text-gray-300 dark:text-gray-600 mx-2">
              &bull;
            </span>
            <span className="text-sm font-light text-gray-400">
              {data?.postReadingTime} min read
            </span>
          </h2>
        </div>

        <div className="hidden">
          {data && (
            <Link href={`/post/${data?.postSlug}`}>
              <>
                {data?.postTitle}{" "}
                <div className="text-sm">
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                    {data?.postReadingTime} mins
                  </p>
                </div>
              </>
            </Link>
          )}
        </div>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0 w-5 h-5">
              {data && (
                <Image
                  src={data.authorImage}
                  blurDataURL={data.authorImage}
                  objectFit="cover"
                  layout="fill"
                  placeholder="blur"
                  sizes="30px"
                  className="rounded-full"
                  alt="Image"
                />
              )}
            </div>
            <span className="text-sm">{data?.postAuthorName}</span>
          </div>
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <div className="text-sm">
            {data && convertDate(data?.postPublishedOn)}
          </div>
        </div>
      </div>
    </>
  );
}
