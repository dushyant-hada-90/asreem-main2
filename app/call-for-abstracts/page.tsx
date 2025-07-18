import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call for Abstracts | ASREEM 2026",
  description: "Submit your abstract for ASREEM 2026 International Conference",
};

export default function CallForAbstracts() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Call for Abstracts
          </h1>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We invite researchers, academicians, and industry professionals to
            submit their abstracts for ASREEM 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Submission Guidelines */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Submission Guidelines
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Abstracts should be 250-300 words</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Include title, authors, affiliations, and keywords</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>
                  Clearly state objectives, methodology, results, and
                  conclusions
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>Format of Abstract and Camera Ready Paper is given below in the template</span>
              </li>
            </ul>
          </div>

          {/* Important Dates */}
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">
              Important Dates
            </h2>
            <ul className="space-y-4">
              <li>
                <div className="font-medium text-amber-900">
                  {/* Abstract Submission Opens */}
                </div>
                {/* <div className="text-gray-700">January 15, 2025</div> */}
              </li>
              <li>
                <div className="font-medium text-amber-900">
                  Abstract Submission Deadline
                </div>
                <div className="text-gray-700">August 31, 2025</div>
              </li>
              <li>
                <div className="font-medium text-amber-900">
                  Notification of Acceptance
                </div>
                <div className="text-gray-700">October 15, 2025</div>
              </li>
              <li>
                <div className="font-medium text-amber-900">
                  {/* Early Bird Registration */}
                </div>
                {/* <div className="text-gray-700">November 15, 2025</div> */}
              </li>
            </ul>
          </div>

          {/* Presentation Formats */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Presentation Formats
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">
                  Oral Presentation
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  10 minutes presentation + 3 minutes Q&A
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">
                  Poster Presentation
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Poster size: A0 (841 x 1189 mm), portrait orientation
                </p>
              </div>
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-semibold text-blue-700">
                  Virtual Presentation
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Pre-recorded video presentation (10-12 minutes)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Topics of Interest */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Topics of Interest
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
            ASREEM 2.0 will feature a comprehensive technical program covering
            the latest research and innovation in energy and environmental
            researches. The conference will bring together
            leading researchers, engineers, and scientists in the domain of interest
            from around the world. Topics of interest
            for submission include, but are not limited to:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Wastewater treatment systems and recycling/reuse and Resource Recovery",
              "Biomass: Algae-based treatment, bio-energy production",
              "Biosensors Green synthesis using biotechnology and biocatalysts",
              "Renewable Energy",
              "Management systems for energy storage and supply",
              "Nanotechnology for Energy Conservation and Effective utilization ",
              "Green Nanotechnology",
              "Modelling & Simulation: Life Cycle Analysis & Computational Fluid Dynamics",
              "Advanced oxidation processesandSonochemistry",
              "Process intensification",
            ].map((topic, index) => (
              <div
                key={index}
                className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors"
              >
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{topic}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 italic">
            * The above list is not exhaustive. Related topics are also welcome.
          </p>
        </div>

        {/* Submission Buttons */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to Submit Your Abstract?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Submit your abstract through our online submission system. For any
            queries, please contact the conference secretariat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://forms.gle/B8QHHTja4SRSoTw38"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors text-center"
            >
              Submit Abstract
            </a>
            <a
              href="/abstract-template.doc"
              download
              className="px-8 py-3 border-2 border-green-600 text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors text-center"
            >
              Download Template
            </a>
            <Link
              href="/registration"
              className="px-8 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors text-center"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
