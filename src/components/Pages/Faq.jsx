const Faq = () => {
  return (
    <div className="p-8 space-y-3">
      <div className="space-y-3 p-3 bg-base-200 rounded-xl border-green-500 border-2">
        <h3 className="text-green-500 text-2xl font-bold">Frequently Asked Questions</h3>
        <p className="text-gray-500">Below are frequently asked questions about Book Vibe. For over twenty years, our mission has been to promote reading and writing as well as to connect authors with readers.  This is our passion and we love what we do.  Therefore, please do not hesitate to send us your questions, suggestions, and comments. We are always looking for new ways to achieve our mission. Happy Book Vibe-ing!</p>
      </div>
      <div className="space-y-1">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked /> 
          <div className="collapse-title text-xl font-medium text-green-500">
          Who are we?
          </div>
          <div className="collapse-content text-gray-500"> 
            <p>We are a worldwide network of adult and student (preteen and teen) book reviewers and readers.</p>
            <p>Parents, teachers, librarians, and other educators can involve their readers as book reviewers too, either as individuals or in book clubs or reading groups.</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" /> 
          <div className="collapse-title text-xl font-medium text-green-500">
          What can we find at LitPick Book Reviews online?
          </div>
          <div className="collapse-content text-gray-500"> 
            <p>At Book Vibe, we have picture books, middle grade, young adult, and adult books to read and recommend. Book Vibe reviewers review these books, and we post their book reviews for all to see.</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" /> 
          <div className="collapse-title text-xl font-medium text-green-500">
          How can we start a book club with Book Vibe?
          </div>
          <div className="collapse-content text-gray-500"> 
            <p>A teacher, librarian, or parent can sponsor a Book Vibe book club or reading group by signing up their readers for a group membership. Groups of people can review the same title on Book Vibe as an eBook. We have hundreds of eBooks on our list that are available for review.  Limited quantities of print review books make it difficult for us to furnish multiple copies to large groups, but educators and parents have used the Book Vibe program for their book clubs by allowing each person to choose a different print book from our list to read and review.  Once a week or month at club meetings, a different person then presents their book and book review to the group for discussion. This way, other people in the club can decide if they would like to read the book too. The many different review copies can then be donated by reviewers to the library's book collection.</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked /> 
          <div className="collapse-title text-xl font-medium text-green-500">
          How can I help with Book Vibe?
          </div>
          <div className="collapse-content text-gray-500"> 
            <p>You can join Book Vibe as a volunteer. A group of very skilled and dedicated adults who share our passion for promoting reading and writing generously volunteer their time to help us run our site and provide feedback to our reviewers. Please Contact Us if you are interested in finding out about becoming a Book Vibe volunteer and joining our team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;