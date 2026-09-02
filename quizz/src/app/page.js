import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center overflow-hidden">
      <div className="animate__animated animate__fadeInDown max-w-lg">
        <span className="text-5xl mb-4 block animate__animated animate__bounce animate__delay-1s">🚀</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Bienvenue sur mon Super Quizz !
        </h1>
      </div>
      <p className="animate__animated animate__fadeIn animate__delay-1s text-lg text-gray-600 dark:text-gray-300 max-w-md mt-2">
        Ce quiz a été créé afin de tester vos connaissances en informatique.
      </p>
      <Link
        href="/quizz"
        className="animate__animated animate__fadeInUp animate__delay-1s mt-8 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
      >
        <span>Démarrer le Quizz</span>
        <span>→</span>
      </Link>
    </main>
  );
}
