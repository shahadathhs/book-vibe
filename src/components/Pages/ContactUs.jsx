const ContactUs = () => {
  return (
    <div className="mt-5 p-8 flex justify-center lg:text-2xl items-center bg-base-200">
      <div className="space-y-3">
        <h3 className="text-green-500 text-2xl font-bold">Contact Us Anytime.</h3>
        <div>
        <p className="font-bold text-gray-500">Here, you will get promotional opportunities at:</p>
        <ul className="pl-3 text-gray-500">
          <li>1. Social Media Blast</li>
          <li>2. Book Trailer</li>
          <li>3. Promote A Book Lesson</li>
          <li>4. Book Giveaway Contest</li>
          <li>5. Author Interview</li>
        </ul>
        </div>
      
        <p className="text-gray-400">You can write to us at: <span className="text-green-600 font-bold">bookvive24/7@gmail.com</span></p>
        <p>We will look forward to hearing from you.</p>
        <p>Thank you for visiting our site!</p>
      </div>
    </div>
  );
};

export default ContactUs;