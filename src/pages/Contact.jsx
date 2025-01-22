function Contact() {
    return (
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <form className="mt-8">
          <input type="text" placeholder="Nume" className="border p-2 w-full mb-4" />
          <input type="email" placeholder="Email" className="border p-2 w-full mb-4" />
          <textarea placeholder="Mesaj" className="border p-2 w-full mb-4" rows="5"></textarea>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">Trimite</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  