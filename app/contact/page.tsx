export default function Contact() {
  return (
    <section id="contact" className="px-10 py-16 bg-gray-100">
  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

  <div className="text-gray-700 text-lg space-y-3">
    <p>📞 Phone: <span className="font-medium">+91 9876543210</span></p>

    <p>
      ✉️ Email:{" "}
      <a
        href="mailto:hello@foodie.com"
        className="text-orange-600 font-medium underline hover:text-orange-700"
      >
        hello@foodie.com
      </a>
    </p>

    <p>
      🔗 Website:{" "}
      <a
        href="https://www.foodie-website.com"
        target="_blank"
        className="text-orange-600 font-medium underline hover:text-orange-700"
      >
        www.foodie-website.com
      </a>
    </p>
  </div>
</section>

  );
}
