import BlogSection from "./BlogSection";
import Testimonials from "./Testimonials";

const TestimonialsAndBlogs = () => {
  return (
    <section className="max-w-384 mx-auto grid grid-cols-2 gap-6 px-6 py-12">
      <Testimonials />
      <BlogSection></BlogSection>
    </section>
  );
};

export default TestimonialsAndBlogs;
