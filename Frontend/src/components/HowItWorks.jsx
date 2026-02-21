import { motion } from "framer-motion";
import { FileText, Send, Briefcase } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      title: "Build Your Resume",
      description:
        "Create a standout resume with your skills and professional experience.",
      icon: FileText,
    },
    {
      title: "Apply for Job",
      description:
        "Find and apply for jobs that match your skills and career goals.",
      icon: Send,
    },
    {
      title: "Get Hired",
      description:
        "Connect with employers and start your new professional journey.",
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="lg:text-5xl md:text-4xl text-xl font-bold">
            How it{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            Effortlessly navigate through the process and land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://job-portal-seven-psi.vercel.app/Working/Girl.png"
              alt="How it works"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-linear-to-r from-blue-100 to-purple-100">
                    <Icon className="text-blue-600" size={26} />
                  </div>

                  <div>
                    <h3 className="text-2xl text-gray-800 font-bold ">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
