import Link from "next/link";

export default function Header() {
  return (
    <div className="top-0 flex h-[10vh] items-center self-start py-4 px-4">
      <Link href={"/"}>
        <div className="font-Yellowtail text-4xl text-[#188AEC]">
          Medjahdi <span className="text-[#EC4899]">.</span>
        </div>
      </Link>
    </div>
  );
}
