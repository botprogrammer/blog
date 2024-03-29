import Image from "next/image";
import postStyle from "../../css/post";
import { Box } from "@mui/material";
import { Markup } from "interweave";

export default function AuthorCard({
  authorImage,
  authorName,
  authorShortDescription
}) {
  return (
    <Box sx={postStyle}>
      <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
          <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
            {authorImage && (
              <Image
                src={authorImage}
                // loader={imageProps.loader}
                blurDataURL={authorImage}
                objectFit="cover"
                alt={authorName}
                placeholder="blur"
                layout="fill"
                className="rounded-full"
              />
            )}
          </div>
          <div>
            <div className="mb-3">
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                About {authorName}
              </h4>
            </div>
            <div>
              <Markup content={authorShortDescription} />
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
