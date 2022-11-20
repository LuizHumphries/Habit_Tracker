import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SubHeader } from "../components/SubHeader";

export function UserDashboard() {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <Header />
      <SubHeader />
      <main className="mb-auto bg-gray-900 text-white h-full text-center align-center justofy-center">
        Content
      </main>
      {/*<Content /> -- comentario*/}
      <Footer />
    </div>
  );
}
