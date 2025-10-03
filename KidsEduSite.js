import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import { PlayCircle, Book, Phone } from "lucide-react";

export default function KidsEduSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-white text-gray-800">
      <header className="p-6 bg-yellow-400 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">EduKids Ethiopia</h1>
        <Button className="bg-green-600 hover:bg-green-700 text-white">Subscribe</Button>
      </header>

      <section className="text-center py-12 px-6">
        <motion.img
          src="/avatar.png"
          alt="EduKids Avatar"
          className="mx-auto w-48 h-48"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h2 className="text-3xl font-bold mt-6">Fun Learning for Kids (2–10)</h2>
        <p className="mt-2 text-gray-600">Watch, play, and grow with safe, educational content made for Ethiopian children.</p>
        <Button className="mt-4 bg-red-500 hover:bg-red-600 text-white flex items-center gap-2">
          <PlayCircle className="w-5 h-5" /> Watch Demo
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="text-center p-6">
            <Book className="mx-auto w-10 h-10 text-green-600" />
            <h3 className="text-lg font-semibold mt-2">Learn ABC & 123</h3>
            <p className="text-gray-600 text-sm mt-1">Songs, stories, and activities that teach basics in a fun way.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="text-center p-6">
            <PlayCircle className="mx-auto w-10 h-10 text-red-500" />
            <h3 className="text-lg font-semibold mt-2">Safe Videos</h3>
            <p className="text-gray-600 text-sm mt-1">Educational cartoons and shows for Ethiopian kids, 100% safe.</p>
          </CardContent>
        </Card>
        <Card className="rounded-2xl shadow-md">
          <CardContent className="text-center p-6">
            <Phone className="mx-auto w-10 h-10 text-blue-600" />
            <h3 className="text-lg font-semibold mt-2">Easy Subscription</h3>
            <p className="text-gray-600 text-sm mt-1">Pay via Airtime, Telebirr, or Chapa to access all content.</p>
          </CardContent>
        </Card>
      </section>

      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">For Parents</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Manage subscriptions easily, know your child is watching safe content, and get local support when needed.
        </p>
        <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white">Subscribe Now</Button>
      </section>

      <footer className="p-6 bg-yellow-400 text-white text-center">
        <p>© 2025 EduKids Ethiopia. All rights reserved.</p>
        <p className="text-sm mt-2">Contact us: edukids@example.com</p>
      </footer>
    </div>
  );
}
