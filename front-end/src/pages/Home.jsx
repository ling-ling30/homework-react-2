import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="bg-base-100 h-screen">
      <h1 className="text-3xl text-center p-3 mt-4 font-semibold text-accent-content">
        Privalib: Discover the World of Knowledge with Our Online Shared Library
      </h1>
      <h3 className="text-md text center p-5 m-4 text-accent-content ">
        Welcome to the future of learning and exploration, where knowledge knows
        no boundaries. Introducing our online shared library, your gateway to an
        extensive collection of resources that are just a click away. A Universe
        of Information: Our library is a treasure trove of knowledge, containing
        a vast array of books, articles, journals, and multimedia resources
        spanning every topic under the sun. Whether you're a student, a
        researcher, a lifelong learner, or just a curious mind, there's
        something here for you. Access from Anywhere: No more limits! With our
        online shared library, you have 24/7 access to a world of information
        from the comfort of your home, office, or wherever your adventures take
        you. The library is at your fingertips, anytime, anywhere. Collaboration
        and Sharing: Connect with fellow enthusiasts and scholars in our vibrant
        community. Share insights, spark discussions, and collaborate on
        projects, all within the library's digital realm. It's a hub for
        intellectual exchange and growth. Personalized Experience: Tailor your
        library experience to your unique interests and preferences. Create your
        reading lists, highlight important passages, and even receive
        recommendations based on your reading history. Your journey through
        knowledge is personalized like never before. No More Late Fees: Say
        goodbye to overdue fines and cumbersome due dates. Our digital library
        means no more rushing to return borrowed materials. You have the freedom
        to read and explore at your own pace. Join Us Today: Dive into a world
        of endless possibilities. Unlock the doors of discovery and
        enlightenment with our online shared library. Embrace the power of
        knowledge sharing and become part of a global community that's
        passionate about learning. Don't wait any longer. Join our online shared
        library today and embark on a journey of exploration, education, and
        enlightenment like never before. Welcome to the future of learning!
      </h3>
      <div className="flex justify-center ">
        <Link
          to="/register"
          className="bg-gradient-to-r from-yellow-500 to-pink-500 text-center p-2 rounded-lg font-semibold text-lg justify-center"
        >
          Sign up for a free account today!
        </Link>
      </div>
    </div>
  );
}
