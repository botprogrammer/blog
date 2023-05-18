import Link from "next/link";
import Label from "@components/ui/label";

export default function CategoryLabel({ categories }) {
  return (
    <div>
      {categories?.length
        ? categories.map(({ name }) => (
            <Link href={`/tag/${name}`} key={name}>
              <a>
                <Label color="#FF1A75">{name}</Label>
              </a>
            </Link>
          ))
        : null}
    </div>
  );
}
