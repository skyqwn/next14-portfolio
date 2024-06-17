import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <h1 className="text-4xl ">NEXT 14</h1>
        <h2 className="text-2xl">김병호의 넥스트14 포트폴리오!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/signup" className="primary-btn py-2.5 text-lg">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/signin" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
