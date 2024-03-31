import { Button } from "flowbite-react";
export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Pojects MERN</h1>
      <p className="text-md text-gray-500">Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
      <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none">
        <a href="https://github.com/poorna-24" target="_blank" rel="noopener noreferrer">
          Click here for Github page
        </a>
      </Button>
    </div>
  );
}
