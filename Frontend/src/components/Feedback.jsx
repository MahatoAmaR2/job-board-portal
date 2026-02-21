import { motion } from "framer-motion";
import { Star } from "lucide-react";

const feedbacks = [
  {
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    message:
      "This platform helped me land my first developer job within 2 weeks. The UI is super smooth and easy to use!",
  },
  {
    name: "Priya Singh",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    message:
      "I love how easy it is to filter jobs. The resume builder feature is amazing and very helpful.",
  },
  {
    name: "Amit Verma",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    message:
      "The best job portal experience I’ve had. Clean design and very fast performance.",
  },
  {
    name: "Sneha Roy",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    message:
      "Applying for jobs has never been this simple. Highly recommend this platform!",
  },
];

function Feedback() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="lg:text-5xl md:text-4xl text-xl font-bold">
            What{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Users
            </span>{" "}
            Say About Us?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {feedbacks.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-px bg-linear-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 transition duration-500"
            >
              <div className="bg-white rounded-2xl p-6 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{user.name}</h4>

                    <div className="flex">
                      {[...Array(user.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {user.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feedback;
