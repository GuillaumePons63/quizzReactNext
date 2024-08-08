import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Quizz!</h1>
      <p> Ce quizz a été créé afin de tester ses connaissance en informatique</p>
      <a href="/quizz" className="mt-8 p-4 bg-blue-500 text-white rounded-lg">
        Démarrer le quizz !
      </a>
    </main>
  );
}
