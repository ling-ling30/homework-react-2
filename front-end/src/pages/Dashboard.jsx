import useUserStore from "../zustand/userStore";

export function Dashboard() {
  const { user, error, loading } = useUserStore();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!user) {
    return <p>{error}</p>;
  }
  return (
    <div className="h-screen bg-base-100">
      <h1 className="text-lg font-semibold p-3 m-6 text-center text-accent-content">
        {" "}
        Welcome, {user.name}, to Your Gateway to Knowledge{" "}
      </h1>
      <h2 className="p-5 m-4 text-center text-accent-content">
        {" "}
        it is with great pleasure that we welcome you to our online shared
        library, where the pursuit of knowledge is limitless, and the world of
        learning is at your command.
        <br />
        <br />
        Your Personal Oasis: As you step into your account, John, you will
        discover your own haven in our digital library. Here, you can curate
        your collection, explore your interests, and engage in the joy of
        reading like never before. <br />
        <br />
        Your Collection, Your Way: Your account is the epicenter of your library
        experience. It is where you can build your personal collection of books,
        articles, and resources. Simply add your favorite titles, curate reading
        lists, and immerse yourself in topics that captivate your imagination.
        <br />
        <br />
        Account Control: John, your account is not just a place to store your
        beloved books; it is your control center. Update your profile, manage
        your reading history, and fine-tune your preferences for a tailored
        library experience.
        <br />
        <br /> Connect and Share: But the magic does not stop there. Connect
        with fellow book enthusiasts, share your thoughts on your latest reads,
        and dive into discussions that spark your curiosity.
        <br />
        <br />
        Freedom to Explore: Like a library with no closing hours, our digital
        space is always open. There are no late fees, no due dates, and no
        restrictions. It is your world to explore on your terms.{" "}
      </h2>
    </div>
  );
}
