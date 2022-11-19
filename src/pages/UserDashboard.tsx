import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function UserDashboard() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="mb-auto">Content</main>
      {/*<Content /> -- comentario*/}
      <Footer />
    </div>
  );
}
